import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Container, Box } from '@material-ui/core';
import AppBarContent from './AppBarContent';

const useStyles = makeStyles(
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

export default function SelectionBar(props: { children: React.ReactElement }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <React.Fragment>
        <AppBar>
          <Toolbar>
            <AppBarContent />
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Container>
          <Box my={2}>
            {props.children}
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
}


