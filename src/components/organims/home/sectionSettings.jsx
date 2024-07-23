import { useEffect, useState } from "react";
import axios from "axios";

import ImageInput from "../../molecules/home/ImageInput"
import img from "../../../assets/img/logo.svg"


import { useWebSocket } from "../../services/userContext";
import { useNavigate } from "react-router-dom";
import { Header } from "../../molecules/home/header";
import { Foother } from "../../molecules/home/Foother";
import { Button } from "../../molecules/home/button";
import { Messages } from "../../molecules/auths/messages";


export function SectionSettings(){
    const token = window.localStorage.getItem('token')
    const [user, setUser] = useState(null)
    const { ws } = useWebSocket();
    const navigate = useNavigate();


    const [name, setName] = useState('');
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    
    let msgCam = ''
    

    const [nameErrorCss, setNameErrorCss] = useState(false);
    const [usernameErrorCss, setUsernameErrorCss] = useState(false);
    const [emailErrorCss, setEmailErrorCss] = useState(false);

    const [errorNameMsg, setErrorNameMsg] = useState(false);
    const [errorUsernameMsg, setErrorUsernameMsg] = useState(false);
    const [errorEmailMsg, setErrorEmailMsg] = useState(false);
    
    const [errorReq, setErrorReq] = useState(false)




    useEffect(() =>{
        const getUser = async() =>{
            try {
                const response = await axios.post('http://localhost:3000/api/users/user-active?', { token });
                setUser(response.data)
            } catch (error) {
                if (error.response && error.response.data && error.response.data.message) {
                    console.log(error.response)
                } else {
                    console.log('Error desconocido al hacer get de user');
                    console.log(error)
                }
            }
        }
        getUser()
    },[])


    const logout = () => {
        const closeReason = 'clientClose';
        ws.close(4000, closeReason);
        setTimeout(() =>{
            navigate('/')
        }, 100)
    };

    async function updateUser(){
        if (!name || !username || !email) {
            alert('Por favor, corrige los errores antes de enviar.');
        } else {
            try {
                const updateData = {};
                if (name) updateData.name = name;
                if (username) updateData.username = username;
                if (email) updateData.email = email;
                const response = await axios.put('http://localhost:3000/api/users/update-data', {
                    updateData,
                    token
                });
                console.log(response)
            } catch (error) {
                if (error.response && error.response.data && error.response.data.message) {
                    setNameErrorCss(true)
                    setUsernameErrorCss(true)
                    setEmailErrorCss(true)
                    setErrorReq(true)
                } else {
                    setError('Error desconocido al intentar enviar correo');
                }
            }
        }
    }

    const handleUpdateChange = (event) => {
        const { name, value } = event.target;
        setErrorReq(false)
        setNameErrorCss(false)
        setUsernameErrorCss(false)
        setEmailErrorCss(false)
        if (name === 'name') {
            if(/\s/.test(value) || value.length >= 30){
                setErrorNameMsg(true);
                setNameErrorCss(true)
            } else {
                setErrorNameMsg(false)
                setUsernameErrorCss(false)
            }
            setName(value);
        } else if (name === 'username') {
            if(/\s/.test(value) || value.length >= 20){
                setErrorUsernameMsg(true);
                setUsernameErrorCss(true)
            } else {
                setErrorUsernameMsg(false)
                setUsernameErrorCss(false)
            }
            setUsername(value);
        } else if(name === 'email'){
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if(!emailRegex.test(value)){
                setErrorEmailMsg(true)
                setEmailErrorCss(true)
            } else {
                setErrorEmailMsg(false)
                setEmailErrorCss(false);
            }
            setEmail(value)
        }
    };


    return(
        user && (
            <section className="section-configuracion">
                <Header/>
                <div className="conten1">
                    <div className="Perfil">
                        <ImageInput/>
                        <p className="nombre-perfil">{user.username}</p>
                        <p className="user-perfil">@{user.username}</p>
                    </div>
                    <div className="editar-perfil">
                        <p className="Title-ep">Editar perfil</p>
                        <div className="container-input">
                            <InputPerfil className={`${nameErrorCss ? 'error error:focus' : ''}`}
                                contenido="Nombre" placeholder="hola"
                                type="text" value={name} Name="name" onChange={handleUpdateChange}/>
                            <InputPerfil className={`${usernameErrorCss ? 'error error:focus' : ''}`}
                                contenido="Nombre de usuario" placeholder={user.username} 
                                type="text" value={username} Name="username" onChange={handleUpdateChange}/>
                        </div>
                        <div className="container-input">
                            <InputPerfil className={`${emailErrorCss ? 'error error:focus' : ''}`}
                                contenido="Correo electronico" placeholder={user.email} 
                                type="text" value={email} Name="email" onChange={handleUpdateChange}/>
                            <InputPerfil contenido="Contraseña" placeholder="*********"type="null"/>
                        </div>
                        <Messages msg={msgCam} className={`errorreq`}/>
                        <div className="buttons-action-settings">
                            <Button onClick={updateUser} typeButton={'Actualizar información'} className={'update-sesion'}/>
                            <Button onClick={logout} typeButton={'Cerrar sesión'} className={'close-sesion'}/>
                        </div>
                    </div>
                </div>
                <div className="conten2">
                    <div className="miembros">
                        <p className="title-miembros">Miembros</p>
                        <div className="Scrol">
                            <ProfailContainer/>
                            <ProfailContainer/>
                            <ProfailContainer/>
                            <ProfailContainer/>
                            <ProfailContainer/>
                            <ProfailContainer/>
                        </div>
                    </div>
                </div>
                <Foother/>
            </section>
        )
    )
}

function InputPerfil({className, contenido, placeholder, type, value, Name, onChange}){
    return(
        <div className="input-perfil">
            <p>{contenido}</p>
            <input 
                className={`setting-input ${className}`}  type={type} placeholder={placeholder} value={value} name={Name} onChange={onChange}/>
        </div>
    )
}

function ProfailContainer(){
    return(
        <div className="profile-card">
            <img src={img} alt="Profile Picture" className="profile-picture" />
            <div className="profile-details">
            <p className="profile-name">Omar Sinigar</p>
            <p className="profile-status">Offline</p>
        </div>
      </div>
    )
}


