import React, { useEffect, useState } from 'react';
import api from '../services/api';
import BrasilIcon from '../brasil.svg';
import { makeStyles } from '@material-ui/core/styles';
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
        fontWeight: 'bold',
        fontColor: "#2f4f4f",
        alignContent: 'center',
        background: '#009C3B'

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
        fontWeight: 'bold'

    },
    img:{
        with:20,
        height:15,
        marginTop: 5,
        marginLeft: 10,
    }
}));


export default function CardInfoBr() {
    const classes = useStyles();
    const [brazil, setBrazil] = useState([]);
    useEffect(() => {
        async function loadBrazil() {
            const response = await api.get('/latest_stat_by_country.php?country=brazil', api.headers);
            setBrazil(response.data.latest_stat_by_country[0]);
        }
        loadBrazil();
    }, []);
    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <Typography className={classes.title}>Brasil
                    <img src={BrasilIcon} className={classes.img} alt='icone'/>
                    </Typography>
                    <CardContent>
                        <Typography className={classes.subTitle}>
                            Casos Ativos
                    </Typography>
                        <Typography className={classes.text}>
                            {brazil.total_cases}
                        </Typography>
                        <Typography className={classes.subTitle}>
                            Casos Fatais
                    </Typography>
                        <Typography className={classes.text}>
                            {brazil.total_deaths}
                        </Typography>
                        <Typography className={classes.subTitle}>
                            Casos Recuperados
                    </Typography>
                        <Typography className={classes.text}>
                            {brazil.total_recovered}
                        </Typography>
                        <Typography className={classes.subTitle}>
                            Novos Casos
                    </Typography>
                        <Typography className={classes.text}>
                            {brazil.new_cases}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Typography className={classes.text}>Atualizado - {brazil.record_date}</Typography>
                </CardActions>
            </Card>
        </>
    );
}