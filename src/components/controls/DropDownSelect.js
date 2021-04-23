import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import React from 'react';

const DropDownSelect = (props) => {
  const { name, label, value, onChange, options, error = null } = props;
  return (
    <FormControl variant="outlined" {...(error && { error: true })}>
      <InputLabel>{label}</InputLabel>
      <Select name={name} label={label} value={value} onChange={onChange}>
        <MenuItem value="">None</MenuItem>
        {options.map((item, index) => (
          <MenuItem key={index} value={item.id}>
            {item.title}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default DropDownSelect;
