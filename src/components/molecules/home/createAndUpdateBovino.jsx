import { IonIcon } from '@ionic/react';
import { useRef, useState } from 'react';
import { phonePortraitSharp, closeCircle } from 'ionicons/icons';

import { Button } from './button';
import BovinoOne from '../../../assets/img/bovino1.svg'

export function CreateAndUpdateBovino({className, onClick, titleActionBovino, typeButtonAction, onClickAction, classNameButtonAction}){
    const devices = [
        { id: 1, name: 'Dispositivo1' },
        { id: 2, name: 'Dispositivo2' },
        { id: 3, name: 'Dispositivo3' },
        { id: 4, name: 'Dispositivo4' },
        { id: 5, name: 'Dispositivo5' },
        { id: 6, name: 'Dispositivo6' },
        { id: 7, name: 'Dispositivo7' },
        { id: 8, name: 'Dispositivo8' },
        { id: 9, name: 'Dispositivo9' }
    ];

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const modalRef = useRef();
    const iconRef = useRef()

    window.addEventListener('click', (event) =>{
        if (modalRef.current && !modalRef.current.contains(event.target) && iconRef.current && !iconRef.current.contains(event.target)) {
            setModalIsOpen(false);
        }
    })
    return(
        <div className={className}>
            <div className={`create-bovino-front`}>
                <div className='div-close'>
                    <IonIcon onClick={onClick} icon={closeCircle} className='button-close'/>
                </div>
                <div className='content-targets'>
                    <div className='add-bovino'>
                        <h4>{titleActionBovino}</h4>
                        <img src={BovinoOne}/>
                        <div className='div-input-bovino'>
                            <div className='div-title'>
                                <p>Nombre del bovino</p>
                            </div>
                            <input type="text" name="" placeholder='messirve'/>
                        </div>
                        <div className='div-input-bovino'>
                            <div className='div-title'>
                                <p>Siniga</p>
                            </div>
                            <input type="text" name="" placeholder='12-EE'/>
                        </div>
                        <div className='div-input-bovino'>
                            <div className='div-title'>
                                <p>Fecha de nacimiento</p>
                            </div>
                            <input type="date" name=""/>
                        </div>
                    </div>

                    <div className='vinculation-with-dispositivo'>
                        <h3>Disposito</h3>
                        <IonIcon icon={phonePortraitSharp} className='device'/>
                        <div className='div-input-bovino'>
                            <div className='div-title'>
                                <p>Dispositivo actualmente</p>
                            </div>
                            <input type="text" name="" placeholder='Dispositivo 3'/>
                        </div>
                        <div className='content-devices'>
                            <p  ref={iconRef} onClick={() => setModalIsOpen(!modalIsOpen)}>Dispositivos disponibles para vinculacion</p>
                            { modalIsOpen && (
                                <div className='list' ref={modalRef}>
                                    <ul>
                                        {devices.map((device, index) =>(
                                            <li key={index}>{device.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={`thisbutton ${'' ? 'añadir' : ''}`}>
                    <Button typeButton={typeButtonAction} className={`add ${classNameButtonAction}`} onClick={onClickAction}/>
                </div>
            </div>
        </div>
    )
}