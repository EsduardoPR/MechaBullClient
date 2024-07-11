import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import ContentAllAuths from "../../atoms/auths/contentAllAuths";
import { InputString } from "../../molecules/auths/inputString";
import { InputPassword } from "../../molecules/auths/inputPassword";
import { Button } from "../../molecules/auths/button";
import { Messages } from "../../molecules/auths/messages";


export function SectionRegister(){
    const navigate = useNavigate();

    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirPassword, setConfirmPassword] = useState('')
    const [idDispo, setIdDispo] = useState('');

    //const [msg, setMsg] = useState('')
    let msgUsername = 'El nombre de usuario no debe contener espacios o mas de 20 caracteres'
    let msgID = 'El ID no debe contener espacios y minusculas'
    let msgPasswd = 'Debe tener más de 5 caracteres y contener al menos una letra mayúscula y un número.'
    let msgConfirPasswd = 'La contraseña no es correcta'
    let msgGmail = 'Ingresa un correo valido'

    const [errorUserMsg, setErrorUserMsg] = useState(false)
    const [errorGmailMsg, setErrorGmailMsg] = useState(false)
    const [errorIDMsg, setErrorIdMsg] = useState(false)
    const [errorPasswdMsg, setErrorPasswdMsg] = useState(false)
    const [errorConfirmPasswdMsg, setErrorConfirmPasswdMsg] = useState(false)

    const [errorUsernameCss, setErrorUsernameCss] = useState(false);
    const [errorGmailCss, setErrorGmailCss] = useState(false)
    const [errorIdCss, setErrorIDCss] = useState(false);
    const [errorPasswdCss, setErrorPasswdCss] = useState(false);
    const [errorConfPasswdCss, setErrorConfPasswdCss] = useState(false);

    const [checkUsername, setCheckUsername] = useState(false)
    const [checkGmail, setCheckGmail] = useState(false);
    const [checkIdDispo, setCheckIdDispo] = useState(false)
    const [checkPasswd, setCheckPasswd] = useState(false)
    const [checkConfirmPasswd, setCheckConfirmPasswd] = useState(false);

    const handleRegisterChange = (event) => {
        const { name, value } = event.target;

        if (name === 'username') {
            if(/\s/.test(value) || value.length >= 20){
                setErrorUserMsg(true)
                setCheckUsername(true)
                setErrorUsernameCss(true);
            } else {
                setErrorUserMsg(false)
                setErrorUsernameCss(false)
                setCheckUsername(false);
            }
            setUsername(value);
        } else if(name === 'email'){
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if(!emailRegex.test(value)){
                setErrorGmailMsg(true)
                setCheckGmail(true)
                setErrorGmailCss(true)
            } else {
                setErrorGmailMsg(false)
                setCheckGmail(false)
                setErrorGmailCss(false)
            }
            setEmail(value)
        } else if (name === 'idDispo') {
            const idRegex = /^[a-z]+$/;
            if (/\s/.test(value) || idRegex.test(value)) {
                setErrorIdMsg(true)
                setErrorIDCss(true);
                setCheckIdDispo(true);
            } else {
                setErrorIdMsg(false)
                setErrorIDCss(false);
                setCheckIdDispo(false);
            }
            setIdDispo(value)
        }
        else if (name === 'password') {
            const passwdRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
            if (!passwdRegex.test(value)) {
                setErrorPasswdMsg(true);
                setErrorPasswdCss(true);
                setCheckPasswd(true)
            } else {
                setErrorPasswdMsg(false);
                setErrorPasswdCss(false)
                setCheckPasswd(false)
            }
            setPassword(value)
        }
        else if (name === 'confirmPassword') {
            if (password !== value) {
                setErrorConfirmPasswdMsg(true);
                setErrorConfPasswdCss(true)
                setCheckConfirmPasswd(true);
            } else {
                setErrorConfirmPasswdMsg(false);
                setErrorConfPasswdCss(false)
                setCheckConfirmPasswd(false)
            }
            setConfirmPassword(value)
        }
    };

    const handleKeyDown = (event) =>{
        if (event.key === 'Enter') {
            send();
        }
    }

    const send = async () => {
        if (!username || !password || !confirPassword || !idDispo || !email
            || checkUsername || checkIdDispo || checkPasswd || checkConfirmPasswd || checkGmail
        ) {
            alert('Por favor, corrige los errores antes de enviar.');
        } else {
            try {
                const response = await axios.post('http://localhost:3000/api/users/register', {
                    username,
                    email,
                    password,
                    idDispo
                });
                console.log(response)
                //window.localStorage.setItem('token', response.data.token)
                //establishWebSocketConnection();
                setTimeout(() =>{
                    navigate('/')
                }, 100)
            } catch (error) {
                if (error.response && error.response.data && error.response.data.message) {
                    console.log(error.response.status, error.response.data.message)
                } else {
                   // setError('Error desconocido al intentar iniciar sesión');
                }
            }
        }
    }

    const content = (
        <>
            <InputString 
                className={`${errorUsernameCss ? 'error error:focus' : ''}`}
                typeInput={"Nombre de usuario"} 
                placeholder={"Lola123"}
                value={username}
                name="username"
                onKeyDown={handleKeyDown}
                onChange={handleRegisterChange}/>
            <Messages msg={msgUsername} className={`errors-input ${errorUserMsg ? 'visible' : ''}`} />
            <InputString 
                className={`${errorGmailCss ? 'error error:focus' : ''}`}
                typeInput={"correo"} 
                placeholder={"example@example.com"}
                value={email}
                name="email"
                onKeyDown={handleKeyDown}
                onChange={handleRegisterChange}/>
            <Messages msg={msgGmail} className={`errors-input ${errorGmailMsg ? 'visible' : ''}`} />
            <InputString 
                className={`${errorIdCss ? 'error error:focus' : ''}`}
                typeInput={"ID dispositivo"}
                placeholder={"AAAA-0000"}
                value={idDispo}
                name="idDispo"
                onKeyDown={handleKeyDown}
                onChange={handleRegisterChange}/>
            <Messages msg={msgID} className={`errors-input ${errorIDMsg ? 'visible' : ''}`} />
            <InputPassword 
                className={`${errorPasswdCss ? 'error error:focus' : ''}`}
                typePassword={"Contraseña"}
                value={password}
                onKeyDown={handleKeyDown}
                name="password"
                onChange={handleRegisterChange}/>
            <Messages msg={msgPasswd} className={`errors-input ${errorPasswdMsg ? 'visible' : ''}`} />
            <InputPassword 
                className={`${errorConfPasswdCss ? 'error error:focus' : ''}`}
                typePassword={"Confirmar Contraseña"}
                value={confirPassword}
                onKeyDown={handleKeyDown}
                name="confirmPassword"
                onChange={handleRegisterChange}/>
            <Messages msg={msgConfirPasswd} className={`errors-input ${errorConfirmPasswdMsg ? 'visible' : ''}`} />
             
            <Button className="buttonT" typeButton={"Registrar"} onClick={send}/>
        </>
    )
    return(
        <section className="section-register">
            <ContentAllAuths 
                className={"register"}
                title={"Registro"} 
                content={content}/>
        </section>
    )
}