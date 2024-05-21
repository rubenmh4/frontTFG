import{ useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import { useAuthStore } from '../../store/auth';
import './chatComponent.css'


export const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const {profile} = useAuthStore()

  useEffect(() => {
    const socket = socketIOClient('http://localhost:3001');

    // Obtener mensajes iniciales
    socket.on('initialMessages', (initialMessages) => {
      setMessages(initialMessages);
    });

    // Recibir nuevos mensajes
    socket.on('receiveMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const getCurrentDateTime = () => {
    const date = new Date();
    const options = { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    };
    return date.toLocaleString(undefined, options);
  };

  const sendMessage = async () => {
    if (newMessage.trim()) {
      const message = {
        user: profile.username,
        message: newMessage,
        time: getCurrentDateTime()
      };

      console.log(message)
      const socket = socketIOClient('http://localhost:3001');
      socket.emit('sendMessage', message);
      setNewMessage('');
    }
  };

  return (
    <div className='container-background-chat'>
      <div className='container-chat'>

      <div className='container-chat-messages'>
        {messages.map((msg) => (
          <div key={msg._id} className={msg.user === profile.username ? 'container-message-right': 'container-message'}>
           <strong>{msg.user}</strong> 
            <div className='message'>
            <span>{msg.message}</span> 
            </div>
            <span className='time'>{msg.time}</span>
          </div>
        ))}
      </div>
      <div className='container-chat-input'>
        <input
          type="text"
          placeholder="Escribe tu mensaje"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' ? sendMessage() : null}
          />
        <button onClick={sendMessage}>Enviar</button>
      </div>
          </div>
    </div>
  );
};

