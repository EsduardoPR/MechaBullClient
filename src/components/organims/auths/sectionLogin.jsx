import ContentAllAuths from "../../atoms/auths/contentAllAuths";
export function SectionLogin(){
    return(
        <section className="section-login">
            <ContentAllAuths 
                title={"Iniciar Sesión"} 
                typeInput={"Nombre de usario"}
                typePassword={"Contraseña"}
                typeButton={"Entrar"}/>  
        </section>
    )
}