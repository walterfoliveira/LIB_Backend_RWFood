import React, { useState } from "react";
import ReactModal from 'react-modal';
import { IUser } from "../../interfaces/user";
import { FaPlusCircle, FaPencilAlt } from 'react-icons/fa'
import Input from "../shared/Input";
import Select from "../shared/Select";

interface ModalCrudProps {
  isOpen: boolean;
  dataSource: IUser;
  isItem: number;
  isCloseEsc: boolean;
  isCloseOnOverlay: boolean;
  //setItemData: React.Dispatch<React.SetStateAction<ICompany>>
  onRequestClose: () => void;
  onConfirmed: (confimado: boolean, data: IUser) => void
  title: string;
}


const ModalFormUser = ({ title, isOpen, dataSource, onRequestClose, onConfirmed, isCloseEsc, isCloseOnOverlay, isItem }: ModalCrudProps) => {

  const [levelSt, setLevelSt] = useState('');
  const [idSt, setIdSt] = useState(dataSource.id);
  const [nameSt, setNameSt] = useState(dataSource.name);
  const [surnameSt, setSurnameSt] = useState(dataSource.surname);
  const [cellSt, setCellSt] = useState(dataSource.cell);
  const [documentSt, setDocumentSt] = useState(dataSource.document);
  const [mailSt, setMailSt] = useState(dataSource.mail);
  const [passSt, setPassSt] = useState(dataSource.pass);
  const [createdAtSt, setCreatedAtSt] = useState(dataSource.createdAt.toString());



  const [state, setState] = useState<IUser>(() => ({
    id: idSt,
    idCompany: dataSource.idCompany,
    status: dataSource.status,
    level: dataSource.level,
    name: nameSt,
    surname: surnameSt,
    document: documentSt,
    cell: cellSt,
    mail: mailSt,
    pass: passSt,
    createdAt: createdAtSt,
    updated: createdAtSt,
  }));


  const handleSave = () => {
    //event.preventDefault();

    //console.log("[onConfirmed] : " + true)
    const newState: IUser = { ...state, name: nameSt, surname: surnameSt, document: documentSt, cell: cellSt, mail: mailSt, pass: passSt }
    //console.log('newState: ' + JSON.stringify(newState));
    onConfirmed(true, newState)
  };

  //console.log(state);
  function onCloseModal() {
    //console.log(false);
    onConfirmed(false, state)
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      //onRequestSave={onRequestSave}

      contentLabel="Modal"
      className="bg-slate-900/50 fixed inset-0 flex items-center justify-center z-10 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300"
      overlayClassName={'fixed w-full h-screen top-0 left-0 z-[1000] backdrop-blur-sm flex justify-center items-center hover:shadow-none transition-all duration-300'}
      //overlayClassName="focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300"

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
      <div className="max-w-lg-[70%] min-w-[30%] bg-white p-4 rounded-lg focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300">
        <form className="bg-white rounded px-1 pt-6" onSubmit={handleSave}>
          <div className="flex flex-row items-center mb-4">{/*header */}
            {nameSt === '' && <FaPlusCircle size={21} className="mr-2 text-2xl text-gray-600" />}
            {nameSt !== '' && <FaPencilAlt size={21} className="mr-2 text-2xl text-gray-600" />}

            <h2 className="text-xl font-semibold">{nameSt !== '' ? 'Editar Usuário' : 'Novo Usuário'}</h2>

          </div>
          <div className="mb-4"> {/*Content */}

            <Input
              type='text'
              id='id'
              label='Identificador'
              place='Identificador'
              value={idSt.toString()}
              setValue={setIdSt.toString}
              disabled={true}
              //inputRef={inputRef}
              className='disabled bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full:1/3 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            />

            <Input
              type='text'
              id='name'
              label='Nome'
              place='Nome'
              value={nameSt}
              setValue={setNameSt}
              disabled={false}
              className='bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            />

            <Input
              type='text'
              id='surname'
              label='Sobre Nome'
              place='Sobre Nome'
              value={surnameSt}
              setValue={setSurnameSt}
              disabled={false}
              className='bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            />

            <Input
              type='text'
              id='document'
              label='CPF'
              place='CPF'
              value={documentSt}
              setValue={setDocumentSt}
              disabled={false}
              className='bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            />

            <Input
              type='tel'
              id='cell'
              label='Celular'
              place='Celular'
              value={cellSt}
              setValue={setCellSt}
              disabled={false}
              className='bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            />

            <Input
              type='email'
              id='mail'
              label='E-mail'
              place='E-mail'
              value={mailSt}
              setValue={setMailSt}
              disabled={false}
              className='bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            />

            <Input
              type='password'
              id='pass'
              label='Senha'
              place='Senha'
              value={passSt}
              setValue={setPassSt}
              disabled={false}
              className='bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            />

            <Select id="level" label="Nivel" options={["Atendente", "Gerente", "Administrador", "Power"]} value={levelSt} setValue={setLevelSt} />

          </div>

        </form>

        <div className="flex justify-end items-center">{/*footer */}
          <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
            Confirmar
          </button>
          <button onClick={onCloseModal} className="bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-2">
            Fechar
          </button>

        </div>

      </div>
    </ReactModal>
  );
};

export default ModalFormUser;
