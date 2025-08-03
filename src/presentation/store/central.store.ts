import { Central } from "@domain/entities/central/central.entity";
import { create } from "zustand";

type CentralStore = {
  central: Central | null;
  setCentral: (data: Central) => void;
  clearCentral: () => void;
  count: number;
  setCount: (data: number) => void;
};

export const useCentralStore = create<CentralStore>((set) => ({
  central: null,
  setCentral: (data) => set({ central: data }),
  clearCentral: () => set({ central: null }),
  count: 0,
  setCount: (data) => set({ count: data }),
}));
