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
        direction="column"
        justify="space-around"
        alignItems="center">
        <RandomMainCard></RandomMainCard>
        <RandomSubCard></RandomSubCard>
        <RandomSpecialCard></RandomSpecialCard>
        <RandomMainWithOneChargerCard></RandomMainWithOneChargerCard>
        <RandomMainInCategoryCard></RandomMainInCategoryCard>
        <RandomMainInSpecificSubCard></RandomMainInSpecificSubCard>
        <GreetingFromTanimotoCard></GreetingFromTanimotoCard>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
