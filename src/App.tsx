import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import { createMuiTheme, BottomNavigation, BottomNavigationAction, Container } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import SelectionBar from "./components/SelectionBar";
import CardsPage from './pages/CardsPage';
import TuneIcon from "@material-ui/icons/Tune";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import SelectablePage from "./pages/SelectablePage";

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

const useStyles = makeStyles({
  navigation: {
    width: "100%",
    backgroundColor: outerTheme.palette.background.default,
    position: "fixed",
    bottom: 0,
    zIndex: 99,
  },
  navigationAction: {
    maxWidth: "50%",
  },
  spacing: {
    height: outerTheme.spacing(7),
  }
});

const App = () => {
  const classes = useStyles();
  const [navistate, setNavistate] = React.useState(0);

  return (
    <ThemeProvider theme={outerTheme}>
      <SelectionBar>
        <Container>
          {[
            <CardsPage />,
            <SelectablePage />,
          ][navistate]}
          <div className={classes.spacing} />
        </Container>
      </SelectionBar>
      <BottomNavigation
        className={classes.navigation}
        showLabels
        value={navistate}
        onChange={(_, newValue) => { setNavistate(newValue); }}>
        <BottomNavigationAction className={classes.navigationAction} label="ボタン押すだけ" icon={<TouchAppIcon />} />
        <BottomNavigationAction className={classes.navigationAction} label="全ブキ選択" icon={<TuneIcon />} />
      </BottomNavigation>
    </ThemeProvider>
  );
}

export default App;
