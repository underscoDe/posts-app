import { ModalStore } from "@/interfaces";
import { create } from "zustand";

const useLoginModalState = create<ModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useLoginModalState;
