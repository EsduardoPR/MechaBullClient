export function InputString({className, onKeyDown, typeInput, placeholder, value, onChange, name}){
    return(
        <div className="input-string">
            <div className="content-titles">
                <p>{typeInput}</p>
            </div>
            <input onKeyDown={onKeyDown} className={`inputs-auth ${className}`} type="text" placeholder={placeholder} value={value} onChange={onChange} name={name}/>
        </div>
    )
}