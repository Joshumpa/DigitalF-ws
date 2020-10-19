var express = require('express');
var app = express();

var sql = require('mssql');

sql.connect("mssql://spark:spark@MXL30INBOWHD7Y2/SparkDB-IND").then(function () {
    // Query 
    new sql.Request().query('select * from HydraDataL3_Catalog').then(function (recordset) {
        console.dir(recordset);
    }).catch(function (err) {
        console.dir("Error, Query no estructurada correctamente")
    });
});


/*const io = require('socket.io')(server, {
    transports: ['websocket', 'polling']
});


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
            }, {
                nombr: "Maquina 3",
                d1: randomInt(0, 100),
                d2: randomInt(0, 100),
            }, {
                nombr: "Maquina 4",
                d1: randomInt(0, 100),
                d2: randomInt(0, 100),
            }

        ]);
    }, 2000);
});

server.listen(3000);*/