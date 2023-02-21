import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import Tags from './Tags.js'
import ProjectStatus from './ProjectStatus.js'
import EmailModal from './../EmailModal'

export default function Project() {
    const [gender, setGender] = React.useState('');

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    return (
        <div>
            <div>
                <Toolbar sx={{ marginLeft: '18em' }}>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <Typography variant="h6" noWrap component="div">
                                Project Name
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <FormGroup>
                                <FormControlLabel control={<Switch defaultChecked />} label="Edit Project Information" />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={3}>
                            <EmailModal />
                        </Grid>
                    </Grid>

                </Toolbar>
            </div>

            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, marginLeft: '18em' }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={8}>
                        <TextField
                            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            //value={project.description}, onChange allows edits
                            multiline
                            rows={10}
                            maxRows={15}
                            disabled
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Box
                            sx={{ display: 'flex', marginRight:'2em', backgroundColor: 'beige' }}
                        >
                            <Tags />
                        </Box>
                        <br />
                        <Box>
                            <ProjectStatus />
                        </Box>

                    </Grid>
                </Grid>
                <br></br>
                {/* Character Section */}
                <h2>Characters</h2>
                <Grid container spacing={4}>
                    <Grid item xs={3}>
                        <TextField
                            value="Character"
                            disabled
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={2}>
                        <ToggleButtonGroup
                            value={"main"}
                            exclusive
                            //onChange={handleAlignment}
                            aria-label="text alignment">
                            <ToggleButton value="main" aria-label="left aligned">
                                Main
                            </ToggleButton>
                            <ToggleButton value="supporting" aria-label="centered">
                                Supporting
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                    <Grid item xs={2}>
                        <FormGroup fullWidth>
                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={gender}
                                label="Gender"
                                onChange={handleChange}
                            >
                                <MenuItem value={"female"}>Female</MenuItem>
                                <MenuItem value={"Male"}>Male</MenuItem>
                            </Select>
                        </FormGroup>
                    </Grid>
                    <Grid item xs={2}>

                    </Grid>
                </Grid>

            </Box>



        </div>
    );
}