import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
import sampleProj from './project.json'

// interface Chara  {
//     ageRange: {
//         high: Number,
//         low: Number
//     }
// }
const Character = ({prop})=> {
    console.log(prop)
    return(
        <div>
        <Grid container spacing={5}>
                                <Grid item xs={2}>
                                    <TextField
                                        value={prop.characterName}
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
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={prop.genderIdentity}
                                            label="Gender"
                                           
                                        >
                                            <MenuItem value={"female"}>Female</MenuItem>
                                            <MenuItem value={"male"}>Male</MenuItem>
                                            <MenuItem value={"nonbinary"}>Nonbinary</MenuItem>

                                        </Select>
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={2}>
                                    <TextField
                                        id="outlined-number"
                                        value={prop.ageRange.low}
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <TextField
                                        id="outlined-number"
                                        value={prop.ageRange.high}
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={3} style={{ marginTop: '1em' }}>
                                <Grid item xs={2}>
                                    <Box
                                    
                                        sx={{
                                            width: 150,
                                            height: 170,
                                            backgroundColor: 'beige',
                                        }}
                                    >
                                        <img src={prop.image} alt="picture" />
                                    </Box>
                                </Grid>
                                <Grid item xs={3} md={6}>
                                    <TextField
                                        value={prop.description}
                                        //value={project.description}, onChange allows edits
                                        multiline
                                        rows={5}
                                        maxRows={8}
                                        
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <Button sx={{ backgroundColor: "#DED7C3", marginBottom: '2em' }} variant="contained">Remove Character</Button>
                                </Grid>
                            </Grid>
                            </div>
    )
}

export default Character;