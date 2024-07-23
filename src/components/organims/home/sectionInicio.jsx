import { useNavigate } from 'react-router-dom';
import axios from 'axios'
 
import { InputString } from '../../molecules/home/inputString';
import { SelectDevice } from '../../molecules/home/selectDevice';
import { Messages } from '../../molecules/auths/messages';

import { Header } from '../../molecules/home/header'
import { Foother } from '../../molecules/home/Foother';
import { Button } from '../../molecules/home/button'
import { TargetInfoResum } from '../../molecules/home/targetInfoResum';
import { TargetBovinoDates } from '../../molecules/home/targetBovinoDates';
import { CreateAndUpdateBovino } from '../../molecules/home/createAndUpdateBovino';




import '../../../assets/styles/home/inicio.css'

import { IonIcon } from '@ionic/react';
import { closeCircle, pulse, location, footsteps, alertCircle } from 'ionicons/icons';
import { useEffect, useState } from 'react';

export function SectionInicio(){
    const navigate = useNavigate();
    const token = window.localStorage.getItem('token');

    const [showBovinoPreInfoPopup, setShowBovinoPreInfoPopup] = useState(false);
    const [showAddBovinoPopup, setShowAddBovinoPopup] = useState(false)

    const [titleActionBovino, setTitleActionBovino] = useState('')


    //GET BOVINOS
    const [bovinos, setBovinos] = useState([]);
    const [bovinoSeleccionado, setBovinoSeleccionado] = useState(null);


    const [dispositivoSeleccionado, setDispositivoSeleccionado] = useState(null);

    const handleDispositivoSeleccionado = (dispositivo) => {
        setDispositivoSeleccionado(dispositivo);
    };

    // Definición de opciones
    const opcionesDispositivos = [
        { value: 1, label: 'Dispositivo1' },
        { value: 2, label: 'Dispositivo2' },
        { value: 3, label: 'Dispositivo3' },
        // Agrega más opciones según sea necesario
    ];


    let msgNameBovino = 'El nombre del bovino no debe ser mayor a 30 letras o digitos.'
    let msgSinigaBovino = 'El siniga no debe superar los 7 digitos.'
    let msgDate = 'No olvides la fecha.'
    let msgReq = 'Nombre de bovino o siniga repetidos'
    const [nameBovino, setNameBovino] = useState('');
    const [sinigaBovino , setSinigaBovino] = useState('');
    const [ageBovino, setAgeBovino] = useState('');

    const [errorReq, setErrorReq] = useState(false)

    const [errorNameBovinoCss, setErrorNameBovinoCss] = useState(false)
    const [errorSinigaBovinoCss, setErrorSinigaBovinoCss] = useState(false)
    const [errorAgeBovinoCss, setErrorAgeBovinoCss] = useState(false)

    const [errorNameBovinoMsg, setErrorNameBovinoMsg] = useState(false)
    const [errorSinigaBovinoMsg, setErrorSinigaBovinoMsg] = useState(false);

    const [activeEdit, setActiveEdit] = useState(false);
    const [activeAdd, setActiveAdd] = useState(false)


    // EVENTO AL CARGAR LA PAGINA
    useEffect(()=>{
        const getListBovinos = async() =>{
            try {
                const response = await axios.post('http://localhost:3000/api/bovinos/get-all', {
                    token
                });
                setBovinos(response.data);
            } catch (error) {
                console.log(error)
                if (error.response && error.response.data && error.response.data.message) {
                    console.log(error.response)
                } else {
                    console.log('Error desconocido al hacer get de bovinos');
                    console.log(error)
                }
            }
        }
        getListBovinos()
    },[])

    //CLICKS EN BOVINO
    const clickBovino = (index) => {
        const bovino = bovinos[index];
        setBovinoSeleccionado(bovino)
        setShowBovinoPreInfoPopup(true);
    };
    const closePopInformationBovino = () => {
        setBovinoSeleccionado(null)
        setShowBovinoPreInfoPopup(false)
    };

    //DELETE BOVINO
    const deleteBovino = async () =>{
        const confirmacion = window.confirm('¿Estás seguro de borrar este bovino?');
        if (confirmacion) {
            try {
                const response = await axios.delete(`http://localhost:3000/api/bovinos/delete-bovino`,{
                    params: {
                        id: bovinoSeleccionado.id,
                        token: token
                    }
                });
                setBovinos((prevBovinos) => prevBovinos.filter(bovino => bovino.id !== response.data.bovino._id));
                setBovinoSeleccionado(null)
                setShowBovinoPreInfoPopup(false)
            } catch (error) {
                console.error('Error al intentar eliminar el bovino:', error);
            }
        } else {
            console.log('El usuario canceló la acción de eliminar.');
        }
    }




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


    const goPageBovino = () =>{
        if(bovinoSeleccionado){
            navigate(`/info-bovino/${bovinoSeleccionado.id}`);
        }   
    }




    const onKeyDownCreateBovino = (event) =>{
        if (event.key === 'Enter') {
            sendAddBovino()
        }
    }
    const handleInputsBovino = (event) =>{
        const { name, value} = event.target;
        setErrorReq(false)
        setErrorNameBovinoCss(false)
        setErrorSinigaBovinoCss(false)
        if(name === 'nameBovino'){
            if(value.length >= 31){
                setErrorNameBovinoCss(true)
                setErrorNameBovinoMsg(true)
            } else {
                setErrorNameBovinoCss(false)
                setErrorNameBovinoMsg(false)
            }
            setNameBovino(value)
        } else if(name === 'sinigaBovino'){
            if(value.length >= 8){
                setErrorSinigaBovinoCss(true)
                setErrorSinigaBovinoMsg(true)
            } else {
                setErrorSinigaBovinoCss(false)
                setErrorSinigaBovinoMsg(false)
            }
            setSinigaBovino(value)
        } else if(name === 'ageBovino'){
            const parsedValue = parseFloat(value);
            if (isNaN(parsedValue)) {
                setErrorAgeBovinoCss(true)
                return;
            } else {
                setErrorAgeBovinoCss(false)
            }
            setAgeBovino(value);
        }
    }
    // EDITAR BOVINO
    async function sendUpdateBovino(){
        if(errorNameBovinoCss || errorSinigaBovinoCss || errorAgeBovinoCss){
            alert('Por favor, corrige los errores antes de enviar.');
        } else {
            try {
                let idBovino = ''
                if(bovinoSeleccionado){
                    idBovino = bovinoSeleccionado.id
                }
                const updateData = {};
                if (nameBovino) updateData.name = nameBovino;
                if (sinigaBovino) updateData.siniga = sinigaBovino;
                if (ageBovino) updateData.age = ageBovino;
                const response =  await axios.put('http://localhost:3000/api/bovinos/update-data', { 
                    updateData,
                    token,
                    idBovino: idBovino
                });
                setBovinos(prevBovinos =>
                    prevBovinos.map(bovino =>
                      bovino.id === response.data.bovino._id ? response.data.bovino : bovino
                    )
                  );
                setActiveAdd(false)
                setActiveEdit(false)
                setTimeout(() =>{
                    setShowBovinoPreInfoPopup(false)
                }, 100)
            } catch (error) {
                if (error.response && error.response.data && error.response.data.message) {
                    setErrorReq(true)
                    setErrorNameBovinoCss(true)
                    setErrorSinigaBovinoCss(true)
                } else {
                    console.log('Error desconocido al intentar iniciar sesión');
                    console.log(error)
                }
            }
        }
        
    }
    //CREAR BOVINO
    async function sendAddBovino(){
        if(!nameBovino || !sinigaBovino || !ageBovino || errorNameBovinoCss || errorSinigaBovinoCss || errorAgeBovinoCss){
            alert('Por favor, corrige los errores antes de enviar.');
        } else {
            try {
                const response =  await axios.post('http://localhost:3000/api/bovinos/create', {
                    nameBovino,
                    sinigaBovino,
                    ageBovino,
                    token
                });
                setBovinos((prevBovinos) => [...prevBovinos, response.data]);
                setNameBovino('')
                setSinigaBovino('')
                setAgeBovino(undefined)
                setActiveAdd(false)
                setShowBovinoPreInfoPopup(false)
                setErrorReq(false)
            } catch (error) {
                if (error.response && error.response.data && error.response.data.message) {
                    setErrorReq(true)
                    setErrorNameBovinoCss(true)
                    setErrorSinigaBovinoCss(true)
                } else {
                    console.log('Error desconocido al intentar iniciar sesión');
                    console.log(error)
                }
            }
        }
    }

    


    const addCowData = (
        <>
            <InputString 
                typeInput={'Nombre'} onKeyDown={onKeyDownCreateBovino} className={`input-bovino ${errorNameBovinoCss ? 'error error:focus':''}`} 
                placeholder={''} value={nameBovino} onChange={handleInputsBovino} name={'nameBovino'} type={'text'}/>
            <Messages msg={msgNameBovino} className={`msg-error-input-bovino ${errorNameBovinoMsg ? 'visible' : ''}`} />
            <InputString 
                typeInput={'Siniga'} onKeyDown={onKeyDownCreateBovino} className={`input-bovinoS ${errorSinigaBovinoCss ? 'errorS errorS:focus':''}`} 
                placeholder={''} value={sinigaBovino} onChange={handleInputsBovino} name={'sinigaBovino'} type={'text'}/>
            <Messages msg={msgSinigaBovino} className={`msg-error-input-bovino ${errorSinigaBovinoMsg ? 'visible' : ''}`} />
            <InputString 
                typeInput={'Edad'} onKeyDown={onKeyDownCreateBovino} className={`input-bovino  ${errorAgeBovinoCss ? 'error error:focus':''}`} 
                value={ageBovino} onChange={handleInputsBovino} name={'ageBovino'} type={'number'}/>
            <Messages msg={msgReq} className={`msg-error-input-bovino ${errorReq ? 'visible' : ''}`} />
            {/*<SelectDevice options={opcionesDispositivos} onDispositivoSeleccionado={handleDispositivoSeleccionado} />*/}
        </>
    )

    const udpateCowData = (
        bovinoSeleccionado && ( 
            <>
            <InputString 
                typeInput={'Nombre'} onKeyDown={onKeyDownCreateBovino} className={`input-bovino ${errorNameBovinoCss ? 'error error:focus':''}`} 
                placeholder={bovinoSeleccionado.name} value={nameBovino} onChange={handleInputsBovino} name={'nameBovino'} type={'text'}/>
            <Messages msg={msgNameBovino} className={`msg-error-input-bovino ${errorNameBovinoMsg ? 'visible' : ''}`} />
            <InputString 
                typeInput={'Siniga'} onKeyDown={onKeyDownCreateBovino} className={`input-bovinoS ${errorSinigaBovinoCss ? 'errorS errorS:focus':''}`} 
                placeholder={bovinoSeleccionado.siniga} value={sinigaBovino} onChange={handleInputsBovino} name={'sinigaBovino'} type={'text'}/>
            <Messages msg={msgSinigaBovino} className={`msg-error-input-bovino ${errorSinigaBovinoMsg ? 'visible' : ''}`} />
            <InputString 
                typeInput={'Edad'} onKeyDown={onKeyDownCreateBovino} className={`input-bovino  ${errorAgeBovinoCss ? 'error error:focus':''}`} 
                placeholder={bovinoSeleccionado.age} value={ageBovino} onChange={handleInputsBovino} name={'ageBovino'} type={'number'}/>
            <Messages msg={msgReq} className={`msg-error-input-bovino ${errorReq ? 'visible' : ''}`} />
            {/*<SelectDevice options={opcionesDispositivos} onDispositivoSeleccionado={handleDispositivoSeleccionado} />*/}
        </>
        )
    )



    return(
    <section className="section-inicio">
        <Header/>
        <div className={`information-bovino-back ${showBovinoPreInfoPopup ? 'active' : ''}`}>
            <div className={`information-bovino-front`}>
                <div className='information-bovino-retroceder'>
                    <IonIcon onClick={closePopInformationBovino} icon={closeCircle} className='button-close'/>
                </div>
                {bovinoSeleccionado && ( 
                    <>
                        <div className='contente-1-div-information-bovino'>
                            <TargetBovinoDates name={bovinoSeleccionado.name} siniga={bovinoSeleccionado.siniga} 
                            edad={bovinoSeleccionado.age}/>
                            <TargetInfoResum icon={pulse} classIcon={'pulse'} msgTitle={'Latidos por minuto'} 
                            resumen={'resumen-latidos'} msgDate={bovinoSeleccionado.lpm}/>
                        </div>
                        <div className='contente-2-div-information-bovino'>
                            <TargetInfoResum icon={location} classIcon={'location'} msgTitle={'Ultima ubicación'} 
                                resumen={'resumen-ubicacion'} msgDate={'23m al sur de la ubicación central'} 
                                iconNoti={alertCircle} classIconNoti={'icon-verify-bovino'} ultActualizacion={'A las'}/>
                            <TargetInfoResum icon={footsteps} classIcon={'steps'} msgTitle={'Promedio de pasos'} 
                                resumen={'resumen-text'} msgDate={bovinoSeleccionado.averageSteps}/>
                        </div>
                    </>
                )}
                <div className='buttons-information-bovino'>
                    <Button className={'button-inicio-Eliminar'} onClick={deleteBovino} typeButton={'Eliminar'}/>
                    <Button className={'button-inicio-Editar'} onClick={showUpdateBovino} typeButton={'Editar'}/>
                    <Button className={'button-inicio-Ir'} onClick={goPageBovino} typeButton={'Ir'}/>
                </div>
            </div>
        </div>
        {activeEdit && (
            <CreateAndUpdateBovino className={`create-bovino-back ${showAddBovinoPopup ? 'active' : ''}`} 
            onClick={closeShowAddBovino} titleActionBovino={titleActionBovino}
            onClickAction={sendUpdateBovino} classNameButtonAction={'editar'}
            typeButtonAction={'Editar'}
            contentModifyCowData={udpateCowData}/>
        )}




        {activeAdd && (
            <CreateAndUpdateBovino className={`create-bovino-back ${showAddBovinoPopup ? 'active' : ''}`} 
            onClick={closeShowAddBovino} titleActionBovino={titleActionBovino}
            classNameButtonAction={'añadir'} onClickAction={sendAddBovino}
            typeButtonAction={'Añadir'}
            contentModifyCowData={addCowData} />
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
                                <th>Nombre</th>
                                <th>Siniga</th>
                                <th>Edad</th>
                                <th>Lpm</th>
                                <th>Promedio de pasos</th>
                                <th>Dispositivo asignado</th>
                            </tr>
                        </thead>
                        <tbody className="scroll-tbody">
                            {bovinos.map((bovino, index) => (
                                <tr onClick={() => clickBovino(index)} key={index}>
                                    <td>{bovino.name}</td>
                                    <td>{bovino.siniga}</td>
                                    <td>{bovino.age}</td>
                                    <td>{bovino.lpm}</td>
                                    <td>{bovino.averageSteps}</td>
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