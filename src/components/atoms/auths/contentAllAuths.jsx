import { useRef, useEffect } from "react";
import { UpContent } from "../../molecules/auths/upContent";
import '../../../assets/styles/auths/atoms.css'

export default function ContentAllAuths({title, className, content}){
    const frontRef = useRef(null);
    const backRef = useRef(null);

    useEffect(() => {
        function adjustBackHeight() {
            if (frontRef.current && backRef.current) {
                const frontHeight = frontRef.current.offsetHeight;
                backRef.current.style.height = `${frontHeight + 10}px`;
            }
        }

        adjustBackHeight();
        window.addEventListener('resize', adjustBackHeight);

        return () => {
            window.removeEventListener('resize', adjustBackHeight);
        };
    }, []);
    return(
        <div className="div-content">
            <div ref={backRef} className={`div-back ${className}`} />
            <div ref={frontRef} className="div-front">
                <UpContent title={title} />
                {content}
            </div>
        </div>
    )
}
