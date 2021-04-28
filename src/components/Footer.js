import { BrowserRouter as Router, Link } from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100%',
    textAlign: 'center',
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      Copyright &copy; <a href="https://github.com/zharrane">Zharrane</a>
    </footer>
  );
};

export default Footer;
