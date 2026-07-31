import CameraControls from "../camera/CameraControls";
import GroundGrid from "../environment/GroundGrid";
import SceneLights from "../lighting/SceneLights";
import VehiclePlaceholder from "../models/VehiclePlaceholder";

export default function Scene() {
  return (
    <>
      <SceneLights />
      <GroundGrid />
      <VehiclePlaceholder />
      <CameraControls />
    </>
  );
}
