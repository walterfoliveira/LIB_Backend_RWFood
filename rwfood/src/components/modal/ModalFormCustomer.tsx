import React, { useState } from "react";
import ReactModal from 'react-modal';
import mask from 'biblioteca-mascaras'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { ICustomer } from "../../interfaces/customer";
import { FaPlusCircle, FaPencilAlt } from 'react-icons/fa'

interface ModalCrudProps {
  isOpen: boolean;
  dataSource: ICustomer;
  isCloseEsc: boolean;
  isCloseOnOverlay: boolean;
  onRequestClose: () => void;
  onConfirmed: (confimado: boolean, data: ICustomer) => void;
}


const ModalFormCustomer = ({ isOpen, dataSource, onRequestClose, onConfirmed, isCloseEsc, isCloseOnOverlay }: ModalCrudProps) => {

  function onCloseModal() {
    onRequestClose()
  }

  // : string
  // : string

  const formik = useFormik({
    initialValues: {
      id: dataSource.id,
      idCompany: dataSource.idCompany,
      status: dataSource.status,
      lastSale: dataSource.lastSale,
      impost: dataSource.lastSale,
      name: dataSource.name,
      document: dataSource.document,
      cell1: dataSource.cell1,
      cell2: dataSource.cell2,
      address: dataSource.address,
      district: dataSource.district,
      complement: dataSource.complement,
      city: dataSource.city,
      postalCode: dataSource.postalCode,
      createdAt: dataSource.createdAt,
      updated: dataSource.updated,
      birthday: dataSource.birthday,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Minimo de caracteres aceitável é 3')
        .max(50, 'Máximo de caracteres aceitável é 50')
        .required('O campo é obrigatório'),
      district: Yup.string()
        .min(3, 'Minimo de caracteres aceitável é 3')
        .max(50, 'Máximo de caracteres aceitável é 50')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'Minimo de caracteres aceitável é 3')
        .max(50, 'Máximo de caracteres aceitável é 50')
        .required('O campo é obrigatório'),

      cell1: Yup.string().required("Campo é obrigatório"),
      //complement: Yup.string().required("Campo é obrigatório"),
    }),
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2))
      //console.log('values: ' + JSON.stringify(values, null, 2));

      const newState: ICustomer = { ...dataSource, name: values.name, document: values.document, cell1: values.cell1, cell2: values.cell2, address: values.address, district: values.district, complement: values.complement, city: values.city, postalCode: values.postalCode, birthday: values.birthday }
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
          <div className="flex flex-row items-center mb-4">{/*header */}
            {dataSource.id === 0 && <FaPlusCircle size={21} className="mr-2 text-2xl text-gray-600" />}
            {dataSource.id !== 0 && <FaPencilAlt size={21} className="mr-2 text-2xl text-gray-600" />}

            <h2 className="text-xl font-semibold">{dataSource.id !== 0 ? 'Editar Produto' : 'Novo Produto'}</h2>

          </div>
          <div className="mb-4"> {/*Content */}

            <div className="flex flex-row items-center text-slate-500 mb-1">

              <div>

                <label htmlFor="id" className="block text-gray-700 text-slate-500 font-bold mt-4">
                  Identificador
                </label>
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full:2/3 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-1"
                  id="id"
                  name="id"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.id > 0 ? formik.values.id.toString().padStart(3, '0') : formik.values.id}
                  disabled={true}
                />


              </div>

            </div>

            <div className="flex flex-row items-center text-slate-500 mb-0">
              <div>

                <label htmlFor="cell1" className="block text-gray-700 text-slate-500 font-bold mt-4">
                  Telefone 1
                </label>
                <input
                  className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:outline-blue-400 focus:outline-blue-500 text-gray-700 w-full mb-1"
                  id="cell1"
                  name="cell1"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cell1}
                  autoFocus={true}
                />
                {formik.touched.cell1 && formik.errors.cell1 ? (
                  <div className="text-orange-400 font-semibold">{formik.errors.cell1}</div>
                ) : null}


              </div>

              <div className="ml-4">

                <label htmlFor="cell2" className="block text-gray-700 text-slate-500 font-bold mt-4">
                  Telefone 2
                </label>
                <input
                  className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:outline-blue-400 focus:outline-blue-500 text-gray-700 w-full mb-1"
                  id="cell2"
                  name="cell2"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cell2}
                />


              </div>
            </div>

            <label htmlFor="name" className="block text-gray-700 text-slate-500 font-bold mt-4">
              Nome
            </label>
            <input
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:outline-blue-400 focus:outline-blue-500 text-gray-700 w-full mb-1"
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

            <label htmlFor="address" className="block text-gray-700 text-slate-500 font-bold mt-4">
              Endereço
            </label>
            <input
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:outline-blue-400 focus:outline-blue-500 text-gray-700 w-full mb-1"
              id="address"
              name="address"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
            />
            {formik.touched.address && formik.errors.address ? (
              <div className="text-orange-400 font-semibold">{formik.errors.address}</div>
            ) : null}

            <div className="flex flex-row items-center text-slate-500 mb-0">
              <div className="mr-10">

                <label htmlFor="district" className="block text-gray-700 text-slate-500 font-bold mt-4">
                  Bairro
                </label>
                <input
                  className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:outline-blue-400 focus:outline-blue-500 text-gray-700 w-full mb-1"
                  id="district"
                  name="district"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.district}
                />
                {formik.touched.district && formik.errors.district ? (
                  <div className="text-orange-400 font-semibold">{formik.errors.district}</div>
                ) : null}

              </div>
              <div>

                <label htmlFor="city" className="block text-gray-700 text-slate-500 font-bold mt-4">
                  Cidade
                </label>
                <input
                  className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:outline-blue-400 focus:outline-blue-500 text-gray-700 w-full mb-1"
                  id="city"
                  name="city"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                />
                {formik.touched.city && formik.errors.city ? (
                  <div className="text-orange-400 font-semibold">{formik.errors.city}</div>
                ) : null}

              </div>
            </div>

            <label htmlFor="complement" className="block text-gray-700 text-slate-500 font-bold mt-4">
              Ponto de Referência
            </label>
            <input
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:outline-blue-400 focus:outline-blue-500 text-gray-700 w-full mb-1"
              id="complement"
              name="complement"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.complement}
            />
            {formik.touched.complement && formik.errors.complement ? (
              <div className="text-orange-400 font-semibold">{formik.errors.complement}</div>
            ) : null}



            <div className="flex justify-end items-center">{/*footer */}
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
                Confirmar
              </button>
              <button onClick={onCloseModal} className="bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-2">
                Fechar
              </button>

            </div>



          </div>




        </form>


      </div>
    </ReactModal>
  );
};

export default ModalFormCustomer;
