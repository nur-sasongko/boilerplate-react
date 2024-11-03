import { create } from "zustand";
import { devtools } from "zustand/middleware";

type State = {
  bears: number;
};

type Actions = {
  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
};

/*
 *
 * This is the equivalent of the following TypeScript code:
 *
 */
// interface BearState {
//   bears: number,
//   increasePopulation: () => void,
//   removeAllBears: () => void,
//   updateBears: (newBears: number) => void,
// }

export const useBearStore = create<State & Actions>()(
  devtools((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
    updateBears: (newBears) => set({ bears: newBears }),
  })),
);
