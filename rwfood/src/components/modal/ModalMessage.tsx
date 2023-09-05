import React, { useState } from 'react'
import ReactModal from 'react-modal';
import { FaCheckCircle, FaInfoCircle, FaExclamationTriangle, FaTimesCircle } from 'react-icons/fa'

interface ModalProps {
  isOpen: boolean;
  isCloseEsc: boolean;
  isCloseOnOverlay: boolean;
  //setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  onRequestClose: () => void;
  type: 'success' | 'information' | 'warning' | 'error'; //success, Warning, Error, Information
  title: string;
  titleButton: string;
  children: string | JSX.Element | JSX.Element[];
}

const ModalMessage = ({ title, titleButton, isOpen, isCloseEsc, isCloseOnOverlay, onRequestClose, type, children }: ModalProps) => {

  const CloseOnOverlay = () => {
    if (isCloseOnOverlay)
      onRequestClose()
  }

  return (
    <div onClick={CloseOnOverlay}>

      <ReactModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        /*onRequestClose={() => {
          setIsOpen(false);
        }}*/

        closeTimeoutMS={200}

        //onAfterOpen={onAfterOpen}
        //contentLabel="Example Modal"

        //overlayClassName="modal-overlay"
        //className="modal-content"
        className="bg-slate-900/50 fixed inset-0 flex items-center justify-center z-10 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300"

        overlayClassName={'fixed w-full h-screen top-0 left-0 z-[1000] backdrop-blur-sm flex justify-center items-center hover:shadow-none transition-all duration-300'}

        // overlayClassName="focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300"

        //className={'inline-flex'}


        ariaHideApp={false}

        shouldCloseOnOverlayClick={
          isCloseOnOverlay
      /* Boolean indicating if the overlay should close the modal */}

        shouldCloseOnEsc={
          isCloseEsc
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

            {type === 'success' && <FaCheckCircle size={26} className="mr-2 text-2xl text-gray-600" />}
            {type === 'information' && <FaInfoCircle size={26} className="mr-2 text-2xl text-gray-600" />}
            {type === 'warning' && <FaExclamationTriangle size={26} className="mr-2 text-2xl text-gray-600" />}
            {type === 'error' && <FaTimesCircle size={26} className="mr-2 text-2xl text-gray-600" />}

            <h2 className="text-xl font-semibold">{title}</h2>

          </div>

          {/* <div className="mb-4"> {children}</div> Content */}
          <div className="mb-4">{/*Content */}
            {children}
          </div>

          <div className="flex justify-center items-center">{/*footer */}
            <button onClick={onRequestClose} className="bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent rounded ml-2">
              {titleButton}
            </button>

          </div>
        </div>
      </ReactModal>
    </div >
  );
};

export default ModalMessage;
