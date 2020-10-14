const WebSocket = require('ws');
const randomInt = require('random-int');

const wss = new WebSocket.Server({ port: 8888 });

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

wss.on('connection', async (ws) => {
    ws.on('message', async (message) => {
        console.log(`${message}`);
    })
    while (true) {
        data = [
            {
                "nomb": "Maquina 1",
                "temp": randomInt(0, 100),
                "pres": randomInt(0, 100)
            },
            {
                "name": "Maquina 2",
                "temp": randomInt(0, 100),
                "pres": randomInt(0, 100)
            },
            {
                "name": "Maquina 3",
                "temp": randomInt(0, 100),
                "pres": randomInt(0, 100)
            },
            {
                "name": "Maquina 4",
                "temp": randomInt(0, 100),
                "pres": randomInt(0, 100)
            }
            
        ]
        await sleep(3000);
        ws.send(JSON.stringify(data));
    }
});