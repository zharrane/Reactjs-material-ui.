import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import EmployeeForm from './EmployeeForm';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import {
  makeStyles,
  Paper,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import useTable from '../../components/useTable';
import * as EmployeesService from '../../services/EmployeeService';

const headCells = [
  {
    id: 'fullname',
    label: 'Employee full name',
  },
  {
    id: 'email',
    label: 'Email address',
  },
  {
    id: 'mobile',
    label: 'Mobile number',
  },
  {
    id: 'department',
    label: 'Department',
  },
];
const Employees = () => {
  const [records, setRecords] = useState(EmployeesService.getAllEmployees());
  console.log('zaza: ' + records);
  const classes = useStyles();
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = useTable(records, headCells);
  return (
    <>
      <PageHeader
        title="New employee"
        subTitle="Add new employee bt completing this form"
        icon={<PeopleAltIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fullname}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.department}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
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
