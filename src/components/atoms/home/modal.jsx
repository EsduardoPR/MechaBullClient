import { useState, useRef, useEffect } from "react"
import Modal from 'react-modal';
import { IonIcon } from '@ionic/react';
import { notifications } from 'ionicons/icons';

Modal.setAppElement('#root');

export function ModalS(){
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const modalRef = useRef();
    const iconRef = useRef()

    window.addEventListener('click', (event) =>{
        if (modalRef.current && !modalRef.current.contains(event.target) && iconRef.current && !iconRef.current.contains(event.target)) {
            setModalIsOpen(false);
        }
    })

    return(
        <div className="header-notifications">
            <div className="push-notifications" ref={iconRef} onClick={() => setModalIsOpen(!modalIsOpen)} >
                <IonIcon
                    icon={notifications}
                    className="notifications-icon"/>
                <p className='name-notifications'>Notificaciones</p>
            </div>
            { modalIsOpen && (
                <div ref={modalRef} className="modal-notification">
                    <h2 >Notificaciones</h2>
                    <div ref={modalRef}>
                        <p ref={modalRef}>Aquí van tus notificaciones...</p>
                    </div>
                </div>
            )}
        </div>
    )
}