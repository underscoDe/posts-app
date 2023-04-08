import React, { Fragment, useRef } from "react";
import { X } from "react-feather";
import { Dialog, Transition } from "@headlessui/react"
import { ModalProps } from "@/interfaces";

function Modal({ isOpen, onClose, children }: ModalProps) {

  const cancelButtonRef = useRef(null);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={onClose}
        initialFocus={cancelButtonRef}
        open={isOpen}
      >
        <div className="min-h-screen flex justify-center items-center px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

          <span
            className="inline-block absolute top-0 right-0 mt-4 mr-4 text-gray-300 hover:text-white cursor-pointer"
            onClick={onClose}
            ref={cancelButtonRef}
          >
            <X />
          </span>

          <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-2xl">
            <div className="mt-2">{children}</div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
