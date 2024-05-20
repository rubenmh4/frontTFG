import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';



export const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [user, setUser] = useState('');

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
    if (newMessage.trim() && user.trim()) {
      const message = {
        user: user,
        message: newMessage,
        timestamp: getCurrentDateTime()
      };

      const socket = socketIOClient('http://localhost:3001');
      socket.emit('sendMessage', message);
      setNewMessage('');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>Chat</h1>
      <div>
        <input
          type="text"
          placeholder="Tu nombre"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <div style={{ border: '1px solid #ccc', padding: '10px', height: '300px', overflowY: 'scroll' }}>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.user}:</strong> {msg.message} <em>{msg.timestamp}</em>
          </div>
        ))}
      </div>
      <div>
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
  );
};

