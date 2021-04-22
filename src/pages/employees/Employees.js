import React from 'react';
import PageHeader from '../../components/PageHeader';
import EmployeeForm from './EmployeeForm';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { makeStyles, Paper } from '@material-ui/core';

const Employees = () => {
  const classes = useStyles();
  return (
    <>
      <PageHeader
        title="New employee"
        subTitle="Add new employee bt completing this form"
        icon={<PeopleAltIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
      </Paper>
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

export default Employees;
