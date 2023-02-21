import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ProjectStatus() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Project Status</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Development"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Development" control={<Radio />} label="Development" />
        <FormControlLabel value="Production" control={<Radio />} label="Production" />
        <FormControlLabel value="Hiatus" control={<Radio />} label="Hiatus" />
      </RadioGroup>
    </FormControl>
  );
}