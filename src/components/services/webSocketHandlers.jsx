export const handleWebSocketMessage = (event) => {  
    const message = JSON.parse(event.data);
    switch (message.event) {
        case 'updateListBovinos':
            console.log("regreso de info en base a lo que hayamos modificado")
            break;
        default:
            console.log('Unknown message type:', message.type);
    }
};

