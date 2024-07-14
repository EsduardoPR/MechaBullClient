import { useNavigate } from 'react-router-dom'
import Lost from '../assets/img/lost.svg'
import notFound from '../assets/img/not-found.gif'
import { Button } from '../components/molecules/auths/button'
export function NotFound(){
    const navigate = useNavigate()
    const returt = () => {
        navigate('/')
    }
    return(
        <section className='section-notfound'>
            <div className='notfound-lost'>
                <img src={Lost} alt="" />
            </div>
            <div className='notfound-contenido'>
                <img src={notFound}/>
                <h1>404.</h1>
                <h2>Hola, estas perdido?</h2>
                <h2>La página que estás buscando no se encuentra disponible.</h2>
                <Button className={'notfound-button'} onClick={returt} typeButton={'Volver a inicio'}/>
            </div>
        </section>
    )
}