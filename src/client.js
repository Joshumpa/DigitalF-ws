import io from 'socket.io-client';
import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
<<<<<<< HEAD
import JustGauge from 'justgage';
//import '../node_modules/react-canvas-gauges/dist/RadialGauge.js';
//import RadialGauge from 'canvas-gauges'
=======
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'

import GaugeChart from 'react-gauge-chart'
>>>>>>> 693cfc13a8fa53b417db464c5df9985522dcdd56

const socket = io('http://localhost:3000', {
    transports: ['websocket', 'polling']
});
<<<<<<< HEAD
=======

const App = ({ }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        socket.on('rnddata', data => {
            setData(data);
        });
    }, []);
>>>>>>> 693cfc13a8fa53b417db464c5df9985522dcdd56

function App() {

    const [data, setData] = useState([])
    let value = 0;
    //const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        //setIsLoading(true)
        socket.on('infoHydra', data => {
            setData(data)
        })
    });

    //console.log(data);

    if (data[0] !== undefined) {
        //console.log(value);
        gg1.refresh(data.find(obj => obj.Variable == "Cycle").Value);
        gg2.refresh(data.find(obj => obj.Variable == "InjTime").Value);
        gg3.refresh(data.find(obj => obj.Variable == "RecovTime").Value);
        gg4.refresh(data.find(obj => obj.Variable == "MCushion").Value);
        gg5.refresh(data.find(obj => obj.Variable == "PeakPrs").Value);
    }


    return (
        <div>
            {/* <RadialGauge
            units='Sec'
            title='Cycle'
            value={value}
            minValue={0}
            maxValue={50}
            majorTicks={['0', '5', '15', '20', '25', '30', '35', '40', '45', '50']}
            minorTicks={2}
        ></RadialGauge> */}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

//id = ariable, value, title = variable, label = measure, max, min, not- satisfactory
let dflt = {
    min: 0,
    humanFriendlyDecimal: 1,
    decimals: 2,
    pointer: true,
    pointerOptions: {
        toplength: -20,
        bottomlength: 10,
        bottomwidth: 20,
        color: '#8e8e93',
        stroke: '#ffffff',
        stroke_width: 5,
        stroke_linecap: 'round'
    },
    counter: false,
    gaugeWidthScale: 0.75,
    formatNumber: true,
    hideInnerShadow: true

}

let gg1 = new JustGauge({
    id: "gg1",
    value: 22,
    max: 25,
    title: "Cycle",
    label: "sec",
    defaults: dflt,
    customSectors: {
        ranges: [{
            color: '#00CC22',
            lo: 10,
            hi: 25
        },
        {
            color: '#E6E600',
            lo: 1,
            hi: 10,
        },
        {
            color: '#E60000',
            lo: 1,
            hi: 0,
        }]
    }
});
let gg2 = new JustGauge({
    id: "gg2",
    value: 0.40,
    max: 0.80,
    defaults: dflt,
    title: "Inyection Time",
    label: "sec",
    customSectors: {
        ranges: [{
            color: '#00CC22',
            lo: 0.20,
            hi: 0.80
        },
        {
            color: '#E6E600',
            lo: 0.15,
            hi: 0.20,
        },
        {
            color: '#E60000',
            lo: 0.15,
            hi: 0,
        }]
    }
});
let gg3 = new JustGauge({
    id: "gg3",
    value: 1.50,
    max: 2.0,
    defaults: dflt,
    title: "Recovery Time",
    label: "sec",
    customSectors: {
        ranges: [{
            color: '#00CC22',
            lo: 1.0,
            hi: 2.0
        },
        {
            color: '#E6E600',
            lo: 0.5,
            hi: 1,
        },
        {
            color: '#E60000',
            lo: 0.5,
            hi: 0,
        }]
    }
});
let gg4 = new JustGauge({
    id: "gg4",
    value: 0.70,
    max: 1.00,
    defaults: dflt,
    title: "Cushion",
    label: "in",
    customSectors: {
        ranges: [{
            color: '#00CC22',
            lo: 0.50,
            hi: 1.00
        },
        {
            color: '#E6E600',
            lo: 0.25,
            hi: .50
        },
        {
            color: '#E60000',
            lo: 0.5,
            hi: 0,
        }]
    }
});
let gg5 = new JustGauge({
    id: "gg5",
    value: 500,
    max: 800,
    defaults: dflt,
    title: "Peak Presure",
    label: "psi",
    customSectors: {
        ranges: [{
            color: '#00CC22',
            lo: 300,
            hi: 800
        },
        {
            color: '#E6E600',
            lo: 299,
            hi: 300
        },
        {
            color: '#E60000',
            lo: 299,
            hi: 0,
        }]
    }
}); 