/*
INFORMAÇÕES IMPORTANTES
SVG: https://flowbite.com/icons/

https://tailwind-elements.com/docs/standard/components/tooltip/
https://flowbite.com/docs/forms/input-field/


//https://react-icons.github.io/react-icons/icons?name=hi
//https://tailwindcss.com/docs/customizing-colors
//https://tailwindcss.com/docs/background-color

//DOC : http://reactcommunity.org/react-modal/


https://nelson-souza.medium.com/net-core-dependency-injection-1c1900d1bef

https://nelson-souza.medium.com/net-core-webhooks-7a51e113f9f6



Menu em 
https://www.youtube.com/watch?v=MszSqhEw__8


ver sobre tratar erros
https://www.freecodecamp.org/portuguese/news/como-pesquisar-e-filtrar-componentes-em-react/


https://tailwindcss.com/docs/responsive-design
https://www.freecodecamp.org/portuguese/news/como-usar-o-axios-com-o-react-o-guia-definitivo-2021/



voce pode usar assim import { useState, useEffect } from 'react';
import axios from 'axios';

function SeuComponente() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await axios.get('/api/orders'); // Substitua pelo endpoint correto do seu backend
        setOrders(response.data); // Atualiza o estado com os dados buscados do banco
      } catch (error) {
        console.error('Erro ao buscar os pedidos:', error);
      }
    }

    fetchOrders(); 

    // Define o intervalo de 5 segundos para buscar novos pedidos
    const intervalId = setInterval(fetchOrders, 5000);

    // Função de limpeza que será executada quando o componente for desmontado
    return () => {
      clearInterval(intervalId); // Limpa o intervalo para evitar vazamentos de memória
    };
  }, []);

}




AXIOS
https://axios-http.com/ptbr/docs/intro

https://www.digitalocean.com/community/tutorials/react-axios-react-pt


TABELA
https://www.bezkoder.com/react-table-example-hooks-crud/


LEITURA
https://medium.com/@sandupa.egodage/react-form-with-typescript-c74510b2f9d3
https://www.linkedin.com/pulse/building-form-react-typescript-khaled-bellal-/
https://claritydev.net/blog/typescript-typing-form-events-in-react


https://www.techomoro.com/submit-a-form-data-to-rest-api-in-a-react-app/

https://www.bezkoder.com/react-table-example-hooks-crud/

para remover add item na lista
https://blog.logrocket.com/using-react-usestate-object/
https://www.techomoro.com/submit-a-form-data-to-rest-api-in-a-react-app/


MODAL
https://tailwindcomponents.com/component/modal-window
https://www.material-tailwind.com/docs/react/guide/cra
https://www.youtube.com/watch?v=nwJK-jo91vA
https://www.youtube.com/watch?v=xSWkArLGkR4
https://reach.tech/dialog/
https://dev.to/renatoosaka/criando-um-modal-em-reactjs-54g0

https://www.material-tailwind.com/docs/react/dialog
https://blog.logrocket.com/using-react-children-prop-with-typescript/
https://blog.rocketseat.com.br/react-material-ui/
https://tailwindcss.com/
https://medium.com/@jamestowers/custom-react-modal-with-typescript-e3dd06050134



*/
