import { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { eyeOutline, eyeOffOutline } from 'ionicons/icons';

export function InputPassword({typePassword, onKeyDown, value, onChange, className, name}){
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return(
        <div className="input-string-passwd">
            <div className="content-titles-passwd">
                <p>{typePassword}</p>
            </div>
            <input
                className={`passwd-auth ${className}`}
                type={showPassword ? 'text' : 'password'}
                value={value} 
                onKeyDown={onKeyDown}
                name={name}
                onChange={onChange}/>
             <IonIcon
                icon={showPassword ? eyeOffOutline : eyeOutline}
                onClick={togglePasswordVisibility}
                className="eye-icon"/>
        </div>
    )
}