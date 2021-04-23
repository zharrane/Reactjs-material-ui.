import React from 'react';
import { withStyles } from '@material-ui/core';
const style = {
  sideMenu: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: '0',
    width: '150px',
    height: '100%',
    minHeight: '100%',
    backgroundColor: '#253053',
  },
};

// .side-menu {
//     display: flex;
//     flex-direction: column;
//     position: absolute;
//     left: 0;
//     width: 320px;
//     height: 100%;
//     background-color: #253053;
//   }

const SideMenu = (props) => {
  const { classes } = props;
  return <div className={classes.sideMenu}></div>;
};

export default withStyles(style)(SideMenu);
