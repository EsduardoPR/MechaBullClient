// Inicio.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useWebSocket } from '../components/services/userContext';
import { startGaming } from '../components/services/websocketActions';

export function Inicio() {
    const navigate = useNavigate()
    const logout = () => {
        window.localStorage.removeItem('token');
        navigate('/')
    };


    const { ws } = useWebSocket();

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
