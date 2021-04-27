import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import EmployeeForm from './EmployeeForm';
import { Controls } from '../../components/controls/Controls';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import {
  InputAdornment,
  makeStyles,
  Paper,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
} from '@material-ui/core';
import useTable from '../../components/useTable';
import * as EmployeesService from '../../services/EmployeeService';
import { Search } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import Popups from '../../components/Popups';
import * as EmployeeServices from '../../services/EmployeeService';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Notification from '../../components/Notification';
import ConfirmDialog from '../../components/ConfirmDialog';
//*** */
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
  {
    id: 'actions',
    label: 'Actions',
    disableSorting: true,
  },
];
const Employees = () => {
  const [records, setRecords] = useState(EmployeesService.getAllEmployees());
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: '',
  });
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [openPopup, setOpenPopup] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    subTitle: '',
  });
  const handleSearch = (e) => {
    let value = e.target.value;
    setFilterFn({
      fn: (items) => {
        if (value === '') return items;
        else
          return items.filter((x) => x.fullname.toLowerCase().includes(value));
      },
    });
  };
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = useTable(records, headCells, filterFn);

  const addOrEdit = (employee, resetForm) => {
    if (employee.id === 0) EmployeeServices.insertEmployee(employee);
    else EmployeeServices.updateEmployee(employee);
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    setRecords(EmployeesService.getAllEmployees());
    setNotify({
      isOpen: true,
      message: 'Submitted successfully',
      type: 'success',
    });
  };
  const onDelete = (id) => {
    setConfirmDialog({ ...confirmDialog, isOpen: false });
    EmployeeServices.deleteEmployee(id);
    setRecords(EmployeesService.getAllEmployees());
    setNotify({
      isOpen: true,
      message: 'Deleted successfully',
      type: 'error',
    });
  };
  /*** */
  const openInPopUp = (item) => {
    setRecordForEdit(item);

    setOpenPopup(true);
  };
  return (
    <>
      <PageHeader
        title="New employee"
        subTitle="Add new employee bt completing this form"
        icon={<PeopleAltIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <Toolbar>
          <Controls.Input
            label="Search Employees"
            className={classes.searchInput}
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <Controls.Button
            className={classes.addNewButton}
            text="Add New"
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={() => {
              setOpenPopup(true);
              setRecordForEdit(null);
            }}
          />
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fullname}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.department}</TableCell>
                <TableCell>
                  <Controls.ActionButton
                    color="primary"
                    onClick={() => {
                      openInPopUp(item);
                    }}
                  >
                    <EditOutlinedIcon fontSize="small" />
                  </Controls.ActionButton>
                  <Controls.ActionButton
                    color="secondary"
                    onClick={() =>
                      //
                      setConfirmDialog({
                        isOpen: true,
                        title: `Are you sure to delete ${item.fullname} ?`,
                        subTitle: `You cannot undo this operation`,
                        onConfirm: () => onDelete(item.id),
                      })
                    }
                  >
                    <CloseIcon fontSize="small" />
                  </Controls.ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>

      <Popups
        title="Add New Employee"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <EmployeeForm addOrEdit={addOrEdit} recordForEdit={recordForEdit} />
      </Popups>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: '75%',
  },
  addNewButton: {
    position: 'absolute',
    right: '10px',
  },
}));

export default Employees;
