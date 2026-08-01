export default function Ground() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.62, 0]}
      receiveShadow
    >
      <planeGeometry args={[100, 100]} />

      <meshStandardMaterial color="#111318" roughness={0.75} metalness={0.15} />
    </mesh>
  );
}
