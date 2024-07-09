export function Button({onClick, typeButton, className}){
    return(
        <button className={className} onClick={onClick}>{typeButton}</button>
    )
}