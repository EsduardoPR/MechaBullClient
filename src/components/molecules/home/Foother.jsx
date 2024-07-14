import { useState } from "react";

import team from '../../../assets/img/team.svg'
import '../../../assets/styles/home/foother.css'


<link href="https://fonts.googleapis.com/css2?family=ABeeZee:ital@0;1&display=swap" rel="stylesheet"></link>;
<link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap" rel="stylesheet"></link>;

export function Foother({name}){
    const [isTrue, setIsTrue] = useState(true);


    return(
        <section className='foother'>
            <div className="foother-content-information">
                <div className='foother-title'>
                    <h3 className='title'>Contactanos</h3>
                </div>
                <div className='foother-title'>
                    <h3 className='title'>Blog</h3>
                </div>
                <div className='foother-title'>
                    <h3 className='title'>Licencia</h3>
                </div>
            </div>
                
            <div className='foother-team'>
                <p className="team">@ 2024, made with</p>
                <img src={team}/>
                <p className="name-team">MechaBull Team</p>
            </div>
        </section>
    )
}