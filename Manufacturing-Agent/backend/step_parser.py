import cadquery as cq
from OCP.BRepAdaptor import BRepAdaptor_Surface
from OCP.GeomAbs import GeomAbs_Cylinder, GeomAbs_Plane, GeomAbs_Cone
import json

def extract_features(step_file_path: str) -> dict:
    try:
        model = cq.importers.importStep(step_file_path)
        shape = model.val()
        bb = shape.BoundingBox()
        bounding_box = {
            "length": round(bb.xlen, 3),
            "width": round(bb.ylen, 3),
            "height": round(bb.zlen, 3)
        }
        volume = round(abs(shape.Volume()), 3)
        surface_area = round(shape.Area(), 3)
        holes = {}
        flat_surfaces = []
        chamfers = 0
        faces = model.faces().vals()
        for face in faces:
            # Convert cadquery Face to TopoDS_Face
            topo_face = face.wrapped
            adaptor = BRepAdaptor_Surface(topo_face)
            face_type = adaptor.GetType()
            if face_type == GeomAbs_Cylinder:
                cylinder = adaptor.Cylinder()
                radius = cylinder.Radius()
                diameter = round(radius * 2, 3)
                face_area = round(face.Area(), 3)
                depth = round(face_area / (2 * 3.14159 * radius), 3)
                if diameter not in holes:
                    holes[diameter] = {"diameter_mm": diameter, "depth_mm": depth, "count": 1}
                else:
                    holes[diameter]["count"] += 1
            elif face_type == GeomAbs_Plane:
                flat_surfaces.append(round(face.Area(), 3))
            elif face_type == GeomAbs_Cone:
                chamfers += 1
        return {
            "bounding_box_mm": bounding_box,
            "volume_cm3": round(volume / 1000, 3),
            "surface_area_mm2": surface_area,
            "holes": list(holes.values()),
            "flat_surfaces_count": len(flat_surfaces),
            "chamfers_count": chamfers,
            "total_faces": len(faces),
            "total_edges": len(model.edges().vals()),
            "extraction_status": "success"
        }
    except Exception as e:
        return {"extraction_status": "failed", "error": str(e)}

if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1:
        result = extract_features(sys.argv[1])
        print(json.dumps(result, indent=2))
    else:
        print("Usage: python step_parser.py <path_to_step_file>")