import JustGauge from 'justgage';

export const createGauge = (properties) => {

    //id = ariable, value, title = variable, label = measure, max, min, not- satisfactory
    let gauge = JustGage({
        id: properties.Variable,
        value: properties.Value,
        min: 0,
        max: properties.Max,
        title: properties.Variable,
        label: properties.Measure,
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
        customSectors: {
            ranges: [{
              color : '#00CC22',
              lo : properties.Min,
              hi : properties.Max
            },
            {
              color : '#E6E600',
              lo : properties.Min,
              hi : properties.NotSat,
            },
            {
              color : '#E60000',
              lo : properties.NotSat,
              hi : 0,
            }]
          },
        counter: true,
        gaugeWidthScale: 0.75,
        formatNumber: true,
        hideInnerShadow: true
    }); 
    
    return gauge

}


    /* const columns = [
        { Header: 'Time', accessor: 'Time' },
        { Header: 'Spark', accessor: 'Spark' },
        { Header: 'Machine', accessor: 'Machine' },
        { Header: 'Variable', accessor: 'Variable' },
        { Header: 'Value', accessor: 'Value' }
    ]*/