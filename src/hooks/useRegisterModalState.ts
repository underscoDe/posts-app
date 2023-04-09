import { ModalStore } from "@/interfaces";
import { create } from "zustand";

const useRegisterModalState = create<ModalStore>((set) => ({
  isOpen: true,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useRegisterModalState;
