import io from 'socket.io-client';
import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import JustGauge from 'justgage';

const socket = io('http://localhost:3000', {
    transports: ['websocket', 'polling']
});

let dflt = {
    pointer: true,
    pointerOptions: {
        toplength: -13,
        bottomlength: 10,
        bottomwidth: 12,
        color: '#8e8e93',
        stroke: '#ffffff',
        stroke_width: 3,
        stroke_linecap: 'round'
    },
    levelColors: [
        '#E60000',
        '#E6E600',
        '#00CC22'
    ],
    counter: true,
    gaugeWidthScale: 0.75,
    formatNumber: true,
    hideInnerShadow: true
}

var gg1 = new JustGage({
    height: 200,
    id: "gg1",
    value: 25.21,
    defaults: dflt,
    min: 0,
    max: 30,
    title: "Cycle",
    label: "Seconds",
});
var gg2 = new JustGage({
    id: "gg2",
    value: 2.62,
    defaults: dflt,
    min: 0,
    max: 4,
    title: "Recovery Time",
    label: "Seconds",
});
var gg3 = new JustGage({
    id: "gg3",
    value: 711.49,
    defaults: dflt,
    min: 0,
    max: 800,
    title: "Peak Pressure",
    label: "PSI",
});
var gg4 = new JustGage({
    id: "gg4",
    value: 0.60,
    defaults: dflt,
    min: 0,
    max: 1,
    title: "Cushion",
    label: "IN",
});
var gg5 = new JustGage({
    id: "gg5",
    value: 0.63,
    defaults: dflt,
    min: 0.00,
    max: 0.80,
    title: "Inyection Time",
    label: "Seconds",
});

const App = ({ }) => {

    let [data, setData] = useState([]);

    useEffect(() => {
        socket.on('infoHydra', data => {
            setData(data);
        });
    }, []);


    /* const columns = [
        { Header: 'Time', accessor: 'Time' },
        { Header: 'Spark', accessor: 'Spark' },
        { Header: 'Machine', accessor: 'Machine' },
        { Header: 'Variable', accessor: 'Variable' },
        { Header: 'Value', accessor: 'Value' }
    ]*/

    if (data.length > 0) {
        data = data[0]
    }



    /* console.log(data);
    

    let value = 0;
    */

    if (typeof data[0] !== 'undefined') {
        let cycle = data.find(element => element.Variable === 'Cycle');
        gg1.refresh(cycle.Value);
        //console.log(cycle.Value)
    }

    return (

        <div>

            {/* <ReactTable
                data={data}
                columns={columns}
            /> */}



        </div>

    );
};

ReactDOM.render(<App />, document.getElementById('root'));