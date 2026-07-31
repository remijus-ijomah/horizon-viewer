import { create } from "zustand";

type ViewerState = {
  autoRotate: boolean;
  lightingIntensity: number;
  wireframe: boolean;

  toggleAutoRotate: () => void;
  setLightingIntensity: (value: number) => void;
  toggleWireframe: () => void;
};

export const useViewerStore = create<ViewerState>((set) => ({
  autoRotate: false,
  lightingIntensity: 2,
  wireframe: false,

  toggleAutoRotate: () =>
    set((state) => ({
      autoRotate: !state.autoRotate,
    })),

  setLightingIntensity: (value) =>
    set({
      lightingIntensity: value,
    }),

  toggleWireframe: () =>
    set((state) => ({
      wireframe: !state.wireframe,
    })),
}));
