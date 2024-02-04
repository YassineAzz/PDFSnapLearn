import logo from './logo.svg'
import React,  { useState }  from 'react'
import Button from './components/button'
import Chat  from '../src/components/Chat'
import '../src/Style/button.css'
import '../src/Style/App.css'

function App() {
  const [showChat, setShowChat] = useState(false);

  const handleToggleChat = () => {
    setShowChat(!showChat);
  };
  const handleFileChange = (file) => {
    alert(`Fichier sélectionné : ${file.name}`);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello to SnapLearn to start updload a course as PDF you want learn ^^
        </p>
        <div className="app-container">
      <button className="open-chat-button" onClick={handleToggleChat}>Open the chat with the AI</button>

      {showChat && <Chat onClose={handleToggleChat} />}
    </div>
        <Button onClick={handleFileChange} />
      </header>
    </div>
  );
}

export default App;
