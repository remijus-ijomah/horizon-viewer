import { Suspense } from "react";
import GLTFVehicle from "./GLTFVehicle";
import ProceduralVehicle from "./ProceduralVehicle";
import CanvasLoader from "../components/CanvasLoader";

export default function VehicleRenderer() {
  const useProceduralVehicle = false;

  return useProceduralVehicle ? (
    <ProceduralVehicle />
  ) : (
    <Suspense fallback={<CanvasLoader />}>
      <GLTFVehicle />
    </Suspense>
  );
}
