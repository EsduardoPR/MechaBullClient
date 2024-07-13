import { useRef, useEffect } from "react";
import { UpContent } from "../../molecules/auths/upContent";
import '../../../assets/styles/auths/atoms.css'

export default function ContentAllAuths({title, content}){
    const frontRef = useRef(null);

    return(
        <div className="div-content">
            <div ref={frontRef} className="div-front">
                <UpContent title={title} />
                {content}
            </div>
        </div>
    )
}
