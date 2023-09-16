import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Customers = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(3, 'Minimo de caracteres aceitável é 3')
                .max(55, 'Máximo de caracteres aceitável é 55')
                .required('O campo Nome é obrigatório'),
            lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
            //email: Yup.string().email('Invalid email address').required('Required')
            // age: Yup.number()
            //     .min(18, 'Idade mínima aceitável é de 18 anos')
            //     .max(65, 'Idade máxima aceitável é de 65 anos')
            //     .required('O campo idade é obrigatório')
            email: Yup.string()
                .trim()
                .matches(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                    'Email inválido'
                )
                .required('O campo E-mail é obrigatório')
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            {/* <Input
                type="text"
                id="lastName"
                name="lastName"
                label="Nome"
                place="Nome"
                // value={nameSt}
                // setValue={setNameSt}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={false}
                required={true}
                focused={true}
                className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            /> */}

            <label htmlFor="firstName" className="block text-gray-700 text-slate-500 font-bold mb-2">
                First Name
            </label>
            <input
                className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-orange-400 font-semibold">{formik.errors.firstName}</div>
            ) : null}

            <label htmlFor="lastName" className="block text-gray-700 text-slate-500 font-bold mb-2">
                Last Name
            </label>
            <input
                className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
                <div className="text-orange-400 font-semibold">{formik.errors.lastName}</div>
            ) : null}

            <label htmlFor="email" className="block text-gray-700 text-slate-500 font-bold mb-2">
                Email Address
            </label>

            <input
                className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <div className="text-orange-400 font-semibold">{formik.errors.email}</div>
            ) : null}

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
                Submit
            </button>
        </form>
    )
}

export default Customers
