import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import { DialogContent, DialogContentText } from '@material-ui/core';
import { amber, green, blue, red } from '@material-ui/core/colors';

const variantIcon = {
	success: CheckCircleIcon,
	warning: WarningIcon,
	error: ErrorIcon,
	info: InfoIcon,
};

const useStyles = makeStyles({
	success: {
    color: green[600],
  },
  error: {
    color: red[700],
  },
  info: {
    color: blue[700],
  },
  warning: {
    color: amber[700],
  },
});

interface Props {
	open: boolean,
	variant: keyof typeof variantIcon,
	resultMessage: string,
	onClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void,
}

export default function SendingResultDialog(props: Props) {
	const classes = useStyles();
	const { open, variant, resultMessage, onClose } = props;
	const Icon = variantIcon[variant];

	return (
		<Dialog onClose={onClose} aria-labelledby="sending-result-dialog" open={open}>
			<DialogTitle id="sending-result-dialog">
				送信結果
			</DialogTitle>
			<DialogContent>
				<DialogContentText id="sending-result-message">
				<Icon className={classes[variant]}/> {resultMessage}
				</DialogContentText>
			</DialogContent>
		</Dialog>
	);
}
