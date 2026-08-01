import { useGLTF } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

import { useViewerStore } from "../../view-state/viewStore";

const MODEL_PATH = "/models/concept-car.glb";

export default function GLTFVehicle() {
  const { scene } = useGLTF(MODEL_PATH);

  const groupRef = useRef<THREE.Group>(null);

  const vehicleColor = useViewerStore((state) => state.vehicleColor);

  const metalness = useViewerStore((state) => state.metalness);

  const roughness = useViewerStore((state) => state.roughness);

  const model = useMemo(() => {
    return scene.clone(true);
  }, [scene]);

  useEffect(() => {
    model.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;

        mesh.castShadow = true;
        mesh.receiveShadow = true;

        const materials = Array.isArray(mesh.material)
          ? mesh.material
          : [mesh.material];

        materials.forEach((material) => {
          if (
            material instanceof THREE.MeshStandardMaterial ||
            material instanceof THREE.MeshPhysicalMaterial
          ) {
            material.color.set(vehicleColor);
            material.metalness = metalness;
            material.roughness = roughness;
          }
        });
      }
    });

    if (!groupRef.current) return;

    const box = new THREE.Box3().setFromObject(model);

    const size = box.getSize(new THREE.Vector3());

    const maxSize = Math.max(size.x, size.y, size.z);

    const scale = 3 / maxSize;

    // apply scale first
    groupRef.current.scale.setScalar(scale);

    // recalculate after scaling
    const scaledBox = new THREE.Box3().setFromObject(groupRef.current);

    const scaledCenter = scaledBox.getCenter(new THREE.Vector3());

    // center vehicle on X/Z
    groupRef.current.position.x -= scaledCenter.x;

    groupRef.current.position.z -= scaledCenter.z;

    // place vehicle on ground
    groupRef.current.position.y -= scaledBox.min.y;
  }, [model, vehicleColor, metalness, roughness]);

  return (
    <group ref={groupRef}>
      <primitive object={model} />
    </group>
  );
}

useGLTF.preload(MODEL_PATH);
