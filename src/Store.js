import { create } from 'zustand';

export const useColorStore = create((set) => ({
  colors: [],
  rotateAngle: 0,
  gradientType: "linear",
  addColor: (newColor) => set((state) => ({ colors: [...state.colors, newColor] })),
  updateColor: (oldColor, newColor) => set((state) => ({
    colors: state.colors.map(color => {
      if (color !== oldColor) {
        return color;
      }
      return newColor;
    })
  })),
  removeColor: (rcolor) => set(state => ({
    colors: state.colors.filter(color => color !== rcolor)
  })),

  updateRotateAngle: (angle) => set(() => ({ rotateAngle: angle })),
  changeGradientType: (type) => set(() => ({ gradientType: type }))
}))