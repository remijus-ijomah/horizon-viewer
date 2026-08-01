import VehiclePaint from "../materials/VehiclePaints";

export default function Body() {
  
  return (
    <mesh castShadow receiveShadow position={[0, 0.95, 0]}>
      <boxGeometry args={[1.5, 0.5, 1.1]} />

      <VehiclePaint />
    </mesh>
  );
}
