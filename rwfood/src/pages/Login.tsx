import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import toast, { Toaster } from 'react-hot-toast'

import * as Yup from 'yup'
import autheticationService from '../services/authenticationService'
import userService from '../services/userService'
import { clearStorage } from '../facades/localStorage'
import { GlobalContext } from '../contexts/GlobalContext'
import { IUser } from '../interfaces/user';

const initialValues: IUser = {
  id: 0,
  idCompany: 0,
  status: 1,
  createdAt: '',
  updated: '',
  name: '',
  surname: '',
  document: '',
  image1: '',
  cell: '',
  mail: '',
  pass: '',
  level: 0,
}

const Login = () => {
  const globalContext = useContext(GlobalContext)
  const navigate = useNavigate();

  const [login, setLogin] = useState<boolean | null>(null);

  useEffect(() => {
    clearStorage();
  }, [])

  const getAuth = async (idCompany: number, userName: string, passWord: string) => {
    var response = await autheticationService.getAuth(idCompany, userName, passWord)
    return response.token
  }

  const getLogin = async (idCompany: number, mail: string, passWord: string) => {
    var response = await userService.getLogin(idCompany, mail, passWord)
    return response
  }

  const formik = useFormik({
    initialValues: {
      mail: '',
      password: '',
    },
    validationSchema: Yup.object({
      mail: Yup.string()
        .email()
        .required("E-mail é obrigatório"),
      password: Yup.string().required("Campo é obrigatório"),

    }),
    onSubmit: async (values) => {
      setLogin(false);

      //Pegar o token JWT
      const jwtToken = await getAuth(1, 'pizzaria', '1122')
      if (jwtToken !== '' || jwtToken !== null) {
        //console.log('[token]: ' + jwtToken)
        globalContext?.login(initialValues, jwtToken);

        //Tenta fazer o Login
        const userLogin = await getLogin(1, values.mail, values.password)
        if (userLogin) {
          globalContext?.login(userLogin, jwtToken)
          formik.resetForm();

          setLogin(false);
          navigate('/')
        }
        else {
          toast.error('Usuário e/ou senha incorreto!')
          formik.resetForm();
          setLogin(false);
        }

      }
      else {
        toast.error('Erro ao criar credenciais!')
        setLogin(false);
      }

    }
  })



  return (
    <div className="h-full">
      {/* <!-- Left column container with background--> */}
      <div
        className="flex h-full flex-wrap items-center justify-center">
        {
        /* 
        className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
        <div
          className="shrink-1 grow-0 basis-auto md:mb-0 md:w-4/12 md:shrink-0 lg:w-4/12 xl:w-4/12">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="w-full"
            alt="Sample image" />
        </div> */}

        {/* <!-- Right column container --> */}
        <div className="mb-12 md:mb-0 md:w-4/12 lg:w-4/12 xl:w-4/12">

          <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
              <h1 className="text-3xl font-semibold text-center text-gray-700">
                RW Food - Pizzaria
              </h1>
              {/* <form className="mt-6"> */}
              <form className='bg-white rounded  pt-6 pb-8 mt-6 mb-4' onSubmit={formik.handleSubmit}>
                <div className="mb-2">
                  <label htmlFor="name" className="block text-gray-700 text-slate-500 font-bold">
                    E-mail
                  </label>
                  <input
                    className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:outline-gray-300 focus:outline-gray-300 text-gray-700 w-full mb-2"
                    id="mail"
                    name="mail"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.mail}
                    autoFocus={true}
                    placeholder='Digite seu e-mail'
                  />
                  {formik.touched.mail && formik.errors.mail ? (
                    <div className="text-rose-400 font-semibold">{formik.errors.mail}</div>
                  ) : null}
                </div>
                <div className="mb-2">
                  <label htmlFor="password" className="block text-gray-700 text-slate-500 font-bold">
                    Senha
                  </label>
                  <input
                    className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:outline-gray-300 focus:outline-gray-300 text-gray-700 w-full mb-1"
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    placeholder='Digite sua senha'
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-rose-400 font-semibold">{formik.errors.password}</div>
                  ) : null}
                </div>
                <a
                  href="#"
                  className="text-xs text-gray-600 hover:underline"
                >
                  Esqueceu a senha?
                </a>
                <div className="mt-6">
                  <button
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-500 disabled:bg-gray-300 disabled:text-gray-700 "
                    disabled={login == true ? true : false}
                  >

                    Login
                  </button>
                </div>
              </form>

              {/* <p className="mt-8 text-xs font-light text-center text-gray-700">
                {" "}
                Don't have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-purple-600 hover:underline"
                >
                  Sign up
                </a>
              </p> */}
            </div>
          </div>

        </div>
      </div>

      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          //icon: '👏',
          // style: {
          //   background: '#363636',
          //   color: '#fff',
          // },

          style: {
            border: '1px solid #d1d5db',
            padding: '16px',
            minWidth: '250px',
            color: '#9ca3af #713200',
            fontSize: '16px'
          },
          // iconTheme: {
          //   //primary: '#713200',
          //   secondary: '#fff'
          // },

          // Default options for specific types
          success: {
            duration: 3000,
            // theme: {
            //   primary: 'green',
            //   secondary: 'black'
            // }
          }
        }}
      />

    </div>

  )
}

export default Login