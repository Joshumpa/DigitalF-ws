import io from 'socket.io-client';
import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'

import GaugeChart from 'react-gauge-chart'

const socket = io('http://localhost:3000', {
    transports: ['websocket', 'polling']
});

const App = ({ }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        socket.on('rnddata', data => {
            setData(data);
        });
    }, []);


    const columns = [
        { Header: 'Nombre', accessor: 'nombr' },
        { Header: 'Dato1', accessor: 'd1' },
        { Header: 'Dato2', accessor: 'd2' }
    ]

    //let dato1 = data.find(dato1 => data.nombr === "Maquina1");
    let dato1 = data[0];
    let d1 = 0, d2 = 0;
    //console.log(dato1);
    if (typeof dato1 !== 'undefined') {
        //console.log(dato1['d1'])
        d1 = (dato1['d1']) / 100;
        d2 = (dato1['d2']) / 100;
    }



    return (
        <div>

            <ReactTable
                data={data}
                columns={columns}
            />

            <GaugeChart id="gauge-chart1"
                textColor="#000000"
                arcsLength={[0.3, 0.5, 0.2]}
                colors={["#FF5F6D", "green"]}
                arcWidth={0.2}
                percent={d1}
            />
            <GaugeChart id="gauge-chart2"
                textColor="#000000"
                nrOfLevels={20}
                colors={["#FF5F6D", "green"]}
                arcWidth={0.25}
                arcPadding={0.02}
                percent={d2}
            />

        </div>

    );
};

ReactDOM.render(<App />, document.getElementById('root'));