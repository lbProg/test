import { io } from 'socket.io-client';
var socket;

socket = io.connect('http://localhost:3000');


console.log("sketch online");
