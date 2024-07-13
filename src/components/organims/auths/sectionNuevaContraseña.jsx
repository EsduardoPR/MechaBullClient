import React, { useState, useEffect } from 'react';
import { resolvePath, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Messages } from "../../molecules/auths/messages";
import ContentAllAuths from "../../atoms/auths/contentAllAuths";
import { InputPassword } from "../../molecules/auths/inputPassword";
import { Button } from "../../molecules/auths/button";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

export function SectionCambiarContraseñ(){
    let msgPasswd = 'La contraseña debe tener al menos 6 caracteres, incluir al menos una letra mayúscula y un número. Solo se permiten letras y números.'
    let msgConfirPasswd = 'Las contraseñas no coinciden.'

    const query = useQuery();
    const token = query.get('token');
    const navigate = useNavigate();

    const [thisOk, setThisOk] = useState(false)

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')

    const [checkPasswd, setCheckPasswd] = useState(false)

    const [passwdErrorCss, setPasswdErrorCss] = useState(false)
    const [confirmPasswdErrorCss, setConfirmPasswdErrorCss] = useState(false)

    const [errorMsgPasswd, setErrorMsgPasswd] = useState(false);
    const [errorMsgConfirmPasswd, setErrorMsgConfirmPasswd] = useState(false);


    useEffect(() =>{
        const verificarToken = async () =>{
            try {
                await axios.post('http://localhost:3000/api/users/token/recovery-passwd', { token });
            } catch (error) {
                if (error.response) {
                    if(error.response.data.message === 'token-expired' && error.response.status === 401){
                        navigate('/error-rec-pass', { state: { reason: 'token-expired' } });
                    }
                }
            }
        }
        if (token) {
            verificarToken();
        } else {
            navigate('/error-rec-pass', { state: { reason: 'no-token' } });
        }
    }, [])

    const handleRenamePasswd = (event) => {
        const { name, value} = event.target;
        if (name === 'password') {
            const passwdRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
            if(!passwdRegex.test(value)){
                setErrorMsgPasswd(true)
                setPasswdErrorCss(true)
            } else {
                setErrorMsgPasswd(false)
                setPasswdErrorCss(false)
            }
            setPassword(value);
        } else if(name === 'confirmPassword'){
            if(password !== value){
                setCheckPasswd(true)
                setErrorMsgConfirmPasswd(true)
                setConfirmPasswdErrorCss(true)
            } else {
                setCheckPasswd(false)
                setErrorMsgConfirmPasswd(false)
                setConfirmPasswdErrorCss(false)
            }
            setConfirmPassword(value)
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter'){
            send()
        }
    }

    const send = async () => {
        if (!password || !confirmPassword || checkPasswd) {
            alert('Por favor, corrige los errores antes de enviar.');
        } else {
            try {
                await axios.post('http://localhost:3000/api/users/new-passwd', { token, password})
                setThisOk(true)
            } catch (error) {
                if (error.response) {
                    if(error.response.data.message === 'token-expired' && error.response.status === 401){
                        navigate('/error-rec-pass', { state: { reason: 'token-expired' } });
                    }
                }
            }
        }
    }

    const closePop = () => {
        navigate('/')
    }

    const content = (
        <>
            <InputPassword 
                className={`${passwdErrorCss ? 'error error:focus' : ''}`}
                typePassword={'Nueva contraseña'}
                value={password}
                onKeyDown={handleKeyDown}
                name='password'
                onChange={handleRenamePasswd}
                />
            <Messages msg={msgPasswd} className={`errors-input ${errorMsgPasswd ? 'visible' : ''}`} />
            <InputPassword
                className={`${confirmPasswdErrorCss ? 'error error:focus' : ''}`}
                typePassword={'Confirmar contraseña'}
                value={confirmPassword}
                onKeyDown={handleKeyDown}
                name='confirmPassword'
                onChange={handleRenamePasswd}/>
            <Messages msg={msgConfirPasswd} className={`errors-input ${errorMsgConfirmPasswd ? 'visible' : ''}`} />
            <Button onClick={send} className="buttonT" typeButton={"Enviar"}/>
        </>
    )
    return(
        <section className="sectionCambiarContraseña">
            <div className={`content-information ${thisOk ? 'active' : ''}`}>
                    <h2>Recuperación de contraseña</h2>
                    <div className="information">
                        <p>¡Contraseña creada y guardada correctamente!</p>
                    </div>
                    <Button onClick={closePop} className={'button-pop-ok-email-sender'} typeButton={'Ok'}/>   
            </div>
            <ContentAllAuths 
                className={"cambiarContraseña"}
                title={"Proceso de recuperacion de contraseña"}                
                content={content}/>
        </section>
    )
}
