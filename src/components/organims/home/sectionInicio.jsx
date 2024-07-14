import { HeaderSuperior } from '../../molecules/home/headerSuperior'
import { Foother } from '../../molecules/home/Foother';
import { Button } from '../../molecules/home/button'

import '../../../assets/styles/home/inicio.css'

export function SectionInicio(){
    const bovinos = [
        { id: 1, nombre: 'Juan adnbasvdvahsgvadvahsgv', siniga: '1223-ERR', edad: 12, lpm: '12/m', promedioPasos: '120 p' },
        { id: 1, nombre: 'Juan', siniga: '1223-ERR', edad: 12, lpm: '12/m', promedioPasos: '120 p' },
        { id: 1, nombre: 'Juan', siniga: '1223-ERR', edad: 12, lpm: '12/m', promedioPasos: '120 p' },
        { id: 1, nombre: 'Juan', siniga: '1223-ERR', edad: 12, lpm: '12/m', promedioPasos: '120 p' },
        { id: 1, nombre: 'Juan', siniga: '1223-ERR', edad: 12, lpm: '12/m', promedioPasos: '120 p' },
        { id: 1, nombre: 'Juan', siniga: '1223-ERR', edad: 12, lpm: '12/m', promedioPasos: '120 p' },
        { id: 1, nombre: 'Juan', siniga: '1223-ERR', edad: 12, lpm: '12/m', promedioPasos: '120 p' },
        { id: 1, nombre: 'Juan', siniga: '1223-ERR', edad: 12, lpm: '12/m', promedioPasos: '120 p' },
        { id: 1, nombre: 'Juan', siniga: '1223-ERR', edad: 12, lpm: '12/m', promedioPasos: '120 p' },
    ];

    const hola = () => {
        console.log("hola")
    }
    return(
    <section className="section-inicio">
        <HeaderSuperior name={"Inicio"}/>
        <div className="table-container">
            <div className="table">
                <div className="header-lista">
                    <div className="title-lista">
                        <h1>Lista Bovinos</h1>
                        <p>Datos</p>
                    </div>
                    <div>
                        <Button className={'button-inicio-añadir'} onClick={hola} typeButton={'Añadir'}/>
                    </div>
                </div>
                <div className='content-table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Siniga</th>
                                <th>Nombre</th>
                                <th>Edad</th>
                                <th>Lpm</th>
                                <th>Promedio de pasos</th>
                            </tr>
                        </thead>
                        <tbody className="scroll-tbody">
                            {bovinos.map((bovino, index) => (
                                <tr key={index}>
                                    <td>{bovino.siniga}</td>
                                    <td>{bovino.nombre}</td>
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
        <Foother/>
    </section>
    )
}