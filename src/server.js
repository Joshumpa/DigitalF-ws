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

let c=0;
//cuando haya una conexion con el servidor...
io.on('connection', client => {

    //console.dir("Nuevo cliente conectado")

    let status = true;

    //realizar funcion con un intervalo de 2000 milisegundos
    setInterval(() => {

        if (status) {

            status = false;

            //query que selecciona los primeros renglones más recientes según cada valor distinto en la columna "Variable"

            new sql.Request().query(`
            
                SELECT TOP 6 Time, A.Machine, A.Variable, A.Value, Target, B.Max, B.Min, Measure, NotSat 
                FROM HydraDataL3 AS A LEFT JOIN HydraDataL3_Catalog AS B
                ON A.Variable=B.Variable AND A.Machine=B.Machine 
                WHERE Time LIKE(SELECT TOP 1 MAX(Time)AS Time FROM HydraDataL3)
                AND A.Variable in('Cycle','Good','PeakPrs','Mcushion','InjTime','Recovtime')
            
            `, (err, result) => {
                //funcion con dos parametros, en caso de error o devolver resultado

                //en caso de encontrar error
                if (err) { throw new Error('Failed SQL'); }

                //el objeto resulto es un objeto de con 4 campos, 0-estructura, 1-datos, 2-tamaño, 3-celdas afectadas
                let data = Object.values(result)[1];

                //emitir el nombre del evento, listener
                client.emit('infoHydra', data);

                status = true;

            });

        }
    }, 7000);
});

//en el puerto
server.listen(3000);