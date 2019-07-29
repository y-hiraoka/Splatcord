import React from 'react';
import './App.css';
import RandomMainCard from "./cards/RandomMainCard";
import RandomSubCard from "./cards/RandomSubCard";
import RandomSpecialCard from "./cards/RandomSpecialCard";
import RandomMainInCategoryCard from "./cards/RandomMainInCategoryCard";
import GreetingFromTanimotoCard from "./cards/GreetingFromTanimotoCard";
import RandomMainWithOneChargerCard from "./cards/RandomMainWithOneChargerCard";
import RandomMainInSpecificSubCard from "./cards/RandomMainInSpecificSubCard";
import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#00e68e",
      contrastText: "#fff",
    },
    secondary: {
      main: purple[300],

    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={outerTheme}>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="flex-start"
        spacing={1}>
        <Grid item xs={12} sm={6} md={4} lg={3}><RandomMainCard /></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}><RandomSubCard /></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}><RandomSpecialCard /></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}><RandomMainWithOneChargerCard /></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}><RandomMainInCategoryCard /></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}><RandomMainInSpecificSubCard /></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}><GreetingFromTanimotoCard /></Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
