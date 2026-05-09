from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
import tempfile
import os
import json

from step_parser import extract_features
from agents.classifier import classify_operations
from agents.matcher import match_tools
from agents.decision import assess_feasibility
from agents.reporter import generate_report

app = FastAPI(title="Manufacturing Agent API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/analyze")
async def analyze(
    file: UploadFile = File(...),
    material: str = Form(...),
    tolerance: str = Form(...),
    threads: str = Form(default="None")
):
    # Save uploaded STEP file temporarily
    with tempfile.NamedTemporaryFile(suffix=".step", delete=False) as tmp:
        content = await file.read()
        tmp.write(content)
        tmp_path = tmp.name

    try:
        # Step 1 — Extract features
        features = extract_features(tmp_path)
        if features["extraction_status"] == "failed":
            return {"error": features["error"], "stage": "extraction"}

        # Step 2 — Classify operations
        classification = classify_operations(features, material, tolerance, threads)
        if "error" in classification:
            return {"error": classification["error"], "stage": "classification"}

        # Step 3 — Match tools
        match_result = match_tools(
            classification["required_tools"],
            classification["machine_requirements"]
        )

        # Step 4 — Assess feasibility
        decision = assess_feasibility(match_result, features, material, tolerance)
        if "error" in decision:
            return {"error": decision["error"], "stage": "decision"}

        # Step 5 — Generate report
        report = generate_report(features, classification, match_result, decision)

        return {
            "features": features,
            "classification": classification,
            "match_result": match_result,
            "decision": decision,
            "report": report,
            "status": "success"
        }

    finally:
        os.unlink(tmp_path)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)