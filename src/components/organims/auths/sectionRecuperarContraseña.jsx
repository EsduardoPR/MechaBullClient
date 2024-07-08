
import ContentAllAuths from "../../atoms/auths/contentAllAuths";
import { InputString } from "../../molecules/auths/inputString";
import { Button } from "../../molecules/auths/button";

export function SectionRecuperarContraseña(){
    const content = (
        <>
            <InputString typeInput={"Ingresa tu correo para buscarlo"} placeholder={"ejemplo@correo.com"}/>
            
            <Button  className="buttonT"  typeButton={"Enviar"}/>
            
            
        </>
    )
    return(
        <section className="SectionRecuperarContraseña">
            <ContentAllAuths 
                className={"RecuperarContraseña"}
                title={"Proceso de recuperacion de contraseña"} 
                content={content}/>
        </section>
    )
}