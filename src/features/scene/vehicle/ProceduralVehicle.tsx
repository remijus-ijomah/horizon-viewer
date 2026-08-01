import Body from "../vehicle/parts/Body";
import Cabin from "../vehicle/parts/Cabin";
import HeadLights from "../vehicle/parts/HeadLights";
import Wheel from "../vehicle/parts/Wheel";

export default function ProceduralVehicle() {
  return (
    <group>
      <Body />

      <Cabin />
      <HeadLights/>

      <Wheel position={[1, 0.35, 0.8]} />
      <Wheel position={[-1, 0.35, 0.8]} />

      <Wheel position={[1, 0.35, -0.8]} />
      <Wheel position={[-1, 0.35, -0.8]} />
    </group>
  );
}
