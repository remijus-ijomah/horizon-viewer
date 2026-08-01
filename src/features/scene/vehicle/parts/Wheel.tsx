type WheelProps = {
  position: [number, number, number];
};

export default function Wheel({ position }: WheelProps) {
  return (
    <group position={position} rotation={[Math.PI / 2, 0, 0]}>
      <mesh castShadow>
        <cylinderGeometry args={[0.35, 0.35, 0.25, 32]} />

        <meshStandardMaterial color="#111" roughness={0.9} />
      </mesh>

      <mesh castShadow>
        <cylinderGeometry args={[0.22, 0.22, 0.27, 32]} />

        <meshStandardMaterial color="#C0C0C0" metalness={1} roughness={0.2} />
      </mesh>
    </group>
  );
}
