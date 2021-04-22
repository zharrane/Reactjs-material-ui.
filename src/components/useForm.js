import { makeStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react';

const useForm = (initiaFValue) => {
  const [values, setValues] = useState(initiaFValue);
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return {
    values,
    setValues,
    handleInputChange,
  };
};

const Form = (props) => {
  const classes = useStyles();
  return <form className={classes.root}>{props.children}</form>;
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}));
export { useForm, Form };
