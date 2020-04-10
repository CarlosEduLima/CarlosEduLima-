import React from 'react';
import Chart from './Chart';
import Card from './Cart';
import Brazil from './Card';
import Table from './Table';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    text: {
        padding: theme.spacing(2),
        textAlign: 'center',
        fontSize:15,
        fontWeight:'bold'
    }
}));

export default function Dashboard() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Chart />
                </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={3}>
                <Grid item xs>
                    <Card />
                </Grid>
                <Grid item xs>
                    <Brazil />
                </Grid>
                <Grid item xs='auto' sm={'auto'}>
                    <Table />
                </Grid>

            </Grid>
            <Grid container spacing={3} className={classes.item}>
                <Grid item xs={12}>
                    <Typography className={classes.text}>Desenvolvido por 
                    <a href='https://github.com/CarlosEduLima'> CarlosEduLima</a></Typography>
                </Grid>
            </Grid>
        </div>
    );
}