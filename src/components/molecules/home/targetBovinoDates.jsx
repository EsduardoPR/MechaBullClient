import bovinoOne from '../../../assets/img/bovino1.svg'
export function TargetBovinoDates({name, siniga, edad}){
    return(
        <div className='target-bovino-dates'>
            <div className="target-img">
                <img src={bovinoOne}/>
            </div>
            <div className='target-informacion'>
                <h2>{name}</h2>
                <div className='content-sin-eda'>
                    <div className='infoSiniga'>
                        <h4>siniga:</h4>
                        <h3>{siniga}</h3>
                    </div>
                    <div className='infoEdad'>
                        <h4>edad:</h4>
                        <h3>{edad}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}