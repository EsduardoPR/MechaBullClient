import { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { eyeOutline, eyeOffOutline } from 'ionicons/icons';

export function InputPassword({typePassword}){
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return(
        <div className="input-string">
            <p>{typePassword}</p>
            <input
                type={showPassword ? 'text' : 'password'}
                placeholder="******" />
            <IonIcon 
                icon={showPassword ? eyeOffOutline : eyeOutline}
                onClick={togglePasswordVisibility}
                className="eye-icon"/>
        </div>
    )
}