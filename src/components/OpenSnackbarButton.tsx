import React, { SyntheticEvent } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CustomizedSnackbar, { SnackbarProps } from "./CustomizedSnackbar";

const useStyles = makeStyles((theme: Theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

interface OpenSnackbarButtonProps {
  children: React.ReactNode,
  color?: "inherit" | "primary" | "secondary" | "default",
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void),
  errorMessage?: string,
  infoMessage?: string,
  warnMessage?: string,
  successMessage?: string,
  variant: SnackbarProps["variant"],
  className?: string,
}

export default function OpenSnackbarButton(props: OpenSnackbarButtonProps) {
  const [state, setState] = React.useState<{
    open: boolean,
    variant: SnackbarProps["variant"],
  }>({
    open: false,
    variant: "info"
  });

  async function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (props.onClick === undefined) return;

    try {
      await props.onClick(event);
      setState({ open: true, variant: props.variant });
    } catch {
      setState({ open: true, variant: "error" });
    }
  }

  function handleClose(event?: SyntheticEvent, reason?: string) {
    if (reason === 'clickaway') {
      return;
    }

    setState({ open: false, variant: props.variant, });
  }

  const message = 
      state.variant === "error" ? props.errorMessage !== undefined ? props.errorMessage : "This is an error message!"
    : state.variant === "info" ? props.infoMessage !== undefined ? props.infoMessage : "This is an information message!"
    : state.variant === "success" ? props.successMessage !== undefined ? props.successMessage : "This is a success message!"
    : props.warnMessage !== undefined ? props.warnMessage : "This is a warning message!";

  return (
    <div className={props.className}>
      <Button
        variant="contained"
        // className={props.className}
        color={props.color}
        onClick={handleClick}>
        {props.children}
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={state.open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <CustomizedSnackbar
          onClose={handleClose}
          variant={state.variant}
          message={message}
        />
      </Snackbar>
    </div>
  );
}
