export default function SceneLights() {
  return (
    <>
      <>
        <ambientLight intensity={0.35} />

        <directionalLight
          castShadow
          position={[8, 10, 5]}
          intensity={2}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        <hemisphereLight intensity={0.5} />
      </>
    </>
  );
}
