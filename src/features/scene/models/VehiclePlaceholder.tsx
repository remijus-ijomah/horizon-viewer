export default function VehiclePlaceholder() {
  return (
    <mesh castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#1976d2" />
    </mesh>
  );
}
