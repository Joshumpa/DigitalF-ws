<<<<<<< HEAD
const server = require('http').createServer();
var sql = require('mssql');

//conectar con SQL Server
let pool = sql.connect("mssql://spark:spark@MXL30DB100/SparkDB-IND");

sql.on('error', err => {
    console.log("Error!!!");
})

//creo que es para configurar el socket.io
const io = require('socket.io')(server, {
    transports: ['websocket', 'polling']
});

let c = 0;
//cuando haya una conexion con el servidor...
=======
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


>>>>>>> 693cfc13a8fa53b417db464c5df9985522dcdd56
io.on('connection', client => {

    //console.dir("Nuevo cliente conectado")

    let status = true

    //realizar funcion con un intervalo de 2000 milisegundos
    setInterval(() => {
<<<<<<< HEAD

        if (status) {

            status = false
            //query que selecciona los primeros renglones más recientes según cada valor distinto en la columna "Variable"
            new sql.Request().query(`
            
                SELECT TOP 6 *
                FROM HydraDataL3
                WHERE Variable in('Cycle','Good','PeakPrs','Mcushion','InjTime','Recovtime')
                ORDER BY Time DESC
            
            `, (err, result) => {
                //funcion con dos parametros, en caso de error o devolver resultado

                //en caso de encontrar error
                if (err) { throw new Error('Failed SQL'); }

                //el objeto resulto es un objeto de con 4 campos, 0-estructura, 1-datos, 2-tamaño, 3-celdas afectadas
                let data = Object.values(result)[1];
                //console.log(data[0].Value);

                //emitir el nombre del evento, listener
                client.emit('infoHydra', data);

                status = true

            });
        }


    }, 5000);
});

//en el puerto
server.listen(3000);
=======
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
>>>>>>> 693cfc13a8fa53b417db464c5df9985522dcdd56
