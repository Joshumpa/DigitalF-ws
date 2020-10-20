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
        socket.on('InfoHydra', data => {
            setData(data);
        });
    }, []);


    const columns = [
        { Header: 'Time', accessor: 'Time' },
        { Header: 'Spark', accessor: 'Spark' },
        { Header: 'Machine', accessor: 'Machine' },
        { Header: 'Variable', accessor: 'Variable' },
        { Header: 'Value', accessor: 'Vaiable' }
    ]

    //let dato1 = data.find(dato1 => data.nombr === "Maquina1");
    let dato1 = data[0];
    let value = 0;
    console.log(dato1);
    
    if (typeof dato1 !== 'undefined') {
        console.log(dato1['Value'])
        value = dato1['Value']
    }



    return (
        <div>

            <ReactTable
                data={data}
                columns={columns}
            />


            {/* <GaugeChart id="gauge-chart1"
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
            /> */}

        </div>

    );
};

ReactDOM.render(<App />, document.getElementById('root'));