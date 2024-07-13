import { Header } from "../../molecules/auths/header"
import '../../../assets/styles/auths/inicio.css'



export function SectionInicio(){

    const bovinos = [
        { id: 1, nombre: 'Juan adnbasvdvahsgvadvahsgv', siniga: '1223-ERR', edad: 12, lpm: '12/m', promedioPasos: '120 p' },
        { id: 1, nombre: 'Juan', siniga: '1223-ERR', edad: 12, lpm: '12/m', promedioPasos: '120 p' },
        { id: 1, nombre: 'Juan', siniga: '1223-ERR', edad: 12, lpm: '12/m', promedioPasos: '120 p' },
        { id: 1, nombre: 'Juan', siniga: '1223-ERR', edad: 12, lpm: '12/m', promedioPasos: '120 p' },
        { id: 1, nombre: 'Juan', siniga: '1223-ERR', edad: 12, lpm: '12/m', promedioPasos: '120 p' },
        { id: 1, nombre: 'Juan', siniga: '1223-ERR', edad: 12, lpm: '12/m', promedioPasos: '120 p' },
      ];

    return(
    <section className="inicio">
      <div>
        <Header
        name={"Inicio"}/>
      </div>

      <div className="table-container">
        <div className="table">
            <div className="Header-Lista">
                <div className="Title-Lista">
                <h1>lista Bovinos</h1>
                <p>Datos</p>
                </div>
                <div>
                    <button>Añadir</button>
                </div>
            
            </div>
            <div>
            <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Siniga</th>
            <th>Edad</th>
            <th>Lpm</th>
            <th>Promedio de pasos</th>
          </tr>
        </thead>
        <tbody className="scroll-tbody">
          {bovinos.map((bovino, index) => (
           
            <tr key={index}>
              <td>{bovino.id}</td>
              <td>{bovino.nombre}</td>
              <td>{bovino.siniga}</td>
              <td>{bovino.edad}</td>
              <td>{bovino.lpm}</td>
              <td>{bovino.promedioPasos}</td>
            </tr>
           
          ))}
        </tbody>
        </table>
            </div>
            
        </div>

      
      </div>  
       <dir> <h1>Footer</h1></dir>
       
       </section>

    )
}

export function Lista() {
    return (
        <div className={div-lista}>
            <p className={style-lertras-lista}>{Info}</p>
        </div>
    )
}