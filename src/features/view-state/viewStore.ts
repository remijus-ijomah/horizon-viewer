import { create } from "zustand";

type ViewerState = {
  // Viewer controls
  autoRotate: boolean;
  resetCameraRequest: number;

  // Lighting
  lightingIntensity: number;

  // Scene display
  wireframe: boolean;
  showGrid: boolean;
  showShadows: boolean;

  // Vehicle material
  vehicleColor: string;
  metalness: number;
  roughness: number;

  // Viewer actions
  toggleAutoRotate: () => void;
  requestCameraReset: () => void;

  // Lighting actions
  setLightingIntensity: (value: number) => void;

  // Scene actions
  toggleWireframe: () => void;
  toggleGrid: () => void;
  toggleShadows: () => void;

  // Vehicle actions
  setVehicleColor: (color: string) => void;
  setMetalness: (value: number) => void;
  setRoughness: (value: number) => void;
};

export const useViewerStore = create<ViewerState>((set) => ({
  // Viewer controls
  autoRotate: false,
  resetCameraRequest: 0,

  // Lighting
  lightingIntensity: 2,

  // Scene display
  wireframe: false,
  showGrid: true,
  showShadows: true,

  // Vehicle material
  vehicleColor: "#ffffff",
  metalness: 0.5,
  roughness: 0.5,

  // Viewer actions
  toggleAutoRotate: () =>
    set((state) => ({
      autoRotate: !state.autoRotate,
    })),

  requestCameraReset: () =>
    set((state) => ({
      resetCameraRequest: state.resetCameraRequest + 1,
    })),

  // Lighting actions
  setLightingIntensity: (value) =>
    set({
      lightingIntensity: value,
    }),

  // Scene actions
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

  // Vehicle actions
  setVehicleColor: (color) =>
    set({
      vehicleColor: color,
    }),

  setMetalness: (value) =>
    set({
      metalness: value,
    }),

  setRoughness: (value) =>
    set({
      roughness: value,
    }),
}));
