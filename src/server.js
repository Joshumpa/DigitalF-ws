const randomInt = require('random-int');
const server = require('http').createServer();

const io = require('socket.io')(server, {
    transports: ['websocket', 'polling']
});

let tick = 0;
// 1. listen for socket connections
io.on('connection', client => {
    setInterval(() => {
        client.emit('rnddata', data = [
            {
                nombr: "Maquina 1",
                d1: randomInt(0, 100),
                d2: randomInt(0, 100),
            },
            {
                nombr: "Maquina 2",
                d1: randomInt(0, 100),
                d2: randomInt(0, 100),
            },{
                nombr: "Maquina 3",
                d1: randomInt(0, 100),
                d2: randomInt(0, 100),
            },{
                nombr: "Maquina 4",
                d1: randomInt(0, 100),
                d2: randomInt(0, 100),
            }

        ]);
}, 2000);
});

server.listen(3000);