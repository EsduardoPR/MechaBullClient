/*import { setSession } from "./dataService";

export function ConnectionWS() {
    const token = sessionStorage.getItem('token');
    const socket = new WebSocket(`ws://localhost:3000?token=${token}`);
    socket.onopen = () => {
        console.log("Cliente conectado al servidor");
    };
    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        switch (data.event) {
            case 'token-expired':
                console.log('El token ha expirado. Debes volver a autenticarte.');
                sessionStorage.removeItem('username');
                sessionStorage.removeItem('permission');
                sessionStorage.removeItem('token');
            case 'connect':
                setSession(data.data);
                break;
            default:
                break;
        }
    };

    socket.onerror = () => {
        console.error('WebSocket error');
    };

    socket.onclose = () => {
        console.log('WebSocket connection closed');
        // console.log("Reconectando...");
    };
}*/


