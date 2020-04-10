import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { makeStyles } from '@material-ui/core/styles';
import GlobalIcon from '../world.svg';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 20,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
    title: {
        padding: theme.spacing(1),
        fontSize: 20,
        fontColor: "#2f4f4f",
        fontWeight: 'bold',
        background: 'linear-gradient(to right, #6dd5ed, #2193b0)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        

    },
    subTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    },
    text: {
        fontSize: 14,
        marginBottom: 5,
        color: '#002776',
        fontWeight:'bold'
    },img:{
        with:20,
        height:15,
        marginTop: 5,
        marginLeft: 10,
    }
}));

export default function CardInfo() {
    const classes = useStyles();
    const [stat, setStat] = useState([]);
    useEffect(() => {
        async function loadCountries() {
            const response = await api.get('/worldstat.php', api.headers);
            setStat(response.data);
        };
        loadCountries();
    }, []);
    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <Typography className={classes.title}>Global
                    <img src={GlobalIcon} className={classes.img} alt='icone'/>
                    </Typography>
                   
                    <CardContent>
                        <Typography className={classes.subTitle}>
                            Casos Ativos
                        </Typography>
                        <Typography className={classes.text}>
                            {stat.total_cases}
                        </Typography>
                        <Typography className={classes.subTitle}>
                            Casos Fatais
                        </Typography>
                        <Typography className={classes.text}>
                            {stat.total_deaths}
                        </Typography>
                        <Typography className={classes.subTitle}>
                            Casos Reacuperados
                        </Typography>
                        <Typography className={classes.text}>
                            {stat.total_recovered}
                        </Typography>
                        <Typography className={classes.subTitle}>
                            Novos Casos
                        </Typography>
                        <Typography className={classes.text}>
                            {stat.new_cases}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Typography className={classes.text}>Atualizado - {stat.statistic_taken_at}</Typography>
                </CardActions>
            </Card>
        </>
    );
}