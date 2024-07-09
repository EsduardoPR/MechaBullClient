export const handleWebSocketMessage = (socket, event) => {
    const message = JSON.parse(event.data);
    
    switch (message.type) {
        case 'play':
            console.log(event.data.play)
            break;
        case 'type2':

            break;
        default:
            console.log('Unknown message type:', message.type);
    }
};

export const sendMessage = (socket, action, data) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ action, ...data }));
    } else {
        console.error('WebSocket is not open');
    }
};
