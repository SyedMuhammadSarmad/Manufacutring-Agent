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
    input_variables=["features", "material", "tolerance", "threads"],
    template="""You are a CNC machining expert. Analyze the part features and determine exact CNC operations and tools required.

Part Features:
{features}

Material: {material}
Required Tolerance: {tolerance}
Threads: {threads}

RULES:
- Cylindrical holes (any diameter) ALWAYS require a DRILL of that exact diameter
- Never use end_mill for cylindrical holes
- End mills are only for pockets, slots, and contour milling
- Face mills are for flat surface machining
- Taps are for threading operations
- For Steel 304 always use carbide tooling
- For Aluminium HSS or carbide both acceptable
- Tool diameters must match exactly what is in the features

Return ONLY a JSON object with this structure (no explanation, no markdown):
{{
  "required_operations": ["list of operations needed"],
  "required_tools": [
    {{"type": "drill", "diameter_mm": <exact hole diameter from features>, "material": "carbide or HSS"}},
    {{"type": "face_mill", "min_diameter_mm": <min 40mm>, "material": "carbide or HSS"}},
    {{"type": "tap", "thread": "<thread spec from user input>"}}
  ],
  "machine_requirements": {{
    "min_work_envelope_mm": {{"x": <length>, "y": <width>, "z": <height>}},
    "min_tolerance_mm": <tolerance value as number only>
  }}
}}"""
)

def classify_operations(features: dict, material: str, tolerance: str, threads: str) -> dict:
    try:
        chain = prompt | llm
        result = chain.invoke({
            "features": json.dumps(features, indent=2),
            "material": material,
            "tolerance": tolerance,
            "threads": threads
        })
        result = result.strip()
        if "```" in result:
            result = result.split("```")[1]
            if result.startswith("json"):
                result = result[4:]
            result = result.split("```")[0]
        return json.loads(result)
    except Exception as e:
        return {"error": str(e), "status": "classification_failed"}

if __name__ == "__main__":
    # Test
    test_features = {
        "bounding_box_mm": {"length": 100, "width": 80, "height": 30},
        "holes": [{"diameter_mm": 6.0, "depth_mm": 30.0, "count": 4}],
        "flat_surfaces_count": 6,
        "chamfers_count": 0
    }
    result = classify_operations(
        features=test_features,
        material="Steel 304",
        tolerance="±0.02mm",
        threads="M8x1.25"
    )
    print(json.dumps(result, indent=2))