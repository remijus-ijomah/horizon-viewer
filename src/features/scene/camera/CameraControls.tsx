import { OrbitControls } from "@react-three/drei";
import { useViewerStore } from "../../view-controls/store/viewStore";

export default function CameraControls() {
  const autoRotate = useViewerStore((state) => state.autoRotate);

  return (
    <OrbitControls
      makeDefault
      autoRotate={autoRotate}
      autoRotateSpeed={1}
      enableDamping
    />
  );
}
