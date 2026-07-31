import { create } from "zustand";

type ViewerState = {
  autoRotate: boolean;
  lightingIntensity: number;

  wireframe: boolean;
  showGrid: boolean;
  showShadows: boolean;

  resetCameraRequest: number;

  toggleAutoRotate: () => void;

  setLightingIntensity: (value: number) => void;

  toggleWireframe: () => void;
  toggleGrid: () => void;
  toggleShadows: () => void;
  requestCameraReset: () => void;
};

export const useViewerStore = create<ViewerState>((set) => ({
  autoRotate: false,

  lightingIntensity: 2,

  wireframe: false,
  showGrid: true,
  showShadows: true,
  resetCameraRequest: 0,

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

  toggleGrid: () =>
    set((state) => ({
      showGrid: !state.showGrid,
    })),

  toggleShadows: () =>
    set((state) => ({
      showShadows: !state.showShadows,
    })),

  requestCameraReset: () =>
    set((state) => ({
      resetCameraRequest: state.resetCameraRequest + 1,
    })),
}));
