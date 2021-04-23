import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

const useForm = (initiaFValue, validateOnChange = false, validation) => {
  const [values, setValues] = useState(initiaFValue);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) validation({ [name]: value });
  };

  const resetForm = () => {
    setValues(initiaFValue);
    setErrors({});
  };

  return {
    values,
    errors,
    setErrors,
    setValues,
    handleInputChange,
    resetForm,
  };
};

const Form = (props) => {
  const classes = useStyles();
  const { children, ...other } = props;
  return (
    <form className={classes.root} autoComplete="off" {...other}>
      {children}
    </form>
  );
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
