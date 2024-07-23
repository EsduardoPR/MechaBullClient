import { useState } from "react";
import { useNavigate } from "react-router-dom";

import '../../../assets/styles/home/header.css'
import logo from '../../../assets/img/logo.svg';
import BullPlusOn from '../../../assets/img/BullPlusOn.png'; 
import BullPlusOff from '../../../assets/img/BullPlusOff.png';

import lupa from '../../../assets/img/lupa.png'

import { IonIcon } from '@ionic/react';
import { settingsSharp } from 'ionicons/icons';

import { ModalS } from "../../atoms/home/modal";

<link href="https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&display=swap" rel="stylesheet"></link>;
<link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap" rel="stylesheet"></link>;

export function Header(){
    const navigation = useNavigate()
    const [isTrue, setIsTrue] = useState(true);
    
    const returtHome = () =>{
        navigation('/')
    }

    const returtSetting = () =>{
        navigation('/conf')
    }
    return(
        <section className='header'>
                <div className='header-title' onClick={returtHome}>
                    <img className='logo' src={logo} />
                </div>
                <div className='headerConfig' >
                    <div className="content-search">
                        <img src={lupa} alt="Icono" className="input-icon"/>
                        <input className='header-search' type="text" placeholder="Buscar"/>
                    </div>
                    <div className='container-BullPlus'>
                        <div>
                            {isTrue ? (
                                <img src={BullPlusOn} className="bull-plus" />
                            ) : (
                                <img src={BullPlusOff} className="bull-plus" />
                            )}
                            {/*<button onClick={() => setIsTrue(!isTrue)}>
                                Toggle Image
                            </button>*/}
                        </div>
                        <p className='name-buss'>BullPlus</p>
                    </div>
                    <ModalS/>
                    <div className="header-config" onClick={returtSetting}>
                        <IonIcon
                            icon={settingsSharp}
                            className="config-icon"/>
                        <p className='name-config'>Configuraciones</p>
                    </div>

                </div>
        </section>
    )
}