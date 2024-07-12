import React from "react";
import { Button } from "../../molecules/auths/button";
import ContentAllAuths from "../../atoms/auths/contentAllAuths";


function Animacion (){
    
}


export function SectionBusquedaContraseña(){
        const content = (
            <>
                <div className="noencontrada">
                    <div className="l1"></div>
                    <div className="l2"></div>

                </div>

                
                
                <Button  className="buttonT"  typeButton={"Enviar"}/>
              

                
                
            </>
        )
    return(
        <section className="SectionBusquedaContraseña">
            <ContentAllAuths 
                className={"BusquedaContraseña"}
                title={"Proceso de recuperacion de contraseña"} 
                content={content}/>
            
        </section>
    )
}