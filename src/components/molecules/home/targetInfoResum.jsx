import { IonIcon } from "@ionic/react"
export function TargetInfoResum({icon, classIcon, msgTitle, resumen, msgDate, ultActualizacion, iconNoti, classIconNoti}){
    return(
        <div className="target-resum-bovino">
            <div className="part-up">
                <div className="content-image">
                    <IonIcon icon={icon} className={`icon ${classIcon}`}/>
                </div>
                <div className="info-resum">
                    <h4>{msgTitle}</h4>
                    <h2 className={resumen}>{msgDate}</h2>
                </div>
            </div>
            <div className="part-down">
                <IonIcon icon={iconNoti} className={`icon ${classIconNoti}`}/>
                <p>Ultima actualización: {ultActualizacion}</p>
            </div>
        </div>
    )
}