import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useWebSocket } from '../components/services/userContext';

export function Settings(){

    const { ws } = useWebSocket();
    const navigate = useNavigate()
    const logout = () => {
        const closeReason = 'clientClose';
        ws.close(4000, closeReason);
        setTimeout(() =>{
            navigate('/')
        }, 100)
    };
    
    return(
        <div>
            Inicio
            <button onClick={logout}>Cerrar sesión</button>
        </div>
    )
}