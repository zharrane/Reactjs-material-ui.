import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '0',
    margin: theme.spacing(0.5),
  },
  secondary: {
    backgroundColor: theme.palette.secondary.light,
    '& .MuiBytton-label': {
      color: theme.palette.secondary.main,
    },
  },
  primary: {
    backgroundColor: theme.palette.primary.light,
    '& .MuiBytton-label': {
      color: theme.palette.primary.main,
    },
  },
}));
const ActionButton = ({ color, children, onClick }) => {
  const classes = useStyles();
  return (
    <Button className={`${classes.root} ${classes[color]}`} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ActionButton;
