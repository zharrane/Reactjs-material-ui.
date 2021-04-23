import { FormControl, FormControlLabel, Checkbox } from '@material-ui/core';
import React from 'react';

const CheckBoxControl = (props) => {
  const { name, value, onChange, label } = props;

  const ConverToEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <FormControl>
      <FormControlLabel
        control={
          <Checkbox
            name={name}
            color="primary"
            checked={value}
            onChange={(e) =>
              onChange(ConverToEventPara(name, e.target.checked))
            }
          />
        }
        label={label}
      />
    </FormControl>
  );
};

export default CheckBoxControl;
