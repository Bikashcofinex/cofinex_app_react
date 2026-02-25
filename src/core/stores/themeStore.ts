import { create } from "zustand";

type ThemeState = {
  darkMode: boolean;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  darkMode: true,

  toggleTheme: () =>
    set((state) => ({ darkMode: !state.darkMode })),
}));
