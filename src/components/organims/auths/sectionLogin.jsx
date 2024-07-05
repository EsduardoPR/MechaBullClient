import { Link } from "react-router-dom";
import ContentAllAuths from "../../atoms/auths/contentAllAuths";
import { InputString } from "../../molecules/auths/inputString";
import { InputPassword } from "../../molecules/auths/inputPassword";
import { Button } from "../../molecules/auths/button";
export function SectionLogin(){
    const content = (
        <>
            <InputString typeInput={"Nombre de usuario"}/>
            <InputPassword typePassword={"Contraseña"}/>
            <div className="redirections">
                <div className="sin-cuenta">
                    <p>Sin cuenta?, &nbsp;</p>
                    <Link className="enlace-registro" to='/registro'>registrate</Link>
                </div>
                <Link className="enlace-recuperacion" to='/recuperacion-contraseña'>Olvidaste tu contraseña?</Link>  
            </div>  
            <Button className="buttonT" typeButton={"Entrar"}/>
        </>
    )
    return(
        <section className="section-login">
            <ContentAllAuths 
                className={"login"}
                title={"Iniciar Sesión"} 
                content={content}/>
        </section>
    )
}