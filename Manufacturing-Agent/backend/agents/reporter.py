from langchain_community.llms import VLLMOpenAI
from langchain.prompts import PromptTemplate
import json

llm = VLLMOpenAI(
    openai_api_base="http://localhost:8000/v1",
    openai_api_key="EMPTY",
    model_name="Qwen/Qwen2.5-7B-Instruct",
    max_tokens=1500,
    temperature=0.1
)

prompt = PromptTemplate(
    input_variables=["features", "classification", "match_result", "decision"],
    template="""You are a CNC shop manager writing a professional manufacturability report.

Part Features:
{features}

Required Operations & Tools:
{classification}

Tool Inventory Match:
{match_result}

Feasibility Decision:
{decision}

Write a clear, professional manufacturability report. Return ONLY a JSON object:
{{
  "report_title": "Manufacturability Report",
  "overall_status": "APPROVED" or "REJECTED" or "CONDITIONAL APPROVAL",
  "summary": "2-3 sentence executive summary",
  "part_analysis": {{
    "dimensions": "description of part dimensions",
    "complexity": "LOW" or "MEDIUM" or "HIGH",
    "material_notes": "notes about material machinability"
  }},
  "operations_summary": ["list of operations required"],
  "tools_status": {{
    "available": <number>,
    "missing": <number>,
    "missing_details": ["list of missing tools with estimated cost"]
  }},
  "machine_status": "machine fit description",
  "action_required": ["prioritized list of actions"],
  "estimated_total_setup_hours": <number>,
  "recommendation": "final recommendation in 1-2 sentences"
}}"""
)

def generate_report(features: dict, classification: dict, match_result: dict, decision: dict) -> dict:
    try:
        chain = prompt | llm
        result = chain.invoke({
            "features": json.dumps(features, indent=2),
            "classification": json.dumps(classification, indent=2),
            "match_result": json.dumps(match_result, indent=2),
            "decision": json.dumps(decision, indent=2)
        })
        result = result.strip()
        if "```" in result:
            result = result.split("```")[1]
            if result.startswith("json"):
                result = result[4:]
            result = result.split("```")[0]
        return json.loads(result)
    except Exception as e:
        return {"error": str(e), "status": "report_failed"}

if __name__ == "__main__":
    test_features = {
        "bounding_box_mm": {"length": 100, "width": 80, "height": 30},
        "holes": [{"diameter_mm": 6.0, "depth_mm": 30.0, "count": 4}],
        "flat_surfaces_count": 6
    }
    test_classification = {
        "required_operations": ["drilling", "facing"],
        "required_tools": [
            {"type": "drill", "diameter_mm": 6.0, "material": "carbide"},
            {"type": "face_mill", "min_diameter_mm": 40, "material": "carbide"},
            {"type": "tap", "thread": "M10x1.5"}
        ]
    }
    test_match = {
        "tools_available_count": 2,
        "tools_missing_count": 1,
        "tools_missing": [{"type": "tap", "thread": "M10x1.5"}],
        "machine_ok": True,
        "machine_name": "Haas VF2 Mill"
    }
    test_decision = {
        "decision": "CONDITIONAL",
        "reason": "Missing tap for threading",
        "action_items": ["Purchase M10x1.5 tap"],
        "estimated_setup_hours": 2
    }
    result = generate_report(
        features=test_features,
        classification=test_classification,
        match_result=test_match,
        decision=test_decision
    )
    print(json.dumps(result, indent=2))