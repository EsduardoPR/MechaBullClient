import { UpContent } from "../../molecules/auths/upContent";

export default function ContentAllAuths({title, className, content}){
    return(
        <div className="div-content">
            <div className={`div-back ${className}`}/>
            <div className="div-front">
                <UpContent title={title}/>
                {content}
            </div>
        </div>
    )
}
