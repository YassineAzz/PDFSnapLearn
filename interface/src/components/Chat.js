// Chat.js
import React, { useState } from 'react'
import '../Style/chat.css'

const Chat = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, type: 'sent' }]);
      setNewMessage('');
      // Ajoutez ici la logique pour envoyer le message au backend si nécessaire
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <span></span>
        <button onClick={onClose}>Fermer</button>
      </div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            {message.type === 'sent' ? (
              <>
                <span className="user-icon">You</span>
                <span className="message-text">{message.text}</span>
              </>
            ) : (
              <>
                <span className="ai-icon">AI</span>
                <span className="message-text">{message.text}</span>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Tapez votre message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>⇧</button>
      </div>
    </div>
  );
};

export default Chat;
