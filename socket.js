import { Server } from "socket.io";

const socket = {};

function connectSocket(server) {
    socket.io = new Server(server);
}

export { connectSocket };
export { socket };