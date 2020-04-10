import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  nav:{
    background: 'linear-gradient(to right, #6dd5ed, #2193b0)',
    color:"#2f4f4f"
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.nav}>
        <Toolbar variant="dense">
          <Typography variant="h5" color="inherit">
            Rastreador do Covid-19 
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}