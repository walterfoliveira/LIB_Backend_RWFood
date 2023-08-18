import React from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  icon: React.ReactNode;
  title: string;
  children: string | JSX.Element | JSX.Element[]
}

const Modal: React.FC<ModalProps> = ({ icon, title, isOpen, onRequestClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal"
      className="bg-slate-900/50 fixed inset-0 flex items-center justify-center z-10 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300"
      overlayClassName="focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300"
    >
      <div className="max-w-md min-w-[25%] bg-white p-5 rounded-lg focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300">
        <div className="flex flex-row mb-4">{/*header */}
          {icon}
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <div className="mb-4">{children}</div> {/*Content */}
        <div className="flex justify-end items-center">{/*footer */}

          <button onClick={onRequestClose} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
            Confirmar
          </button>
          <button onClick={onRequestClose} className="bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-2">
            Fechar
          </button>

        </div>
      </div>
    </ReactModal>
  );
};

export default Modal;
