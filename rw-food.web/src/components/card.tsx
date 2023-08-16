import React, { useState } from 'react'
import Moment from 'moment'
import {
  HiOutlineBell,
  HiOutlineSearch,
  HiOutlineChatAlt,
  HiOutlinePhone,
  HiAtSymbol,
  HiMail,
  HiOutlineIdentification
} from 'react-icons/hi'
import { Empresa } from '../Types/Empresa'

//https://react-icons.github.io/react-icons/icons?name=hi

type Props = {
  item: Empresa;
}


const Card = ({ item }: Props) => {
  const formatDate = Moment().locale('pt-br').format('LL')
  var localLocale = Moment().locale('pt-br')
  localLocale.format('LL') // dimanche 15 juillet 2012 11:01
  const formatDate2 = localLocale.format('DD/MMM/YYYY')

  //const [companys, setCompanys] = useState<Company>({item});

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
      <div className="rounded-full z-30 p-1 inline-block absolute mx-8 mt-0">
        <img
          alt="user 1"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
          className="relative inline-block h-12 w-12 rounded-full border-2 border-blue object-cover object-center hover:z-10 focus:z-10"
        />
      </div>

      <div className="text-right p-4">
        <span className="text-xs text-gray-500 font-semibold tracking-widest uppercase">{formatDate2}</span>
      </div>

      <div className="border-t border-gray-200 z-20 w-full"></div>

      <div className="md:flex">
        {/* <div className="md:shrink-0">
                    <img
                        className="h-48 w-full object-cover md:h-full md:w-48"
                        src="https://source.unsplash.com/100x100?macbook"
                        alt="Modern building architecture"
                    />
                </div> */}
        <div className="p-8">
          {/* <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{item.name}</div> */}
          <h1 className="flex flex-row text-xl font-bold text-gray-700 font-semibold mb-2">{item.name}</h1>

          <p className="flex flex-row text-slate-500 mb-1">
            <div>
              <HiOutlinePhone fontSize={23} />
            </div>
            <div className="ml-1">{item.telefone}</div>
          </p>

          <div className="flex flex-row text-slate-500 mb-1">
            <div>
              <HiOutlineIdentification fontSize={23} />
            </div>
            <div className="ml-1">{item.funcionamento}</div>
          </div>

          <div className="flex flex-row text-slate-500 mb-1">
            <div>
              <HiMail fontSize={23} />
            </div>
            <div>
              <a href="#" className="block text-lg leading-tight font-medium text-slate-500 ml-1">
                {item.site}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card