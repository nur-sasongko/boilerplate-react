// This store is bound to the component that uses it.
// https://docs.pmnd.rs/zustand/guides/practice-with-no-store-actions

import { create } from "zustand";

type State = {
  count: number;
  text: string;
};

export const useBoundStore = create<State>(() => ({
  count: 0,
  text: "hello",
}));

export const inc = () =>
  useBoundStore.setState((state) => ({ count: state.count + 1 }));

export const setText = (text: string) => useBoundStore.setState({ text });