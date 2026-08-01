import { useViewerStore } from "../../view-state/viewStore";

export default function SceneLights() {
  const lightingIntensity = useViewerStore((state) => state.lightingIntensity);

  const showShadows = useViewerStore((state) => state.showShadows);

  return (
    <>
      {/* Ambient light */}
      <ambientLight intensity={0.3} />

      {/* Key light */}
      <directionalLight
        position={[6, 8, 5]}
        intensity={lightingIntensity}
        castShadow={showShadows}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Fill light */}
      <directionalLight position={[-6, 4, -3]} intensity={0.6} />

      {/* Rim light */}
      <directionalLight position={[0, 6, -8]} intensity={0.5} />

      {/* Sky contribution */}
      <hemisphereLight args={["#ffffff", "#404040", 0.35]} />
    </>
  );
}
