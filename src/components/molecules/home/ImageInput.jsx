import React, { useState } from 'react';
//import { FaPlus, FaImage } from 'react-icons/fa';
import '../../../assets/styles/home/inmageInput.css'; // Asegúrate de tener esta hoja de estilos

const ImageInput = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-input-container">
      <label className="image-input-label">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="image-input"
        />
        {selectedImage ? (
          <img src={selectedImage} alt="Selected" className="selected-image" />
        ) : (
          <div className="placeholder">
            {/*<FaImage size={50} className="image-icon" />*/}
            <div className="overlay">
              {/*<FaPlus size={50} className="plus-icon" />*/}
            </div>
          </div>
        )}
      </label>
    </div>
  );
};

export default ImageInput;