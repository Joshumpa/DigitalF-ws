import io from 'socket.io-client';
import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'

import GaugeChart from 'react-gauge-chart'

//import GaugeChart from 'react-gauge-chart'

const socket = io('http://localhost:3000', {
    transports: ['websocket', 'polling']
});
const App = ({ }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        socket.on('rnddata', data => {
            setData([data]);
        });
    }, []);


    const columns = [
        { Header: 'Nombre', accessor: 'nombr' },
        { Header: 'Temperatura', accessor: 'specs.temp' },
        { Header: 'Presion', accessor: 'specs.pres' }
    ]

    return (
        <div>

            <ReactTable
                data={data}
                columns={columns}
            />


        </div>
        
    );
};

ReactDOM.render(<App />, document.getElementById('root'));