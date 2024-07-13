import { useState } from "react";

import '../../../assets/styles/home/header.css'
import logo from '../../../assets/img/logo.svg';
import BullPlusOn from '../../../assets/img/BullPlusOn.png'; 
import BullPlusOff from '../../../assets/img/BullPlusOff.png';
import config from '../../../assets/img/config.png'
import lupa from '../../../assets/img/lupa.png'

import { ModalS } from "../../atoms/home/modal";

<link href="https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&display=swap" rel="stylesheet"></link>;
<link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap" rel="stylesheet"></link>;

export function Header({name}){
    const [isTrue, setIsTrue] = useState(true);


    return(
        <section className='header'>
                <div className='headerTitle'>
                    <img className='logo' src={logo} alt="Logo" />
                    <h1 className='title'>{name}</h1>
                </div>
                <div className='headerConfig'>
                    <div class="input-container">
                        <img src={lupa} alt="Icono" class="input-icon"/>
                        <input className='Buscar-Header' type="text" placeholder="Buscar"/>
                    </div>
                        <div className='container-BullPlus'>
                            <p className='BullPlus'>BullPlus</p>
                            <div >
                                {isTrue ? (
                                    <img src={BullPlusOn} alt="BullPlusOn" />
                                ) : (
                                    <img src={BullPlusOff} alt="BullPlusOff" />
                                )}
                                <button onClick={() => setIsTrue(!isTrue)}>
                                    Toggle Image
                                </button>
                            </div>
                        </div>
                        <ModalS/>
                        <a href="">
                            <img className='Config' src={config}/>
                        </a>

                </div>
        </section>
    )
}