import { sendMessage } from './webSocketHandlers';

export const startGaming = (socket) => {
    sendMessage(socket, 'play', { /* data */ });
};

export const anotherAction = (socket) => {
    sendMessage(socket, 'anotherAction', { /* data */ });
};
