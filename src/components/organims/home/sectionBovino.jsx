import '../../../assets/styles/home/bovino.css'
import MyChart from '../../molecules/home/MyChart'
import StepsComparisonChart from '../../molecules/home/StepsComparisonChart'

const data = [
    { day: 'Día 1', cowSteps: 12000, herdSteps: 2000 },
    { day: 'Día 2', cowSteps: 11000, herdSteps: 82000 },
    { day: 'Día 3', cowSteps: 11500, herdSteps: 85000 },
    { day: 'Día 4', cowSteps: 10500, herdSteps: 83000 },
    { day: 'Día 5', cowSteps: 12500, herdSteps: 86000 },
    { day: 'Día 6', cowSteps: 11800, herdSteps: 84000 },
    { day: 'Día 7', cowSteps: 13000, herdSteps: 87000 }
  ];


import vaca from '../../../assets/img/bovino1.svg'
export function SectionBovino({Name, Siniga, Edad}){
    return(
        <section>
            <div className='p1'>
                <div className='info-bovino'>
                    <div>
                        <img src={vaca}  />
                        
                    </div>
                    <div className='container-info'>
                    <h1>{Name}</h1>
                       
                        <div className='info'>
                            <div className='siniga'>
                            <p>Siniga:</p>
                            <p>{Siniga}</p>
                            </div>
                            <div className='edad'>
                            <p>Edad:</p>
                            <p>{Edad}</p>
                            </div>                       
                        </div>
                    </div>

                </div>
            </div>
            <div className='p2'>
                <div className='Container-grafica'>
                    <div className='title-grafica'>
                    <p className='Title'>Latidos por minutos</p>
                    <p className='Subtitile'>Promedio del dia</p>
                    </div>
                    <div>
                    <MyChart/>
                    </div>
                    <div className='Fotter-grafica'>
                    <p className='ua'>Ultima Actualizacion:</p>
                    <p>fecha actualizacion</p>
                    </div>   
                </div>
                <div className='Container-grafica'>
                    <div className='title-grafica'>
                    <p className='Title'>Latidos por minutos</p>
                    <p className='Subtitile'>Promedio del dia</p>
                    </div>
                    <div>
                    <StepsComparisonChart data={data} />
                    </div>
                    <div className='Fotter-grafica'>
                    <p className='ua'>Ultima Actualizacion:</p>
                    <p>fecha actualizacion</p>
                    </div>   
                </div>
                
            </div>
            <div className='p3'>
            <div className='Container-mapa'>
                    <div className='title-Mapa'>
                    <p className='Title'>Mapa</p>
                    
                    </div>
                    <div className='box-Mapa'>
                        <div className='Mapa'><p>Mapa</p></div>
                        <div className='horarios'>
                            <p className='Horario'>Horarios</p>
                            <div className='Scrol'>
                                <div className='time'><p>bjbjhhbj</p></div>
                                <div className='time'><p>bjbjhhbj</p></div>
                                <div className='time'><p>bjbjhhbj</p></div>
                                <div className='time'><p>bjbjhhbj</p></div>
                                <div className='time'><p>bjbjhhbj</p></div>
                                <div className='time'><p>bjbjhhbj</p></div>
                                
                                <div className='time'><p>bjbjhhbj</p></div>

                            </div>

                        </div>
                        
                    </div>
                    <div className='Fotter-Mapa'>
                    <p className='ua'>Ultima Actualizacion:</p>
                    <p>fecha actualizacion</p>
                    </div>   
                </div>

            </div>

            <h1>hola</h1>

        </section>
    )
}