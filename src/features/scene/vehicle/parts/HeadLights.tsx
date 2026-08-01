export default function Headlights() {
  return (
    <>
      <mesh position={[1.52, 0.55, 0.45]}>
        <boxGeometry args={[0.05, 0.12, 0.18]} />

        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={5}
        />
      </mesh>

      <mesh position={[1.52, 0.55, -0.45]}>
        <boxGeometry args={[0.05, 0.12, 0.18]} />

        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={5}
        />
      </mesh>
    </>
  );
}
