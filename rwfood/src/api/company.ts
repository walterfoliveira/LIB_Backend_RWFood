import axios from 'axios'
import { Empresa } from '../types/Empresa';
//import { URL_BASE } from '../lib/constants'
const URL_BASE = 'http://bkend.rwconsultoria.com.br:20021/api/v1/api/'

const api = axios.create({
    baseURL: URL_BASE,
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
        //'Authorization': 'Bearer ' + varToken
        }    
})

export const GetAll = (idCompany: number|string) => api.get(`/Company?idCompany=${idCompany}`);

export const GetById = (idCompany: number|string, id: number|string) => 
                        api.get(`/Company/${id}?idCompany=${idCompany}`);

export const DeleteById = (idCompany: number|string, id: number|string) => 
                        api.delete(`/Company/${id}?idCompany=${idCompany}`);

export const Post = (data : Empresa ) => api.post(`/Company`, data ).then();

export const Put = (data : Empresa ) => api.put(`/Company`, data);


/*
// Envia uma requisição post
axios({
  method: "post",
  url: "/user/12345",
  data: {
    firstName: "Fred",
    lastName: "Flintstone",
  },
});


    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

*/                        