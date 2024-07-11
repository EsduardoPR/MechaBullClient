import React, { createContext, useState, useContext, useEffect } from 'react';
import { handleWebSocketMessage } from './webSocketHandlers';
import Alert from './alerts';
const WebSocketContext = createContext();

export const WebSocketProvider = ({ children }) => {
    const [ws, setWs] = useState(null);
    const [alertMessage, setAlertMessage] = useState('');



    useEffect(() => {
        const token = window.localStorage.getItem('token');
        if (token && !ws) {
            establishWebSocketConnection(token);
        }
        return () => {
            if (ws) {
                ws.close();
            }
        };
    }, [ws]);



    const establishWebSocketConnection = () => {
        if (ws) {
            ws.close();
        }

        const socket = new WebSocket(`ws://localhost:3030`);
        const token = window.localStorage.getItem('token')
        socket.onopen = () => {
            socket.send(JSON.stringify({ type: 'auth', token })); 
            console.log('Connection WebSocket Client Verify');
        }
            
        //socket.onmessage = (event) => handleWebSocketMessage(socket, event);
        socket.onmessage = (message) => {
        const data = JSON.parse(message.data);
            if(data.event === 'token-expired'){
                setAlertMessage('Sesión expirada, por favor inicia sesión!.');
                socket.close()
            }
        };
    
        socket.onclose = (code, reason) => {
            console.log("Websocket Close")
            window.localStorage.removeItem('token');
            if (code.code === 4000 && code.reason === 'clientClose') {
                console.log("el usuario cerro la sesion")
                setAlertMessage('')
            }
        };

        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };
      

        setWs(socket)
    };

    const handleCloseAlert = () => {
        setAlertMessage('');
        window.location.href = '/';
    };

    return (
        <WebSocketContext.Provider value={{ ws, establishWebSocketConnection }}>
            {children}
            {alertMessage !== '' && <Alert message={alertMessage} onClose={handleCloseAlert} />}
        </WebSocketContext.Provider>
    );
};

export const useWebSocket = () => useContext(WebSocketContext);
