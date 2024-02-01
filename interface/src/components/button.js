import React, { useRef } from 'react';
import axios from 'axios';
import '../Style/button.css';

const Button = ({ onFileChange, text }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = async () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

      // Send the file to back end
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post('http://127.0.0.1:5000/analyse_pdf', formData);
        // Back end response
        console.log(response.data);
      } catch (error) {
        // Handle the error
        console.error('Erreur lors de l\'analyse du PDF:', error);
      }
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <button className="custom-button" onClick={handleButtonClick}>
        {text}
      </button>
    </div>
  );
}

export default Button;
