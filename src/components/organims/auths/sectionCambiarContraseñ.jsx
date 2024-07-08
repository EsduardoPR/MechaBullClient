import ContentAllAuths from "../../atoms/auths/contentAllAuths";
import { InputPassword } from "../../molecules/auths/inputPassword";
import { Button } from "../../molecules/auths/button";

export function SectionCambiarContraseñ(){
    const content = (
        <>
            <InputPassword typePassword={"Ingresa una nueva contraseña"}/>
            <InputPassword typePassword={"Confirma la contraseña"}/>
            <Button className="buttonT" typeButton={"Enviar"}/>
        </>
    )
    return(
        <section className="sectionCambiarContraseña">
            <ContentAllAuths 
                className={"CambiarContraseña"}
                title={"Proceso de recuperacion de contraseña"}                
                content={content}/>
        </section>
    )
}
