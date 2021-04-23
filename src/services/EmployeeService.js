import { EMPLOYEE_KEY, EMPLOYEE_ID_KEY } from '../constants/constants';
import { DEPARTMENTS } from '../constants/constants';

export const insertEmployee = (employee) => {
  let employees = getAllEmployees();
  employee['id'] = generateEmployeeId();
  employees.push(employee);
  localStorage.setItem(EMPLOYEE_KEY, JSON.stringify(employees));
};

const generateEmployeeId = () => {
  if (localStorage.getItem(EMPLOYEE_ID_KEY) === null)
    localStorage.setItem(EMPLOYEE_ID_KEY, '0');
  var id = parseInt(localStorage.getItem(EMPLOYEE_ID_KEY));
  localStorage.setItem(EMPLOYEE_ID_KEY, (++id).toString());
  return id;
};

export const getAllEmployees = () => {
  if (localStorage.getItem(EMPLOYEE_KEY) === null)
    localStorage.setItem(EMPLOYEE_KEY, JSON.stringify([]));

  let employees = JSON.parse(localStorage.getItem(EMPLOYEE_KEY));
  return employees.map((emp) => ({
    ...emp,
    department: DEPARTMENTS[emp.departmentId - 1].title,
  }));
};
