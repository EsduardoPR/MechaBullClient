import logo from '../../../assets/img/logo.svg'
export function UpContent({title}){
    return(
        <div className='up-content'>
            <img src={logo}/>
            <h2>{title}</h2>
        </div>
    )
}