import React, { useState } from "react";
import ReactModal from 'react-modal';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { IUser } from "../../interfaces/user";
import { FaPlusCircle, FaPencilAlt } from 'react-icons/fa'

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

  const [levelSt, setLevelSt] = useState(dataSource.level.toString());

  function onCloseModal() {
    onRequestClose()
  }

  const formik = useFormik({
    initialValues: {
      id: dataSource.id,
      name: dataSource.name,
      surname: dataSource.surname,
      document: dataSource.document,
      cell: dataSource.cell,
      mail: dataSource.mail,
      pass: dataSource.pass,
      passConfirm: dataSource.pass,
      level: dataSource.level,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Minimo de caracteres aceitável é 3')
        .max(50, 'Máximo de caracteres aceitável é 50')
        .required('O campo Nome é obrigatório'),
      surname: Yup.string().max(50, 'Sobrenome Máximo de caracteres aceitável é 50').required('Required'),
      document: Yup.string().max(14, 'Máximo de caracteres aceitável é 14').required('Required'),
      cell: Yup.string().max(20, 'Máximo de caracteres aceitável é 20').required('Required'),
      mail: Yup.string().required("Campo é obrigatório"),
      pass: Yup.string().required("Campo é obrigatório"),
      passConfirm: Yup.string().required("Campo é obrigatório"),
    }),
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2))
      //console.log('values: ' + JSON.stringify(values, null, 2));

      const newState: IUser = { ...dataSource, level: parseFloat(levelSt), name: values.name, surname: values.surname, document: values.document, cell: values.cell, mail: values.mail, pass: values.pass }
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

            <h2 className="text-xl font-semibold">{dataSource.id !== 0 ? 'Editar Usuário' : 'Novo Usuário'}</h2>

          </div>
          <div className="mb-4"> {/*Content */}

            <div className="flex flex-row items-center text-slate-500 mb-1">

              <div>

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
                  value={formik.values.id > 0 ? formik.values.id.toString().padStart(3, '0') : formik.values.id}
                />


              </div>
              <div className="-mt-3">
                {/* <Select id="level" label="Nivel" options={["Atendente", "Gerente", "Administrador", "Master"]} value={levelSt} setValue={setLevelSt} /> */}

                <label htmlFor="level" className="text-gray-700 text-slate-500 font-bold mb-0 ml-4">Nivel de Acesso</label>
                <select id="level" name="level" defaultValue="Selecionar" value={levelSt} onChange={({ target }) => setLevelSt(target.value)} className='bg-gray-200 border-2 border-gray-300 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-0 ml-4'>
                  <option value="-1">Selecionar</option>
                  <option value="0">Atendente</option>
                  <option value="1">Gerente</option>
                  <option value="2">Administrador</option>
                  <option value="3">Master</option>
                </select>

              </div>
            </div>

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

            <label htmlFor="surname" className="block text-gray-700 text-slate-500 font-bold">
              Sobre Nome
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-2"
              id="surname"
              name="surname"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.surname}
            />
            {formik.touched.surname && formik.errors.surname ? (
              <div className="text-orange-400 font-semibold">{formik.errors.surname}</div>
            ) : null}

            <label htmlFor="document" className="block text-gray-700 text-slate-500 font-bold">
              Doc. CPF
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-2"
              id="document"
              name="document"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.document}
            />
            {formik.touched.document && formik.errors.document ? (
              <div className="text-orange-400 font-semibold">{formik.errors.document}</div>
            ) : null}

            <label htmlFor="cell" className="block text-gray-700 text-slate-500 font-bold">
              Celular
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-2"
              id="cell"
              name="cell"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cell}
            />
            {formik.touched.cell && formik.errors.cell ? (
              <div className="text-orange-400 font-semibold">{formik.errors.cell}</div>
            ) : null}

            <label htmlFor="mail" className="block text-gray-700 text-slate-500 font-bold">
              E-mail
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-2"
              id="mail"
              name="mail"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mail}
            />
            {formik.touched.mail && formik.errors.mail ? (
              <div className="text-orange-400 font-semibold">{formik.errors.mail}</div>
            ) : null}

            <div className="flex flex-row items-center text-slate-500 mb-1">
              <div className="mr-10">

                <label htmlFor="pass" className="block text-gray-700 text-slate-500 font-bold">
                  Senha
                </label>
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-2"
                  id="pass"
                  name="pass"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.pass}
                />
                {formik.touched.pass && formik.errors.pass ? (
                  <div className="text-orange-400 font-semibold">{formik.errors.pass}</div>
                ) : null}

              </div>
              <div>

                <label htmlFor="passConfirm" className="block text-gray-700 text-slate-500 font-bold">
                  Confirma Senha
                </label>
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-2"
                  id="passConfirm"
                  name="passConfirm"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.passConfirm}
                />
                {formik.touched.passConfirm && formik.errors.passConfirm ? (
                  <div className="text-orange-400 font-semibold">{formik.errors.passConfirm}</div>
                ) : null}

              </div>
            </div>


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

export default ModalFormUser;
