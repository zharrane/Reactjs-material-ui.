import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Controls } from '../../components/controls/Controls';

import { useForm, Form } from '../../components/useForm';

/** */
const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
];
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
          <Controls.Input
            label="Full Name"
            name="fullname"
            value={values.fullname}
            onChange={handleInputChange}
          />
          <Controls.Input
            label="Email"
            value={values.email}
            name="email"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            value={values.gender}
            name="gender"
            label="Gender"
            onChange={handleInputChange}
            items={genderItems}
          />
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
