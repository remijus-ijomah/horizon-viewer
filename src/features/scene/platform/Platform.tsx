export default function Platform() {
  return (
    <mesh receiveShadow castShadow position={[0, -0.5, 0]}>
      <cylinderGeometry args={[3.2, 3.2, 0.25, 96]} />

      <meshStandardMaterial color="#25282e" metalness={0.05} roughness={0.65} />
    </mesh>
  );
}
