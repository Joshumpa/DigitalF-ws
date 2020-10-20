
var mssql = require('mssql');

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
mssql.connect("mssql://spark:spark@MXL30INBOWHD7Y2/SparkDB-IND");

io.on('connection', (socket) => {
    console.log('a user connected');
    setInterval(() => {
        // Query 

        mssql.query("select top 3 * from HydraDataL3 where Variable='MCushion' ", function (err, result) {
            if (err) { throw new Error('Failed'); }
            var datos = [Object.values(result)[1]];
            client.emit('infoHydra', datos);
            let dato1 = datos[0][0]
            console.log(dato1);
            //console.log(datos)
        });
    }, 2000);
});

/*
io.on('connection', client => {
    setInterval(() => {
        // Query

        mssql.query("select top 3 * from HydraDataL3 where Variable='MCushion' ", function(err, result) {
            if(err) { throw new Error('Failed');}
            var datos = [Object.values(result)[1]];
            client.emit('infoHydra', datos);
            let dato1 = datos[0][0]
            console.log(dato1);
            //console.log(datos)
        });
    }, 2000);
});
*/
app.listen(3000);