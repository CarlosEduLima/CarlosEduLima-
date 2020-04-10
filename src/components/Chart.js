import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import api from '../services/api';
import CanvasJSReact from '../lib/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const useStyles = makeStyles({
    root: {
        marginTop: 20,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
});
function Chart() {
    const classes = useStyles();
    const [stat, setStat] = useState([]);
    const [load, setLoad] = useState(false);
    useEffect(() => {
        async function loadCountries() {
            const response = await api.get('/cases_by_country.php', api.headers);
            setStat(response.data.countries_stat);
            setLoad(true);
        }
        loadCountries();
    }, []);

    const options = {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Países com maior número de casos",  
            fontColor: "#2f4f4f",
            fontSize: 28,
            padding: 10,
            margin: 15,
            fontWeight: "bold"
          
        },
        axisY: {
            title: "Numero de casos",
            includeZero: true
        },
        axisX: {
            title: "Países"
        },

        data: [{
            type: "column",
            yValueFormatString: "#,##0.##",
            dataPoints: stat.slice(1, 10).map(datas => {    
                    return({ label: datas.country_name, y: parseFloat(datas.cases) * 1000})
            })
        }]

    }
    console.log(stat);
    return (!load ? <CircularProgress /> :
        <div className={classes.root}>
            <CanvasJSChart options={options} />
        </div>


    );
}

export default Chart;