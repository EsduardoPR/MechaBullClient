import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import ContentAllAuths from "../../atoms/auths/contentAllAuths";
import { InputString } from "../../molecules/auths/inputString";
import { Button } from "../../molecules/auths/button";
import { Messages } from "../../molecules/auths/messages";

export function SectionRecuperarContraseña(){
    let mgsEmail = 'Ingresa un correo valido';
    let msgReq = 'Correo no encontrado.'
    const [thisOk, setThisOk] = useState(false)
    const [errorReq, setErrorReq] = useState(false);
    const [errorEmailCss, setErrorEmailCss] = useState(false)
    const [errorEmailMsg, setErrorEmailMsg] = useState(false)
    const [checkEmail, setCheckEmail] = useState(false)
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const handleLoginChange = (event) =>{
        const { name, value } = event.target;
        setErrorReq(false)
        setErrorEmailCss(false)
        if (name === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if(!emailRegex.test(value)){
                setErrorEmailCss(true)
                setErrorEmailMsg(true)
                setCheckEmail(true)
            } else {
                setErrorEmailCss(false)
                setErrorEmailMsg(false)
                setCheckEmail(false)
            }
            setEmail(value)
        }
    }
    const handleKeyDown = (event) =>{
        if (event.key === 'Enter') {
            send();
        }
    }

    const send = async () => {
        if(!email || checkEmail){
            alert('Por favor, corrige los errores antes de enviar.');
        } else {
            try {
                await axios.post('http://localhost:3000/api/users/passwd-recovery',{ email });
                setThisOk(true)
            } catch (error) {
                if (error.response && error.response.data && error.response.data.message) {
                    setErrorEmailCss(true)
                    setErrorReq(true)
                } else {
                    setError('Error desconocido al intentar enviar correo');
                }
            }
        }
    }

    const closePop = () =>{
        navigate('/')
    }

    const content = (
        <>
            <InputString 
                  className={`${errorEmailCss ? 'error error:focus' : ''}`}
                  typeInput={"Correo electronico"}
                  value={email}
                  name="email"
                  placeholder={"example@gmail.com"}
                  onKeyDown={handleKeyDown}
                  onChange={handleLoginChange}
                />
            <Messages msg={mgsEmail} className={`errors-input ${errorEmailMsg ? 'visible' : ''}`} />
            <Messages msg={msgReq} className={`errors-req ${errorReq ? 'visible' : ''}`} />
            <Button onClick={send} className="buttonT"  typeButton={"Enviar"}/>
        </>
    )
    return(
        <>
            <section className="sectionRecuperarContraseña">
                <div className={`content-information ${thisOk ? 'active' : ''}`}>
                    <h2>Recuperación de contraseña</h2>
                    <div className="information">
                        <p>Se han enviado las instrucciones
                             para recuperar su contraseña a su correo electrónico</p>
                        <h5>El correo fue enviado a:</h5>
                    </div>
                    <h3>
                        {email}
                    </h3>
                    <Button onClick={closePop} className={'button-pop-ok-email-sender'} typeButton={'Ok'}/>   
                </div>
                <ContentAllAuths 
                    className={"recuperarContraseña"}
                    title={"Proceso de recuperacion de contraseña"} 
                    content={content}/>
            </section>
        </>

    )
}