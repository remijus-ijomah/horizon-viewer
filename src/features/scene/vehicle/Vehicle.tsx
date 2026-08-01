import { useRef } from "react";
import { Group } from "three";

import useVehicleAnimation from "./hooks/useVehicleAnimation";
import VehicleRenderer from "./VehicleRenderer";

export default function Vehicle() {
  const ref = useRef<Group>(null);

  useVehicleAnimation(ref);

  return (
    <group ref={ref}>
      <VehicleRenderer />
    </group>
  );
}
