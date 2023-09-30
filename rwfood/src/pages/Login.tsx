import React from 'react'

export default function Login() {
  return (
    <div className="h-full">
      {/* <!-- Left column container with background--> */}
      <div
        className="g-6 flex h-full flex-wrap items-center justify-center">
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
              <h1 className="text-3xl font-semibold text-center text-gray-700 underline">
                Sign in
              </h1>
              <form className="mt-6">
                <div className="mb-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <a
                  href="#"
                  className="text-xs text-gray-600 hover:underline"
                >
                  Esqueceu a senha?
                </a>
                <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
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
    </div>

  )
}