import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'

export default function DashboardStatsGrid() {
    const globalContext = useContext(GlobalContext)
    console.log('globalContext - [User]', globalContext?.user)

    return (

        <div className="p-16">
            <div className="p-8 bg-white shadow mt-24">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                        <div>
                            <p className="font-bold text-gray-700 text-xl">22</p>
                            <p className="text-gray-400">Friends</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-700 text-xl">10</p>
                            <p className="text-gray-400">Photos</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-700 text-xl">89</p>
                            <p className="text-gray-400">Comments</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="w-48 h-48 bg-gray-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-500 hover:fill-gray-700 h-24 w-24" viewBox="0 0 20 20" fill="bg-blue-400" >
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                        <button
                            className="text-white py-2 px-4 uppercase rounded bg-gray-400 hover:bg-gray-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                        >
                            Connect
                        </button>
                        <button
                            className="text-white py-2 px-4 uppercase rounded bg-gray-600 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                        >
                            Message
                        </button>
                    </div>
                </div>

                <div className="mt-20 text-center border-b pb-12">
                    <h1 className="text-4xl font-medium text-gray-700">Jessica Jones, <span className="font-light text-gray-500">27</span></h1>
                    <p className="font-light text-gray-600 mt-3">Bucharest, Romania</p>

                    <p className="mt-8 text-gray-500">Solution Manager - Creative Tim Officer</p>
                    <p className="mt-2 text-gray-500">University of Computer Science</p>
                </div>

                <div className="mt-12 flex flex-col justify-center">
                    <p className="text-gray-600 text-center font-light lg:px-16">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
                    <button
                        className="text-indigo-500 py-2 px-4  font-medium mt-4"
                    >
                        Show more
                    </button>
                </div>

            </div>
        </div>


        // <div className="w-full lg:w-4/12 px-4 mx-auto">
        //     <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        //         <div className="px-6">
        //             <div className="flex flex-wrap justify-center">
        //                 <div className="w-full px-4 flex justify-center">
        //                     <div className="relative">
        //                         <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
        //                     </div>
        //                 </div>
        //                 <div className="w-full px-4 text-center mt-20">
        //                     <div className="flex justify-center py-4 lg:pt-4 pt-8">
        //                         <div className="mr-4 p-3 text-center">
        //                             <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
        //                                 22
        //                             </span>
        //                             <span className="text-sm text-blueGray-400">Friends</span>
        //                         </div>
        //                         <div className="mr-4 p-3 text-center">
        //                             <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
        //                                 10
        //                             </span>
        //                             <span className="text-sm text-blueGray-400">Photos</span>
        //                         </div>
        //                         <div className="lg:mr-4 p-3 text-center">
        //                             <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
        //                                 89
        //                             </span>
        //                             <span className="text-sm text-blueGray-400">Comments</span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="text-center mt-12">
        //                 <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
        //                     Jenna Stones
        //                 </h3>
        //                 <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
        //                     <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
        //                     Los Angeles, California
        //                 </div>
        //                 <div className="mb-2 text-blueGray-600 mt-10">
        //                     <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
        //                     Solution Manager - Creative Tim Officer
        //                 </div>
        //                 <div className="mb-2 text-blueGray-600">
        //                     <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
        //                     University of Computer Science
        //                 </div>
        //             </div>
        //             <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
        //                 <div className="flex flex-wrap justify-center">
        //                     <div className="w-full lg:w-9/12 px-4">
        //                         <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
        //                             An artist of considerable range, Jenna the name taken
        //                             by Melbourne-raised, Brooklyn-based Nick Murphy
        //                             writes, performs and records all of his own music,
        //                             giving it a warm, intimate feel with a solid groove
        //                             structure. An artist of considerable range.
        //                         </p>
        //                         <a href="javascript:void(0);" className="font-normal text-pink-500">
        //                             Show more
        //                         </a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

    )
}
