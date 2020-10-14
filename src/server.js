const randomInt = require('random-int');
const server = require('http').createServer();

const io = require('socket.io')(server, {
    transports: ['websocket', 'polling']
});

let tick = 0;
// 1. listen for socket connections
io.on('connection', client => {
    setInterval(() => {
        client.emit('rnddata', {

            nombr: "Maquina 1",
            specs: {
                temp: randomInt(0, 100),
                pres: randomInt(0, 100),
            },
            nombr: "Maquina 2",
            specs: {
                temp: randomInt(0, 100),
                pres: randomInt(0, 100),
            },
            nombr: "Maquina 3",
            specs: {
                temp: randomInt(0, 100),
                pres: randomInt(0, 100),
            }

        });
    }, 3000);
});

server.listen(3000);