import React, { useState } from "react";
import ReactModal from 'react-modal';
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { IItem } from "../../interfaces/company";
import { FaPlusCircle, FaPencilAlt } from 'react-icons/fa'

interface ModalCrudProps {
  isOpen: boolean;
  dataSource: IItem;
  isItem: number; //1-Complemento 2-Categoria 3-Entregador 4-Garcon 
  isCloseEsc: boolean;
  isCloseOnOverlay: boolean;
  onRequestClose: () => void;
  onConfirmed: (confimado: boolean, data: IItem) => void

}


const ModalFormItem = ({ isOpen, dataSource, onRequestClose, onConfirmed, isCloseEsc, isCloseOnOverlay, isItem }: ModalCrudProps) => {

  const [state, setState] = useState(() => ({
    id: dataSource.id,
    name: dataSource.name,
  }));

  function onCloseModal() {
    console.log(false);
    onRequestClose()
  }


  const formik = useFormik({
    initialValues: {
      id: dataSource.id,
      name: dataSource.name,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Minimo de caracteres aceitável é 3')
        .max(50, 'Máximo de caracteres aceitável é 50')
        .required('O campo Nome é obrigatório')
    }),
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2))

      const newState: IItem = { ...state, name: values.name }
      //console.log('newState: ' + JSON.stringify(newState));
      onConfirmed(true, newState)

    }
  })


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
        <form className="bg-white rounded px-1 pt-6" onSubmit={formik.handleSubmit}>
          {/* <form className="bg-white rounded px-1 pt-6"  onSubmit={handleSave}> */}
          <div className="flex flex-row items-center mb-4">{/*header */}
            {dataSource.id === 0 && <FaPlusCircle size={21} className="mr-2 text-2xl text-gray-600" />}
            {dataSource.id !== 0 && <FaPencilAlt size={21} className="mr-2 text-2xl text-gray-600" />}

            {/* 1-Complemento 2-Categoria 3-Entregador 4-Garcon  */}
            {isItem === 1 && <h2 className="text-xl font-semibold">{dataSource.id === 0 ? 'Novo Complemento' : 'Editar Complemento'}</h2>}
            {isItem === 2 && <h2 className="text-xl font-semibold">{dataSource.id === 0 ? 'Nova Categoria' : 'Editar Categoria'}</h2>}
            {isItem === 3 && <h2 className="text-xl font-semibold">{dataSource.id === 0 ? 'Novo Entregador' : 'Editar Entregador'}</h2>}
            {isItem === 4 && <h2 className="text-xl font-semibold">{dataSource.id === 0 ? 'Novo Garçon' : 'Editar Garçon'}</h2>}


          </div>
          <div className="mb-4"> {/*Content */}

            <label htmlFor="id" className="block text-gray-700 text-slate-500 font-bold">
              Identificador
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full:1/3 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4"
              id="id"
              name="id"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.id}
            // value={formik.values.id.toString().padStart(3, '0')}
            />

            <label htmlFor="name" className="block text-gray-700 text-slate-500 font-bold">
              Nome
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-2"
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-orange-400 font-semibold">{formik.errors.name}</div>
            ) : null}

          </div>


          <div className="flex justify-end items-center">{/*footer */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
              Confirmar
            </button>
            <button onClick={onCloseModal} className="bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-2">
              Fechar
            </button>

          </div>


        </form>

      </div>
    </ReactModal>
  );
};

export default ModalFormItem;
