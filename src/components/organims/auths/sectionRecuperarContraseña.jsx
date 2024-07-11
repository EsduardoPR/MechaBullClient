import { useState } from "react";

import ContentAllAuths from "../../atoms/auths/contentAllAuths";
import { InputString } from "../../molecules/auths/inputString";
import { Button } from "../../molecules/auths/button";
import { Messages } from "../../molecules/auths/messages";

export function SectionRecuperarContraseña(){
    let mgsGmail = 'Ingresa un correo valido';
    const [errorGmail, setErrorGmail] = useState(false) 
    const [gmail, setGmail] = useState('')

    const handleLoginChange = (event) =>{
        const { name, value } = event.target;
        if (name === 'gmail') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if(!emailRegex.test(value)){
                setErrorGmail(true)
            } else {
                setErrorGmail(false)
            }
            setGmail(value)
        }
    }
    const handleKeyDown = (event) =>{
        if (event.key === 'Enter') {
            send();
        }
    }

    const content = (
        <>
            <InputString 
                  className={`${errorGmail ? 'error error:focus' : ''}`}
                  typeInput={"Correo electronico"}
                  value={gmail}
                  name="gmail"
                  placeholder={"example@gmail.com"}
                  onKeyDown={handleKeyDown}
                  onChange={handleLoginChange}
                />
            <Messages msg={mgsGmail} className={`errors-input ${errorGmail ? 'visible' : ''}`} />
            <Button  className="button-recup"  typeButton={"Enviar"}/>
        </>
    )
    return(
        <section className="sectionRecuperarContraseña">
            <ContentAllAuths 
                className={"recuperarContraseña"}
                title={"Proceso de recuperacion de contraseña"} 
                content={content}/>
        </section>
    )
}