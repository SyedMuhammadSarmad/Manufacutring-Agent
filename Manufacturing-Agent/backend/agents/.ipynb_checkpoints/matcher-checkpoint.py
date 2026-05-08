import json

#Simulating hardcoded database
SHOP_INVENTORY = {
    "tools": [
        {"type": "drill", "diameter_mm": 6.0, "material": "carbide"},
        {"type": "drill", "diameter_mm": 8.0, "material": "carbide"},
        {"type": "drill", "diameter_mm": 10.0, "material": "carbide"},
        {"type": "drill", "diameter_mm": 12.0, "material": "carbide"},
        {"type": "face_mill", "min_diameter_mm": 40, "material": "carbide"},
        {"type": "end_mill", "diameter_mm": 8.0, "material": "carbide"},
        {"type": "end_mill", "diameter_mm": 10.0, "material": "carbide"},
        {"type": "tap", "thread": "M8x1.25"},
        {"type": "tap", "thread": "M6x1.0"},
    ],
    "machines": [
        {
            "name": "Haas VF2 Mill",
            "type": "mill",
            "work_envelope_mm": {"x": 508, "y": 406, "z": 508},
            "min_tolerance_mm": 0.005
        }
    ]
}

def match_tools(required_tools: list, machine_requirements: dict) -> dict:
    available = []
    missing = []

    for req in required_tools:
        found = False
        for inv in SHOP_INVENTORY["tools"]:
            if req["type"] == inv["type"]:
                if req["type"] == "drill":
                    if abs(req.get("diameter_mm", 0) - inv.get("diameter_mm", 0)) < 0.01:
                        found = True
                        break
                elif req["type"] == "face_mill":
                    if inv.get("min_diameter_mm", 0) >= req.get("min_diameter_mm", 0):
                        found = True
                        break
                elif req["type"] == "tap":
                    if req.get("thread") == inv.get("thread"):
                        found = True
                        break
                elif req["type"] == "end_mill":
                    if abs(req.get("diameter_mm", 0) - inv.get("diameter_mm", 0)) < 0.01:
                        found = True
                        break
        if found:
            available.append(req)
        else:
            missing.append(req)

    # Check machine capability
    machine_ok = False
    machine_name = None
    for machine in SHOP_INVENTORY["machines"]:
        envelope = machine["work_envelope_mm"]
        req_envelope = machine_requirements.get("min_work_envelope_mm", {})
        if (envelope["x"] >= req_envelope.get("x", 0) and
            envelope["y"] >= req_envelope.get("y", 0) and
            envelope["z"] >= req_envelope.get("z", 0) and
            machine["min_tolerance_mm"] <= machine_requirements.get("min_tolerance_mm", 0.02)):
            machine_ok = True
            machine_name = machine["name"]
            break

    return {
        "tools_available": available,
        "tools_missing": missing,
        "tools_available_count": len(available),
        "tools_missing_count": len(missing),
        "machine_ok": machine_ok,
        "machine_name": machine_name,
        "match_status": "success"
    }

if __name__ == "__main__":
    test_required_tools = [
        {"type": "drill", "diameter_mm": 6.0, "material": "carbide"},
        {"type": "face_mill", "min_diameter_mm": 40, "material": "carbide"},
        {"type": "tap", "thread": "M10x1.5"}  # intentionally missing
    ]
    test_machine_req = {
        "min_work_envelope_mm": {"x": 100, "y": 80, "z": 30},
        "min_tolerance_mm": 0.02
    }
    result = match_tools(test_required_tools, test_machine_req)
    print(json.dumps(result, indent=2))