import React, { useContext, useEffect, useState } from "react";
import Select from 'react-select'
import ReactModal from 'react-modal';
import mask from 'biblioteca-mascaras'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { IProductCategory } from "../../interfaces/product";
import { FaPlusCircle, FaPencilAlt } from 'react-icons/fa'
import { GlobalContext } from '../../contexts/GlobalContext'

interface ModalCrudProps {
  isOpen: boolean;
  dataSource: IProductCategory;
  isCloseEsc: boolean;
  isCloseOnOverlay: boolean;
  onRequestClose: () => void;
  onConfirmed: (confimado: boolean, data: IProductCategory) => void;
}

interface IOptionProps {
  value: number;
  label: string;
}

const ModalFormProduct = ({ isOpen, dataSource, onRequestClose, onConfirmed, isCloseEsc, isCloseOnOverlay }: ModalCrudProps) => {
  const globalContext = useContext(GlobalContext)

  const [optionKeySelected, setOptionKeySelected] = useState<null | number>(dataSource.idCategory)
  const [optionLabelSelected, setOptionLabekSelected] = useState<string>(dataSource.category)


  const [selected, setSelected] = useState(null);

  const handleChangeSelect = (item: number, itemValue: string) => {
    setOptionKeySelected(item);
    setOptionLabekSelected(itemValue);
    //console.log(`Option selected:`, optionKeySelected);
  };


  const optItems = globalContext?.category.map((item) => {
    return {
      value: item.id,
      label: item.name
    }
  }) as IOptionProps[]

  //Adiciona item SELECIONAR = 0
  //optItems.unshift(options)

  const SelectCustom = () => (
    <Select
      className='w-64 ml-3 -mt-6 rounded appearance-none py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
      options={optItems}
      onChange={(item) => handleChangeSelect(item?.value as number, item?.label as string)}
    //onChange={(item) => setOptionKeySelected(item?.value as number)}
    //onChange={handleChange} 
    //autoFocus={true}

    />
  )

  function onCloseModal() {
    onRequestClose()
  }

  const formik = useFormik({
    initialValues: {
      id: dataSource.id,
      idCompany: dataSource.idCompany,
      idCategory: dataSource.idCategory,
      status: dataSource.status,
      stock: dataSource.stock,
      name: dataSource.name,
      description: dataSource.description,
      code1: dataSource.code1,
      code2: dataSource.code2,
      image1: dataSource.image1,
      image2: dataSource.image2,
      amount1: dataSource.amount1,
      amount2: dataSource.amount2,
      amount3: dataSource.amount3,
      amount4: dataSource.amount4,
      createdAt: dataSource.createdAt,
      category: dataSource.category,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Minimo de caracteres aceitável é 3')
        .max(100, 'Máximo de caracteres aceitável é 100')
        .required('O campo é obrigatório'),
      description: Yup.string()
        .min(3, 'Minimo de caracteres aceitável é 3')
        .max(100, 'Máximo de caracteres aceitável é 100')
        .required('O campo é obrigatório'),
      code1: Yup.string().required("Campo é obrigatório"),
      amount1: Yup.string().required("Campo é obrigatório"),
      amount2: Yup.string().required("Campo é obrigatório"),
    }),
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2))
      //console.log('values: ' + JSON.stringify(values, null, 2));

      const newState: IProductCategory = { ...dataSource, idCategory: optionKeySelected as number, category: optionLabelSelected, name: values.name, description: values.description, code1: values.code1, code2: values.code2, amount1: values.amount1, amount2: values.amount2, amount3: values.amount3, amount4: values.amount4, }
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
                  className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-32 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-1"
                  id="id"
                  name="id"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.id > 0 ? formik.values.id.toString().padStart(3, '0') : formik.values.id}
                  disabled={true}
                />

              </div>
              <div className="mt-6">
                <label htmlFor="amount2" className="block text-gray-700 text-slate-500 font-bold mb-4 ml-5">
                  Categoria do Produto: {optionKeySelected} - {optionLabelSelected}
                </label>
                <SelectCustom />
              </div>

              <div className="mt-8 ml-5">
                <label className="flex items-center space-x-2">
                  <input type="checkbox"

                    // className="form-checkbox text-indigo-600 h-5 w-5"
                    className="form-checkbox h-6 w-6 text-indigo-600 transition duration-150 ease-in-out rounded-full border-2 border-indigo-600 focus:outline-none "
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.stock}
                    checked={formik.values.stock === 1 ? true : false}

                    id="flexCheckIndeterminate" />


                  <span className="text-gray-700">Estoque controlado</span>
                </label>

              </div>

            </div>

            <div className="flex flex-row items-center text-slate-500 mb-0">
              <div>

                <label htmlFor="code1" className="block text-gray-700 text-slate-500 font-bold mt-4">
                  Codigo 1
                </label>
                <input
                  className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:outline-blue-400 focus:outline-blue-500 text-gray-700 w-full mb-1"
                  id="code1"
                  name="code1"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.code1}
                />
                {formik.touched.code1 && formik.errors.code1 ? (
                  <div className="text-orange-400 font-semibold">{formik.errors.code1}</div>
                ) : null}


              </div>

              <div className="ml-4">

                <label htmlFor="code2" className="block text-gray-700 text-slate-500 font-bold mt-4">
                  Codigo 2
                </label>
                <input
                  className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:outline-blue-400 focus:outline-blue-500 text-gray-700 w-full mb-1"
                  id="code2"
                  name="code2"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.code2}
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

            <label htmlFor="description" className="block text-gray-700 text-slate-500 font-bold mt-4">
              Composição do Produto
            </label>
            <input
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:outline-blue-400 focus:outline-blue-500 text-gray-700 w-full mb-1"
              id="description"
              name="description"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            />
            {formik.touched.description && formik.errors.description ? (
              <div className="text-orange-400 font-semibold">{formik.errors.description}</div>
            ) : null}

            <div className="flex flex-row items-center text-slate-500 mb-0">
              <div className="mr-10">

                <label htmlFor="amount1" className="block text-gray-700 text-slate-500 font-bold mt-4">
                  Valor Grande
                </label>
                <input
                  className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:outline-blue-400 focus:outline-blue-500 text-gray-700 w-full mb-1"
                  id="amount1"
                  name="amount1"
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.amount1}
                />
                {formik.touched.amount1 && formik.errors.amount1 ? (
                  <div className="text-orange-400 font-semibold">{formik.errors.amount1}</div>
                ) : null}

              </div>
              <div>

                <label htmlFor="amount2" className="block text-gray-700 text-slate-500 font-bold mt-4">
                  Valor Grande
                </label>
                <input
                  className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:outline-blue-400 focus:outline-blue-500 text-gray-700 w-full mb-1"
                  id="amount2"
                  name="amount2"
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.amount2}
                />
                {formik.touched.amount2 && formik.errors.amount2 ? (
                  <div className="text-orange-400 font-semibold">{formik.errors.amount2}</div>
                ) : null}

              </div>
            </div>


            <div className="flex justify-end items-center mt-4">{/*footer */}
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

export default ModalFormProduct;
