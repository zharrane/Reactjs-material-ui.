import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import React from 'react';

const DatePicker = (props) => {
  const { name, label, value, onChange } = props;
  const ConverToEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        label={label}
        name={name}
        format="MMM/dd/yyyy"
        value={value}
        onChange={(date) => onChange(ConverToEventPara(name, date))}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
