import React from 'react';

const Alert = ({ message, onClose }) => {
    return (
        <div className='alert-back'>
            <div className='alert-front'>
                <p>{message}</p>
                <button className='alert-button' onClick={onClose}>Entendido</button>
            </div>
        </div>
    );
};

export default Alert;
