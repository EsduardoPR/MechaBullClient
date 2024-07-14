import ImageInput from "../../molecules/auths/ImageInput"
import img from "../../../assets/img/logo.svg"
export function SectionConfiguracion(){

 

    return(
        <section className="section-configuracion">
        <div className="Perfil">
            <ImageInput/>
            <p className="nombre-perfil">Nombre</p>
            <p className="user-perfil">@nombre</p>

        </div>
        <div className="editar-perfil">
            <p className="Title-ep">Editar prefil</p>
            <div className="container-input">
                <InputPerfil contenido="Nombre" placeholder="hola"type="text"/>
                <InputPerfil contenido="Nombre de usuario" placeholder="hola"type="text"/>
            </div>
            <div className="container-input">
            <InputPerfil contenido="Correo electronico" placeholder="hola"type="text"/>
            <InputPerfil contenido="Telefono" placeholder="hola" type="text"/>
            <InputPerfil contenido="Contraseña" placeholder="hola"type="password"/>
            </div>
        </div>
        <div className="miembros">
            <p className="title-miembros">Miembros</p>
            <div className="Scrol">
                <ProfailContainer/>
                <ProfailContainer/>
                <ProfailContainer/>
                <ProfailContainer/>
                <ProfailContainer/>
                <ProfailContainer/>
                
                
            </div>
            

        </div>
    </section>
    )
}

function InputPerfil({contenido, placeholder, type}){
    return(
        <div className="input-perfil">
            <p>{contenido}</p>
            <input  type={type} placeholder={placeholder} />
           
        </div>
    )
}

function ProfailContainer(){
    return(
        <div className="profile-card">
        <img src={img} alt="Profile Picture" className="profile-picture" />
        <div className="profile-details">
          <p className="profile-name">Omar Sinigar</p>
          <p className="profile-status">Offline</p>
        </div>
      </div>

    )
    
}


