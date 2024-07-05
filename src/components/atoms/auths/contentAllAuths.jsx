import { Link } from "react-router-dom";
import { InputPassword } from "../../molecules/auths/inputPassword";
import { InputString } from "../../molecules/auths/inputString";
import { UpContent } from "../../molecules/auths/upContent";
import { Button } from "../../molecules/auths/button";

export default function ContentAllAuths({typeInput, typePassword, typeButton, title}){
    return(
        <div className="div-content">
            <div className="div-back"/>
            <div className="div-front">
                <UpContent title={title}/>
                <InputString typeInput={typeInput}/>
                <InputPassword typePassword={typePassword}/>
                <div className="redirections">
                    <div className="sin-cuenta">
                        <p>Sin cuenta?, &nbsp;</p>
                        <Link className="enlace-registro" to='/registro'>registrate</Link>
                    </div>
                    <Link className="enlace-recuperacion" to='/recuperacion-contraseña'>Olvidaste tu contraseña?</Link>  
                </div>  
                <Button className="buttonT" typeButton={typeButton}/>
            </div>
        </div>
    )
}
