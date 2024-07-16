import { HeaderSuperior } from '../../molecules/home/headerSuperior'
import { Foother } from '../../molecules/home/Foother';
import { Button } from '../../molecules/home/button'
import { TargetInfoResum } from '../../molecules/home/targetInfoResum';
import { TargetBovinoDates } from '../../molecules/home/targetBovinoDates';
import { CreateAndUpdateBovino } from '../../molecules/home/createAndUpdateBovino';

import '../../../assets/styles/home/inicio.css'

import { IonIcon } from '@ionic/react';
import { closeCircle, pulse, location, footsteps, alertCircle } from 'ionicons/icons';
import { useState } from 'react';

export function SectionInicio(){
    const [showBovinoPreInfoPopup, setShowBovinoPreInfoPopup] = useState(false);
    const [showAddBovinoPopup, setShowAddBovinoPopup] = useState(false)

    const [titleActionBovino, setTitleActionBovino] = useState('')

    const bovinos = [
        { id: 1, nombre: 'Juan', siniga: '1223-ERR', edad: 12, lpm: '12/m', promedioPasos: '120 p' },
        { id: 1, nombre: 'John', siniga: '1223-ERR', edad: 12, lpm: '12/m', promedioPasos: '120 p' },
        { id: 1, nombre: 'Yess', siniga: '1223-ERR', edad: 12, lpm: '12/m', promedioPasos: '120 p' },
        { id: 1, nombre: 'LOLI', siniga: '1223-ERR', edad: 12, lpm: '12/m', promedioPasos: '120 p' },
        { id: 1, nombre: 'AUG', siniga: '1223-ERR', edad: 12, lpm: '12/m', promedioPasos: '120 p' },
        { id: 1, nombre: 'KAY', siniga: '1223-ERR', edad: 12, lpm: '12/m', promedioPasos: '120 p' },
        { id: 1, nombre: 'alberto', siniga: '1223-ERR', edad: 12, lpm: '12/m', promedioPasos: '120 p' },
        { id: 1, nombre: 'jesus', siniga: '1223-ERR', edad: 12, lpm: '12/m', promedioPasos: '120 p' },
        { id: 1, nombre: 'Josua', siniga: '1223-ERR', edad: 12, lpm: '12/m', promedioPasos: '120 p' },
    ];

    const hola = (index) => {
        const bovino = bovinos[index];
        console.log(`Clicked row at index: ${bovino.nombre}`);
        setShowBovinoPreInfoPopup(true)
    };

    const closePopInformationBovino = () => {
        setShowBovinoPreInfoPopup(false)
    };


    const deleteBovino = () =>{
        alert('Estas seguro de borrar este bovino?')
    }

    const [activeEdit, setActiveEdit] = useState(false);
    const [activeAdd, setActiveAdd] = useState(false)

    const showUpdateBovino = () => {
        setTitleActionBovino('Editando')
        setShowAddBovinoPopup(true)
        setActiveEdit(true)
        setActiveAdd(false)
    }
    const showAddBovino = async () => {
        setTitleActionBovino('Agregando')
        setShowAddBovinoPopup(true)
        setActiveAdd(true)
        setActiveEdit(false)
    }

    const closeShowAddBovino = () => {
        setShowAddBovinoPopup(false)
    }

    const sendUpdateBovino = () => {
        console.log("actualizado con exito JAJJA")
        setActiveAdd(false)
        setActiveEdit(false)
        setTimeout(() =>{
            setShowBovinoPreInfoPopup(false)
        }, 100)
    }
    const sendAddBovino = () =>{
        console.log('añadido con exito XD')
        setShowAddBovinoPopup(false)
        setActiveAdd(false)
        setActiveEdit(false)
    }

    return(
    <section className="section-inicio">
        <HeaderSuperior name={"Inicio"}/>
        <div className={`information-bovino-back ${showBovinoPreInfoPopup ? 'active' : ''}`}>
            <div className={`information-bovino-front`}>
                <div className='information-bovino-retroceder'>
                    <IonIcon onClick={closePopInformationBovino} icon={closeCircle} className='button-close'/>
                </div>
                <div className='contente-1-div-information-bovino'>
                    <TargetBovinoDates/>
                    <TargetInfoResum icon={pulse} classIcon={'pulse'} msgTitle={'Latidos por minuto'} 
                        resumen={'resumen-latidos'} msgDate={'1500/m'}/>
                </div>
                <div className='contente-2-div-information-bovino'>
                    <TargetInfoResum icon={location} classIcon={'location'} msgTitle={'Ultima ubicación'} 
                        resumen={'resumen-ubicacion'} msgDate={'23m al sur de la ubicación central'} 
                        iconNoti={alertCircle} classIconNoti={'icon-verify-bovino'} ultActualizacion={'A las'}/>
                    <TargetInfoResum icon={footsteps} classIcon={'steps'} msgTitle={'Promedio de pasos'} 
                        resumen={'resumen-text'} msgDate={'300 P'}/>
                </div>
                <div className='buttons-information-bovino'>
                    <Button className={'button-inicio-Eliminar'} onClick={deleteBovino} typeButton={'Eliminar'}/>
                    <Button className={'button-inicio-Editar'} onClick={showUpdateBovino} typeButton={'Editar'}/>
                    <Button className={'button-inicio-Ir'} onClick={hola} typeButton={'Ir'}/>
                </div>
            </div>
        </div>
        {activeEdit && (
            <CreateAndUpdateBovino className={`create-bovino-back ${showAddBovinoPopup ? 'active' : ''}`} 
            onClick={closeShowAddBovino} titleActionBovino={titleActionBovino}
            onClickAction={sendUpdateBovino} classNameButtonAction={'editar'}
            typeButtonAction={'Editar'}/>
        )}

        {activeAdd && (
            <CreateAndUpdateBovino className={`create-bovino-back ${showAddBovinoPopup ? 'active' : ''}`} 
            onClick={closeShowAddBovino} titleActionBovino={titleActionBovino}
            onClickAction={sendAddBovino} classNameButtonAction={'añadir'}
            typeButtonAction={'Añadir'}/>
        )}

        <div className="table-container">
            <div className="table">
                <div className="header-lista">
                    <div className="title-lista">
                        <h1>Lista Bovinos</h1>
                        <p>Datos</p>
                    </div>
                    <div>
                        <Button className={'button-inicio-añadir'} onClick={showAddBovino} typeButton={'Añadir'}/>
                    </div>
                </div>
                <div className='content-table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Siniga</th>
                                <th>Nombre</th>
                                <th>Edad</th>
                                <th>Lpm</th>
                                <th>Promedio de pasos</th>
                            </tr>
                        </thead>
                        <tbody className="scroll-tbody">
                            {bovinos.map((bovino, index) => (
                                <tr onClick={() => hola(index)} key={index}>
                                    <td>{bovino.siniga}</td>
                                    <td>{bovino.nombre}</td>
                                    <td>{bovino.edad}</td>
                                    <td>{bovino.lpm}</td>
                                    <td>{bovino.promedioPasos}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>  
        <Foother/>
    </section>
    )
}