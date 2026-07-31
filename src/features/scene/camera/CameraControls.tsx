import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { useViewerStore } from "../../view-inspector/store/viewStore";


export default function CameraControls() {
  const controlsRef = useRef<OrbitControlsImpl>(null);

  const autoRotate = useViewerStore((state) => state.autoRotate);

  const resetRequest = useViewerStore((state) => state.resetCameraRequest);

  useEffect(() => {
    controlsRef.current?.reset();
  }, [resetRequest]);

  return (
    <OrbitControls
      ref={controlsRef}
      makeDefault
      enableDamping
      autoRotate={autoRotate}
      autoRotateSpeed={1}
    />
  );
}
