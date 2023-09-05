import React, { useState } from 'react'
import ReactModal from 'react-modal';
import { FaQuestionCircle, FaRegQuestionCircle } from 'react-icons/fa'

interface ModalProps {
  isOpen: boolean;
  isCloseEsc: boolean;
  isCloseOnOverlay: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  onRequestClose: () => void;
  onConfirmed: (confimado: boolean) => void
  //icon: React.ReactNode;
  title: string;
  titleButton1: string;
  titleButton2: string;
  children: string | JSX.Element | JSX.Element[];
}

//DOC : http://reactcommunity.org/react-modal/

const ModalDialog = ({ title, titleButton1, titleButton2, isOpen, onConfirmed, setIsOpen, isCloseEsc, isCloseOnOverlay, onRequestClose, children }: ModalProps) => {

  const CloseOnOverlay = () => {
    if (isCloseOnOverlay)
      onRequestClose()
  }

  const onConfirmSubmit = () => {
    //event.preventDefault();

    console.log("[onConfirmed] : " + true)

    //const newState = { ...state, name: nameSt, site: siteSt, telefone: telefoneSt }
    //newState.name = nameSt
    // setState({
    //   id: idSt,
    //   name: nameSt,
    //   site: siteSt,
    //   telefone: telefoneSt,
    //   funcionamento: funcionamentoSt,
    //   createdAt: createdAtSt,
    // });
    //setState(newState)
    //console.log(newState);
    onRequestClose()
    onConfirmed(true)
  };



  return (
    <div onClick={CloseOnOverlay}>

      <ReactModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        /*onRequestClose={() => {
          setIsOpen(false);
        }}*/

        closeTimeoutMS={200}
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
            <FaQuestionCircle size={26} className="mr-2 text-2xl text-gray-700 " />
            <h2 className="text-xl font-semibold font-bold text-gray-700 ">{title}</h2>
          </div>

          {/* <div className="mb-4"> {children}</div> Content */}
          <div className="mb-4">{/*Content */}
            {children}
          </div>

          <div className="flex justify-end items-center">{/*footer */}

            <button onClick={onConfirmSubmit} className="bg-rose-600 hover:bg-rose-400 text-white font-bold py-2 px-8 rounded ml-2">
              {titleButton1}
            </button>

            <button onClick={onRequestClose} className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-8 border border-gray-400 hover:border-transparent rounded ml-2">
              {titleButton2}
            </button>

          </div>
        </div>
      </ReactModal>
    </div >
  );
};

export default ModalDialog;
