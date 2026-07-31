export default function Platform() {
  return (
    <mesh receiveShadow position={[0, -0.5, 0]}>
      <cylinderGeometry args={[2.4, 2.4, 0.2, 64]} />

      <meshStandardMaterial color="#20262F" metalness={0.3} roughness={0.8} />
    </mesh>
  );
}
