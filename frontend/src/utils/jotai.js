import { atom } from "jotai";

export const userAtom = atom({
  role: "",
  name: "",
});
export const loggedInAtom = atom(false);
export const activitiesAtom = atom([]);
