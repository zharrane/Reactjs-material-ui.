import {
  FormLabel,
  Grid,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Input from '../../components/controls/Input';
import { useForm, Form } from '../../components/useForm';

/** */
const initiaFValue = {
  id: 0,
  fullname: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmentId: '',
  hireDate: new Date(),
  isPerm: false,
};
const EmployeeForm = () => {
  const { values, setValues, handleInputChange } = useForm(initiaFValue);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Input
            label="Full Name"
            name="fullname"
            value={values.fullname}
            onChange={handleInputChange}
          />
          <Input
            label="Email"
            value={values.email}
            name="email"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              row
              value={values.gender}
              name="gender"
              onChange={handleInputChange}
            >
              <FormControlLabel value="male" control={<Radio />} label="male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="female"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
