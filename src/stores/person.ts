import { create } from "zustand";

type State = {
  firstName: string,
  lastName: string,
}

type Actions = {
  updateFirstName: (firstName: State["firstName"]) => void,
  updateLastName: (lastName: State["lastName"]) => void,
}

// Create your store, which includes both state and (optionally) actions
export const usePersonStore = create<State & Actions>((set) => ({
  firstName: "",
  lastName: "",
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  updateLastName: (lastName) => set(() => ({ lastName: lastName })),
}));