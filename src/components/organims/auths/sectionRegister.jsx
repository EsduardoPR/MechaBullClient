import ContentAllAuths from "../../atoms/auths/contentAllAuths";
import { InputString } from "../../molecules/auths/inputString";
import { InputPassword } from "../../molecules/auths/inputPassword";
import { Button } from "../../molecules/auths/button";


export function SectionRegister(){
    const content = (
        <>
            <InputString typeInput={"Nombre de usuario"} placeholder={"Lola123"}/>
            <InputString typeInput={"ID dispositivo"}placeholder={"AAAA-0000"}/>
            <InputPassword typePassword={"Contraseña"}/>
            <InputPassword typePassword={"Confirmar Contraseña"}/>
             
            <Button className="buttonT" typeButton={"Registrar"}/>
        </>
    )
    return(
        <section className="Section-Register">
            <ContentAllAuths 
                className={"Register"}
                title={"Registro"} 
                content={content}/>
                <div>hola</div>
        </section>
    )
}