export function InputString({typeInput,placeholder}){
    return(
        <div className="input-string">
            <p>{typeInput}</p>
            <input type="text" placeholder={placeholder} />
        </div>
    )
}