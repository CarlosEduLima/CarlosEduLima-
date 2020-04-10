import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import api from '../services/api';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: 20,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        height: 'auto',
        overflow: 'auto',
        display: 'flex',
        maxHeight: 280,
        background: 'white',
        borderRadius: 3,
    },

    row: {
        cursor: 'pointer',
        '&:hover': {
            background: "#ddd",
            transition: 'background 0.2s',
        },
    },
    head: {
        cursor: 'pointer',
        fontSize: 19,
        fontColor: "#2f4f4f",
        background: 'linear-gradient(to right, #6dd5ed, #2193b0)',
    },
    cell: {
        fontSize: 14,
        fontColor: "#2f4f4f",
        fontWeight:'bold',
    },
    title: {
        padding: theme.spacing(1),
        fontSize: 20,
        fontWeight: 'bold',
        fontColor: "#2f4f4f",
    }
}));

export default function DenseTable() {
    const classes = useStyles();
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        async function loadCountries() {
            const response = await api.get('/cases_by_country.php', api.headers);
            setCountries(response.data.countries_stat);
        }
        loadCountries();
    }, []);
    return (
        <>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead  className={classes.head}>
                        <TableRow className={classes.row}>
                            <TableCell className={classes.title}>País</TableCell>
                            <TableCell className={classes.title}>Total de casos</TableCell>
                            <TableCell className={classes.title}>Mortes</TableCell>
                            <TableCell className={classes.title}>Casos recuperados</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {countries.slice(1).map(country => (
                            <TableRow className={classes.row}>
                                <TableCell className={classes.cell}>{country.country_name}</TableCell>
                                <TableCell className={classes.cell}>{country.cases}</TableCell>
                                <TableCell className={classes.cell}>{country.deaths}</TableCell>
                                <TableCell className={classes.cell}>{country.total_recovered}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
