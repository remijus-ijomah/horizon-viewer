export default function Cabin() {
  return (
    <mesh castShadow position={[0, 1, -0.1]}>
      <boxGeometry args={[1.6, 0.6, 1.2]} />

      <meshPhysicalMaterial
        color="#07131f"
        metalness={0.1}
        roughness={0.05}
        transmission={0.7}
        thickness={0.4}
        transparent
        opacity={0.85}
        clearcoat={1}
      />
    </mesh>
  );
}
