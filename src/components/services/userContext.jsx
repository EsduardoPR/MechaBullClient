import React, { createContext, useState, useContext } from 'react';
import { handleWebSocketMessage } from './webSocketHandlers';
import Alert from './alerts';
const WebSocketContext = createContext();

export const WebSocketProvider = ({ children }) => {
    const [ws, setWs] = useState(null);
    const [alertMessage, setAlertMessage] = useState('');

    const establishWebSocketConnection = (token) => {
        const socket = new WebSocket(`ws://localhost:3000?token=${token}`);
        socket.onopen = () => {
            console.log('WebSocket connection established');
            setWs(socket);
        };

        socket.onmessage = (event) => handleWebSocketMessage(socket, event);

        socket.onclose = () => {
            console.log("Websocket Close")
            window.localStorage.removeItem('token');
            setAlertMessage('Sesión expirada, por favor inicia sesión!.');
        };

        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        return socket;
    };

    const handleCloseAlert = () => {
        setAlertMessage('');
        window.location.href = '/';
    };

    return (
        <WebSocketContext.Provider value={{ ws, establishWebSocketConnection }}>
            {children}
            {alertMessage && <Alert message={alertMessage} onClose={handleCloseAlert} />}
        </WebSocketContext.Provider>
    );
};

export const useWebSocket = () => useContext(WebSocketContext);
