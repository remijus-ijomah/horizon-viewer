import CameraControls from "../camera/CameraControls";
import Ground from "../environment/Ground";
import GroundGrid from "../environment/GroundGrid";
import SceneLights from "../lighting/SceneLights";
import Vehicle from "../models/vehicle";
//import VehicleModel from "../models/VehicleModel";
//import VehiclePlaceholder from "../models/VehiclePlaceholder";
import Platform from "../platform/Platform";

export default function Scene() {
  return (
    <>
      <SceneLights />

      <Ground />

      <GroundGrid />

      <Platform />
      <Vehicle />
      {/* <VehiclePlaceholder />  */}
      {/* <VehicleModel/> */}

      <CameraControls />
    </>
  );
}
