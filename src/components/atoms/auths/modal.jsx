import React, { useState } from 'react';
import Modal from 'react-modal';
import bell from '../../../assets/img/bell.png'

// Configurar el elemento raíz para react-modal
Modal.setAppElement('#root');

const NotificationModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      {/* Imagen que abre la modal */}
      <img 
        src={bell} 
        alt="Open Modal" 
        onClick={openModal}
        style={{ cursor: 'pointer' }}
      />

      {/* Componente de la modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Notification Modal"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
          }
        }}
      >
        <h2>Notificaciones</h2>
        <button onClick={closeModal}>Cerrar</button>
        <div>
          <p>Aquí van tus notificaciones...</p>
        </div>
      </Modal>
    </div>
  );
};

export default NotificationModal;
