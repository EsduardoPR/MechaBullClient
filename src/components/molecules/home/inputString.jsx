export function InputString({typeInput, onKeyDown, type, className , placeholder, value, onChange, name}){
    return(
        <div className="content-input-bovino">
            <div className="content-title">
                <p>{typeInput}</p>
            </div>
            <input 
                onKeyDown={onKeyDown} className={`input-bovino ${className}`} 
                type={type} placeholder={placeholder} value={value} onChange={onChange} 
                name={name}/>
        </div>
    )
}