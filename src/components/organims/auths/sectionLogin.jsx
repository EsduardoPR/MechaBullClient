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

    const [errorUsernameMsg, setErrorUsernameMsg] = useState(false);
    const [checkUsername, setCheckUsername] = useState(false);

    let msgUsername = 'El nombre de usuario no debe contener espacios o mas de 20 caracteres';
    let msgReq = 'usuario o contraseña incorrectos'

    const [usernameErrorCss, setUsernameErrorCss] = useState(false)
    const [passwordErrorCss, setPasswordErrorCss] = useState(false)




    const [errorReq, setErrorReq] = useState(false);

    

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
        setUsernameErrorCss(false)
        setPasswordErrorCss(false)
        if (name === 'username') {
            if(/\s/.test(value) || value.length >= 20){
                setErrorUsernameMsg(true);
                setUsernameErrorCss(true)
                setCheckUsername(true)
            } else {
                setErrorUsernameMsg(false)
                setUsernameErrorCss(false)
                setCheckUsername(false)
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
        if (!username || !password || checkUsername) {
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
                    setUsernameErrorCss(true)
                    setPasswordErrorCss(true)
                } else {
                    setError('Error desconocido al intentar iniciar sesión');
                }
            }
        } 
    }

    const renderContent = (
        <>
            <InputString 
                className={`${usernameErrorCss ? 'error error:focus' : ''}`}
                typeInput={"Nombre de usuario"}
                value={username}
                name="username"
                placeholder={""}
                onKeyDown={handleKeyDown}
                onChange={handleLoginChange}/>
            <Messages msg={msgUsername} className={`errors-input ${errorUsernameMsg ? 'visible' : ''}`} />
            <InputPassword 
                className={`${passwordErrorCss ? 'error error:focus' : ''}`}
                typePassword={"Contraseña"}
                value={password}
                onKeyDown={handleKeyDown}
                name="password"
                onChange={handleLoginChange}/>
            <Messages msg={msgReq} className={`errors-req ${errorReq ? 'visible' : ''}`} />
            <div className="redirections">
                <div className="sin-cuenta">
                    <p>Sin cuenta?, &nbsp;</p>
                    <Link className="enlace-registro" to='/reg'>registrate</Link>
                </div>
                <Link className="enlace-recuperacion" to='/pros-rec-contra'>Olvidaste tu contraseña?</Link>  
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