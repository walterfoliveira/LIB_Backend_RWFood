import React, { useState } from 'react'
import ReactModal from 'react-modal';
import { FormCompany } from '../FormCompany';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  icon: React.ReactNode;
  title: string;
  children: string | JSX.Element | JSX.Element[];
  onConfirmed: (confirmed: boolean) => void
}

//DOC
//http://reactcommunity.org/react-modal/

const Modal = ({ icon, title, isOpen, onRequestClose, children, onConfirmed }: ModalProps) => {

  function onCloseModal(confirm: boolean) {
    console.log("[onConfirmed] : " + confirm)
    //onConfirmed(confirm)
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      closeTimeoutMS={200}

      //onAfterOpen={onAfterOpen}
      //contentLabel="Example Modal"
      //overlayClassName="modal-overlay"
      //className="modal-content"
      className="bg-slate-900/50 fixed inset-0 flex items-center justify-center z-10 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300"
      overlayClassName={'fixed w-full h-screen top-0 left-0 z-[1000] backdrop-blur-sm flex justify-center items-center hover:shadow-none transition-all duration-300'}


      //overlayClassName="focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300"

      ariaHideApp={false}

      shouldCloseOnOverlayClick={
        true
      /* Boolean indicating if the overlay should close the modal */}

      shouldCloseOnEsc={
        true
      /* Boolean indicating if pressing the esc key should close the modal
         Note: By disabling the esc key from closing the modal
         you may introduce an accessibility issue. */}

      role={
        "dialog"
        /* String indicating the role of the modal, allowing the 'dialog' role
           to be applied if desired.
           This attribute is `dialog` by default. */}

      data={
        { background: "green" }
          /* Additional data attributes (optional). */}
    >
      <div className="max-w-md min-w-[25%] bg-white p-5 rounded-lg focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300">
        <div className="flex flex-row mb-4">{/*header */}
          {icon}
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        {/* <div className="mb-4"> {children}</div> Content */}
        <div className="flex flex-row mb-4">{/*header */}
          <FormCompany />
        </div>



        <div className="flex justify-end items-center">{/*footer */}

          <button onClick={() => onCloseModal(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
            Confirmar
          </button>
          <button onClick={() => onCloseModal(false)} className="bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-2">
            Fechar
          </button>

        </div>
      </div>
    </ReactModal>
  );
};

export default Modal;
