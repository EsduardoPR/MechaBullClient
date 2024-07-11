import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import React, { useEffect, useState } from "react";
import ContentAllAuths from "../../atoms/auths/contentAllAuths";
import { InputString } from "../../molecules/auths/inputString";
import { InputPassword } from "../../molecules/auths/inputPassword";
import { Button } from "../../molecules/auths/button";
import { Messages } from "../../molecules/auths/messages";
import { useWebSocket } from "../../services/userContext";
export function SectionLogin(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [nicknameError, setNicknameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false)
    const [error, setError] = useState(false);
    const [errorReq, setErrorReq] = useState(false);
    const [msg, setMsg] = useState('')
    const [msgReq, setMsgReq] = useState('')


    const navigate = useNavigate();
    const { establishWebSocketConnection } = useWebSocket();


    useEffect(() =>{
        const tokenVerify = window.localStorage.getItem('token')
        if(tokenVerify){
            establishWebSocketConnection(tokenVerify)
            setTimeout(() =>{
                navigate('/inicio')
            }, 300)
        }

    }, [])

    const handleLoginChange = (event) => {
        const { name, value } = event.target;
        setErrorReq(false)
        setPasswordError(false)
        if (name === 'username') {
            if (/\s/.test(value)) {
                setError(true);
                setNicknameError(true)
                setMsg("El nombre de usuario no debe contener espacios");
            } else {
                setError(false)
                setNicknameError(false);
            }
            if(value.length >= 20) {
                setError(true)
                setMsg("El nombre de usuario supero los 20 caracteres")
            } 
            if(/\s/.test(value) && value.length >= 20){
                setError(true);
                setNicknameError(true)
                setMsg("El nombre de usuario no debe contener espacios y mas de 20 caracteres");
            } else{
                setNicknameError(false)
            }
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleKeyDown = (event) =>{
        if (event.key === 'Enter') {
            send();
        }
    }

    const send = async () => {
        if (!username || !password) {
            alert('Por favor, corrige los errores antes de enviar.');
        } else {
            try {
                const response = await axios.post('http://localhost:3000/api/users/login', {
                    username,
                    password
                });
                window.localStorage.setItem('token', response.data.token)
                establishWebSocketConnection();
                setTimeout(() =>{
                    navigate('/inicio')
                }, 100)
            } catch (error) {
                if (error.response && error.response.data && error.response.data.message) {
                    setErrorReq(true)
                    setMsgReq("usuario o contraseña incorrectos");
                    setNicknameError(true)
                    setPasswordError(true)
                } else {
                    setError('Error desconocido al intentar iniciar sesión');
                }
            }
        } 
    }

    const renderContent = (
        <>
            <InputString 
                className={`${nicknameError ? 'error error:focus' : ''}`}
                classNameP={`${nicknameError ? 'visible' : ''}`}
                typeInput={"Nombre de usuario"}
                value={username}
                name="username"
                placeholder={"Juan123"}
                onKeyDown={handleKeyDown}
                onChange={handleLoginChange}/>
            <Messages msg={msg} className={`errors-input ${error ? 'visible' : ''}`} />
            <InputPassword 
                className={`${passwordError ? 'error error:focus' : ''}`}
                classNameP={`${passwordError ? 'visible' : ''}`}
                typePassword={"Contraseña"}
                value={password}
                onKeyDown={handleKeyDown}
                name="password"
                onChange={handleLoginChange}/>
            <Messages msg={msgReq} className={`errors-passwd ${errorReq ? 'visible' : ''}`} />
            <div className="redirections">
                <div className="sin-cuenta">
                    <p>Sin cuenta?, &nbsp;</p>
                    <Link className="enlace-registro" to='/registro'>registrate</Link>
                </div>
                <Link className="enlace-recuperacion" to='/recuperacion-contraseña'>Olvidaste tu contraseña?</Link>  
            </div>  
            <Button onClick={send} className="buttonT" typeButton={"Entrar"}/>
        </>
    )
    return(
        <section className="section-login">
            <ContentAllAuths 
                className={"login"}
                title={"Iniciar Sesión"} 
                content={renderContent}/>
        </section>
    )
}