import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Controls } from '../../components/controls/Controls';
import { useForm, Form } from '../../components/useForm';
import * as EmployeeServices from '../../services/EmployeeService';
import { DEPARTMENTS } from '../../constants/constants';
/** Gender*/
const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
];
/** Departmen*/

/** Form intial values*/
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
const EmployeeForm = ({ addOrEdit, recordForEdit }) => {
  useEffect(() => {
    if (recordForEdit !== null) setValues({ ...recordForEdit });
  }, [recordForEdit]);
  /** */
  const validation = (fieldValues = values) => {
    let temp = { ...errors };
    if ('fullname' in fieldValues)
      temp.fullname = fieldValues.fullname ? '' : 'Full name is required';

    if ('email' in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ''
        : 'Email is not valid';
    if ('mobile' in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 9
          ? ''
          : 'Mobile number is not valid minimum 10 numbers';
    if ('departmentId' in fieldValues)
      temp.departmentId =
        fieldValues.departmentId.length !== 0
          ? ''
          : 'Department name is required';
    setErrors({
      ...temp,
    });
    if (fieldValues === values)
      return Object.values(temp).every((x) => x === '');
  };
  const {
    values,
    errors,
    setErrors,
    setValues,
    handleInputChange,
    resetForm,
  } = useForm(initiaFValue, true, validation);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
      // EmployeeServices.insertEmployee(values);
      // resetForm();
      addOrEdit(values, resetForm);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            label="Full Name"
            name="fullname"
            value={values.fullname}
            onChange={handleInputChange}
            error={errors.fullname}
          />
          <Controls.Input
            label="Email"
            value={values.email}
            name="email"
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            label="Mobile"
            value={values.mobile}
            name="mobile"
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Controls.Input
            label="City"
            value={values.city}
            name="city"
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

          <Controls.DropDownSelect
            name="departmentId"
            label="Department"
            value={values.departmentId}
            onChange={handleInputChange}
            options={DEPARTMENTS}
            error={errors.departmentId}
          />
          <Controls.CheckBoxControl
            name="isPerm"
            label="Permanent Employee"
            value={values.isPerm}
            onChange={handleInputChange}
          />
          <Controls.DatePicker
            name="hireDate"
            label="Hiring Date"
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <div>
            <Controls.Button
              // variant="contained"
              // color="primary"
              // size="large"
              type="submit"
              text="Submit"
            />
            <Controls.Button
              // variant="contained"
              // color="primary"
              // size="large"
              color="default"
              text="Reset"
              onClick={resetForm}
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
