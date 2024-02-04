import React, { useRef, useState }  from 'react'
import axios from 'axios'
import '../Style/button.css'


const Button = ({ onFileChange, text }) => {
  const fileInputRef = useRef(null);
  const handleButtonClick = async () => {
    fileInputRef.current.click();
  };

  const [isLoading, setIsLoading] = useState(false)
  
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
      setIsLoading(true)
      const formData = new FormData();
      formData.append('file', file);
      try {
        const response = await axios.post('http://127.0.0.1:5000/analyse_pdf', formData);
        console.log(response.data);
      } catch (error) {
        console.error('ERROR DURING PDF ANALYSIS:', error);
      }  finally {
        setIsLoading(false)
        window.location.href = `/discussion`
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
      <button disabled={isLoading} className="custom-button" onClick={handleButtonClick}>
        {text}
        {isLoading ? 'Chargement...' : 'Upload a PDF'}
      </button>
    </div>
  );
}

export default Button;
