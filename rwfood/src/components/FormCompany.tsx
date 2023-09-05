import React, { ChangeEvent, FormEvent, useState } from "react";

export const FormCompany = () => {

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    conditionsAccepted: false,
  });

  const onFieldChange = (event: any) => {
    let value = event.target.value;
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setState({ ...state, [event.target.id]: value });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div className="w-full max-w-lg">
      <form className="bg-white rounded px-1 pt-6 pb-8 mb-4" onSubmit={onSubmit}>

        <div className="mb-4">
          <label className="block text-gray-700 text-slate-500 font-bold mb-2" htmlFor="name">Name</label>
          <input id="name" required onChange={onFieldChange} className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-slate-500 font-bold mb-2" htmlFor="email">Email</label>
          <input type="email" id="email" required onChange={onFieldChange} className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-slate-500 font-bold mb-2" htmlFor="password">Password</label>
          <input type="password" id="password" onChange={onFieldChange} className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-slate-500 font-bold mb-2" htmlFor="confirmPassword">Confirm password</label>
          <input type="password" id="confirmPassword" onChange={onFieldChange} className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
        </div>
        <div className="flex items-center justify-left">
          <input className="block text-gray-700 text-slate-500 font-bold mb-2 ml-2" type="checkbox" id="conditions" onChange={onFieldChange} />
          <label className="block text-gray-700 text-slate-500 font-bold mb-2 ml-2" htmlFor="conditions">I agree to the terms and conditions</label>
        </div>

      </form>
    </div >
  );
};