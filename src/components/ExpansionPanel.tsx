import React from 'react';
import { Theme, createStyles, WithStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { TextField, Button, Link } from '@material-ui/core';
import WebhookTokenManager from '../logic/WebhookTokenManager';
import { TokenListContext } from '../contexts/contextContainer';
import { withStyles } from '@material-ui/styles';

const styles = (theme: Theme) => createStyles({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
  link: {
    marginLeft: "auto",
    marginTop: "auto",
    marginBottom: "auto",
    marginRight: theme.spacing(1),
  },
});


const manager = WebhookTokenManager.getInstance();

interface Props extends WithStyles<typeof styles> { }

interface State {
  name: string,
  webhookid: string,
  webhooktoken: string,
}

class SimpleExpansionPanel extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      name: "",
      webhookid: "",
      webhooktoken: "",
    };
  }

  render(): JSX.Element {
    const { classes } = this.props;

    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ name: event.target.value });
    }

    const onWebhookidChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ webhookid: event.target.value });
    }

    const onWebhooktokenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ webhooktoken: event.target.value });
    }

    return (
      <div className={classes.root} >
        <ExpansionPanel elevation={0}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>送信先を追加</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                id="webhook-name"
                label="名前"
                className={classes.textField}
                margin="normal"
                variant="standard"
                fullWidth
                onChange={onNameChange}
              />
              <TextField
                id="webhook-id"
                label="Webhook ID"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
                onChange={onWebhookidChange}
              />
              <TextField
                id="webhook-token"
                label="Webhook Token"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
                onChange={onWebhooktokenChange}
              />
              <Link
                component="a"
                className={classes.link}
                color="primary"
                href="https://google.com"
                target="_blank"
              >
                ヘルプ
            </Link>
              <TokenListContext.Consumer>
                {tokenListConsumer => {
                  const { name, webhookid, webhooktoken } = this.state;
                  const forceUpdate = this.forceUpdate;
                  const setState = this.setState;
                  const handleClick = () => {
                    manager.addNewToken(name, webhookid, webhooktoken);

                    this.state = {
                      name:"",
                      webhookid:"",
                      webhooktoken:"",
                    };
                    
                    this.forceUpdate();
                    tokenListConsumer.setTokenList(manager.getTokenList());
                  }

                  return (
                    <Button
                      className={classes.button}
                      variant="outlined"
                      color="primary"
                      onClick={handleClick}
                    >
                      追加
                    </Button>
                  );
                }}
              </TokenListContext.Consumer>
            </form>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(styles)(SimpleExpansionPanel);