import React, { useState, useEffect } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ProjectStatus(props) {
  let {status} = props.projectDetails
  const setProjectDetails = props.setProjectDetails

  const [tempStatus, setTempStatus] = useState(status)


  const handleStatus = (event, stat) => {
    setTempStatus(stat);
    //making status undefined? for some reason if switched
    const projectDetails={...props.projectDetails}
    setProjectDetails(projectDetails => ({
      ...projectDetails,
      status: stat
    }));
  }
  
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Project Status</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Development"
        name="radio-buttons-group"
        onChange={handleStatus}
        value={tempStatus}
      >
        <FormControlLabel value="active" control={<Radio />} label="Active" />
        <FormControlLabel value="inactive" control={<Radio />} label="Inactive" />
        <FormControlLabel value="hiatus" control={<Radio />} label="Hiatus" />
      </RadioGroup>
    </FormControl>
  );
}