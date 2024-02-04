import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const NumberField = (props) => {
  const [numericValue, setNumericValue] = useState('');

  const handleInputChange = (event) => {
    // Allow only numeric input
    let inputValue = event.target.value.replace(/[^0-9]/g, '');
    if (inputValue) {
        inputValue = parseInt(inputValue)
        if (props.min) inputValue = Math.max(props.min, inputValue);
        if (props.max) inputValue = Math.min(props.max, inputValue)
    }
    if (props.onChange) {
        event.target.value = inputValue;
        props.onChange(event);
    }

    setNumericValue(inputValue);
  };

  return (
    <Box>
      <TextField
        name={props.name}
        label={props.label}
        // sx={{ width: '80px' }}
        variant="outlined"
        fullWidth
        value={numericValue}
        onChange={handleInputChange}
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
      />
    </Box>
  );
};

export default NumberField;
