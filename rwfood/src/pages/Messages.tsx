import React, { useRef, useState, useEffect, useContext } from 'react'
import { HubConnectionBuilder, HttpTransportType } from '@microsoft/signalr';
import { GlobalContext } from '../contexts/GlobalContext'
import PrivateRoute from './PrivateRoute'
import DashboardStatsGrid from '../components/DashboardStatsGrid';
import MessageUser from '../components/MessageUser';
import ChatWindow from '../components/hub/ChatWindow';

type Props = {
  typePage: number;
}

const Messages = () => {

  const [chat, setChat] = useState<String[]>([]);
  const latestChat = useRef(chat);

  latestChat.current = chat;
  const globalContext = useContext(GlobalContext)

  useEffect(() => {
    const connection = new HubConnectionBuilder()
      //.withUrl('https://localhost:7113/UserClient', {
      .withUrl('http://bkend.rwconsultoria.com.br:20021/api/v1/UserClient', {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
      })
      .withAutomaticReconnect()
      .build();

    connection
      .start()
      .then(() => {
        console.log('Connected! RW Food');

        //Tenta pegar msg de boas vinda
        // connection.invoke('SendMessageToCaller', (message) => {
        //   console.log('SendMessageToCaller', message);
        //   alert('Seja bem-vindo!');
        // });

        // connection
        //   .invoke('SendMessageToCaller', 'Walter', 'Bom')
        //   .then((msg) => {
        //     console.log('SendMessageToCaller', msg);
        //     //alert('Seja bem-vindo!');
        //   })
        //   .catch((err) => console.error(err.toString()));

        //Recebendo mensagem do CHAT
        connection.on('ReceiveMessage', (message) => {
          console.log('ReceiveMessage', message);
          const updatedChat = [...latestChat.current];
          updatedChat.push(message);
          setChat(updatedChat);
        });
      })
      .catch((e) => console.log('Connection failed: ', e));
  }, []);

  return (
    <>
      <PrivateRoute />
      <div className="flex flex-col gap-4">
        <DashboardStatsGrid />
        <ChatWindow chat={chat} />
      </div>
    </>
  )
}

export default Messages
