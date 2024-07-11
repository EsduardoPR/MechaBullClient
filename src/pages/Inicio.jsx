// Inicio.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useWebSocket } from '../components/services/userContext';
import { startGaming } from '../components/services/websocketActions';


export function Inicio() {
    const { ws } = useWebSocket();
    const navigate = useNavigate()
    const logout = () => {
        const closeReason = 'clientClose';
        ws.close(4000, closeReason);
        setTimeout(() =>{
            navigate('/')
        }, 100)
    };
    

    const handleStartGaming = () => {
        startGaming(ws);
    };


    return (
        <div>
            Inicio
            <button onClick={logout}>Cerrar sesión</button>
            <button onClick={handleStartGaming}>evento de ejemplo</button>
        </div>
    );
}
