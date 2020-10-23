const server = require('http').createServer();
var mssql = require('mssql');

//conectar con SQL Server
mssql.connect("mssql://spark:spark@MXL30INBOWHD7Y2/SparkDB-IND");

//creo que es para configurar el socket.io
const io = require('socket.io')(server, {
    transports: ['websocket', 'polling']
});

//cuando haya una conexion con el servidor...
io.on('connection', client => {

    //console.dir("Nuevo cliente conectado")

    let status = true;

    //realizar funcion con un intervalo de 2000 milisegundos
    setInterval(() => {

        if (status) {
            
            //query que selecciona los primeros renglones más recientes según cada valor distinto en la columna "Variable"    
            mssql.query(`
            
                SELECT TOP 6 *
                FROM HydraDataL3
                WHERE Variable in ('Good', 'Cycle', 'RecovTime', 'PeakPrs', 'MCushion', 'InjTime')
                ORDER BY Time DESC
            
            `, function (err, result) {
                //funcion con dos parametros, en caso de error o devolver resultado
    
                //en caso de encontrar error
                if (err) { throw new Error('Failed'); }
    
                //el objeto resulto es un objeto de con 4 campos, 0-estructura, 1-datos, 2-tamaño, 3-celdas afectadas
                let data = [Object.values(result)[1]];
    
                //emitir el nombre del evento, listener
                client.emit('infoHydra', data);
                
                status = false;

            });
        
        }
    }, 2000);
});

//en el puerto
server.listen(4000);