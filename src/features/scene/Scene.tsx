import VehicleShadow from "./environment/ContactShadow";
import SceneEnvironment from "../../assets/environments/Environment";
import AssetLoader from "./assets/AssetLoader";
import CameraControls from "./camera/CameraControls";
import Ground from "./environment/Ground";
import GroundGrid from "./environment/GroundGrid";
import SceneLights from "./lighting/SceneLights";
import Platform from "./platform/Platform";
import Vehicle from "./vehicle/Vehicle";


export default function Scene() {
  return (
    <>
      <SceneEnvironment />
      <SceneLights />

      <Ground />

      <GroundGrid />

      <Platform />
      <AssetLoader>
        <Vehicle />
      </AssetLoader>
      <VehicleShadow />
      {/* <VehiclePlaceholder />  */}
      {/* <VehicleModel/> */}

      <CameraControls />
    </>
  );
}
