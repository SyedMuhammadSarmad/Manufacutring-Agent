from langchain_community.llms import VLLMOpenAI
from langchain.prompts import PromptTemplate
import json

llm = VLLMOpenAI(
    openai_api_base="http://localhost:8000/v1",
    openai_api_key="EMPTY",
    model_name="Qwen/Qwen2.5-7B-Instruct",
    max_tokens=1000,
    temperature=0.1
)

prompt = PromptTemplate(
    input_variables=["match_result", "features", "material", "tolerance"],
    template="""You are a CNC shop manager. Based on the tool matching results, make a manufacturability decision.

Part Features:
{features}

Material: {material}
Tolerance: {tolerance}

Tool Matching Results:
{match_result}

Return ONLY a JSON object (no explanation, no markdown):
{{
  "decision": "YES" or "NO" or "CONDITIONAL",
  "confidence": "HIGH" or "MEDIUM" or "LOW",
  "reason": "brief reason for decision",
  "action_items": ["list of things needed before starting"],
  "risk_flags": ["list of risks or concerns"],
  "estimated_setup_hours": <number>
}}

Decision rules:
- YES: all tools available, machine fits, tolerance achievable
- NO: critical tools missing and cannot be substituted, or machine too small
- CONDITIONAL: some tools missing but can be purchased, minor risks present"""
)

def assess_feasibility(match_result: dict, features: dict, material: str, tolerance: str) -> dict:
    try:
        chain = prompt | llm
        result = chain.invoke({
            "match_result": json.dumps(match_result, indent=2),
            "features": json.dumps(features, indent=2),
            "material": material,
            "tolerance": tolerance
        })
        result = result.strip()
        if "```" in result:
            result = result.split("```")[1]
            if result.startswith("json"):
                result = result[4:]
            result = result.split("```")[0]
        return json.loads(result)
    except Exception as e:
        return {"error": str(e), "status": "decision_failed"}

if __name__ == "__main__":
    test_match = {
        "tools_available": [
            {"type": "drill", "diameter_mm": 6.0},
            {"type": "face_mill", "min_diameter_mm": 40}
        ],
        "tools_missing": [
            {"type": "tap", "thread": "M10x1.5"}
        ],
        "tools_available_count": 2,
        "tools_missing_count": 1,
        "machine_ok": True,
        "machine_name": "Haas VF2 Mill"
    }
    test_features = {
        "bounding_box_mm": {"length": 100, "width": 80, "height": 30},
        "holes": [{"diameter_mm": 6.0, "depth_mm": 30.0, "count": 4}],
        "flat_surfaces_count": 6
    }
    result = assess_feasibility(
        match_result=test_match,
        features=test_features,
        material="Steel 304",
        tolerance="±0.02mm"
    )
    print(json.dumps(result, indent=2))