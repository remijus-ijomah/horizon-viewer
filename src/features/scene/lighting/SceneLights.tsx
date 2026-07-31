import { useViewerStore } from "../../view-inspector/store/viewStore";

export default function SceneLights() {
  const intensity = useViewerStore((state) => state.lightingIntensity);

  const showShadows = useViewerStore((state) => state.showShadows);

  return (
    <>
      <ambientLight intensity={0.35} />

      <directionalLight
        position={[8, 10, 5]}
        intensity={intensity}
        castShadow={showShadows}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <hemisphereLight intensity={0.5} />
    </>
  );
}
