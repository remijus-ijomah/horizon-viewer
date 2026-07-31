export default function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.6, 0]} receiveShadow>
      <planeGeometry args={[100, 100]} />

      <shadowMaterial transparent opacity={0.25} />
    </mesh>
  );
}
