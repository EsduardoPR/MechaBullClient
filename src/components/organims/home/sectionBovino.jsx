import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import L from 'leaflet'

import { Header } from '../../molecules/home/header';
import { Foother } from '../../molecules/home/Foother';
import '../../../assets/styles/home/bovino.css'
import MyChart from '../../molecules/home/MyChart'
import StepsComparisonChart from '../../molecules/home/StepsComparisonChart'



import vaca from '../../../assets/img/bovino1.svg'
export function SectionBovino(){
    const data = [
        { day: 'Día 1', cowSteps: 12000, herdSteps: 2000 },
        { day: 'Día 2', cowSteps: 11000, herdSteps: 82000 },
        { day: 'Día 3', cowSteps: 11500, herdSteps: 85000 },
        { day: 'Día 4', cowSteps: 10500, herdSteps: 83000 },
        { day: 'Día 5', cowSteps: 12500, herdSteps: 86000 },
        { day: 'Día 6', cowSteps: 11800, herdSteps: 84000 },
        { day: 'Día 7', cowSteps: 13000, herdSteps: 87000 }
      ];
    const [bovino, setBovino] = useState(null);
    const token = window.localStorage.getItem('token')
    const { id } = useParams();



    const [map, setMap] = useState(null); 



    useEffect(() => {
        const getBovino = async() =>{
            try {
                const response = await axios.post('http://localhost:3000/api/bovinos/get-for-id', {
                    id,
                    token
                });
                setBovino(response.data);
            } catch (error) {
                console.log(error)
                if (error.response && error.response.data && error.response.data.message) {
                    console.log(error.response)
                } else {
                    console.log('Error desconocido al hacer get de bovinos');
                    console.log(error)
                }
            }
        }
        getBovino()
    }, [id]);

    useEffect(() =>{
        //console.log(bovino)
    },[bovino])



    useEffect(() => {
        const mapa = document.getElementById('map');
        if (mapa) {
            const newMap = L.map(mapa).setView([16.6206955, -93.0973647], 14);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(newMap);
            setMap(newMap);
        }
        return () => {
            if (map && map.remove) {
                map.remove(); 
            }
        };
    }, [bovino]);
  
    // Función para agregar un marcador al mapa
    const posicionesCercanas = [
        { lat: 16.6237048, lng: -93.1022265 },
        { lat: 16.6213991, lng: -93.0995188 },
    ];

    useEffect(() => {
        const agregarMarcador = () => {
            if (map) {
                let count = 0;
                const maxCount = 5;
                const interval = setInterval(() => {
                  if (count >= maxCount) {
                    clearInterval(interval);
                    return;
                  }
                  
                  for (let i = 0; i < posicionesCercanas.length; i++) {
                    setTimeout(() => {
                      const { lat, lng } = posicionesCercanas[i];
                      const maker = L.marker([lat, lng]).addTo(map);
                      setTimeout(() => {
                        map.removeLayer(maker);
                      }, 2000);
                    }, i * 2000); // Esperar 2 segundos por cada iteración
                  }
                  
                  count++;
                }, 4000);
            }
        }
        agregarMarcador()
      }, [map]);

    return(
        bovino  && (
            <section className='section-page-bovino'>
                <Header />
                <div className='p1'>
                    <div className='info-bovino'>
                        <div>
                            <img src={vaca}  />
                        </div>
                        <div className='container-info'>
                            <h1>{bovino.name}</h1>
                            <div className='info'>
                                <div className='siniga'>
                                    <p>Siniga:</p>
                                    <p>{bovino.siniga}</p>
                                </div>
                                <div className='edad'>
                                    <p>Edad:</p>
                                    <p>{bovino.age}</p>
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
                        <div className='div-mychart'>
                            <MyChart/>
                        </div>
                        <div className='Fotter-grafica'>
                            <p className='ua'>Ultima Actualización:</p>
                            <p>fecha actualizacion</p>
                        </div>   
                    </div>
                    <div className='Container-grafica'>
                        <div className='title-grafica'>
                            <p className='Title'>Latidos por minutos</p>
                            <p className='Subtitile'>Promedio del dia</p>
                        </div>
                        <div>
                           {/*<StepsComparisonChart/>*/}
                        </div>
                        <div className='Fotter-grafica'>
                            <p className='ua'>Ultima Actualización:</p>
                            <p>fecha actualizacion</p>
                        </div>   
                    </div>
                    
                </div>
                <div className='p3'>
                    <div className='content-title-map'>
                        <p className='Title'>Mapa</p>
                    </div>
                    <div className='box-Mapa'>
                        <div id='map' className='mapa'></div>
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
                <Foother/>
            </section>
        )

    )
}