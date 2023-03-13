import React, { useState, useRef } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import sampleProj from './project.json'

import theme from "../themes/Theme";
import { ThemeProvider } from "@mui/material/styles";


const Character = (props) => {
    let {ageRange, characterName, description, genderIdentity, image, type} = props.characters[props.index][1] || {};
    let high = ageRange.high || 0
    let low = ageRange.low || 0
    const setCharacters = props.setCharacters;

    const [tempCharacterName, setTempCharacterName] = useState(characterName);
    const [tempDescription, setTempDescription] = useState(description)
    const [tempGenderIdentity, setTempGenderIdentity] = useState(genderIdentity)
    const [tempType, setTempType] = useState(type)
    const [tempLow, setTempLow] = useState(low)
    const [tempHigh, setTempHigh] = useState(high)
  
    const handleType = (event, type) => {
        setTempType(type);
      };

    const handleGender = (event) => {
        setTempGenderIdentity(event.target.value)
    }
    

    const updateCharas = () => {
        const characters = [...props.characters]; // Get a copy of the characters array
        characters[props.index].splice(1, 1, {
            characterName: tempCharacterName,
            description: tempDescription,
            genderIdentity: tempGenderIdentity,
            type: tempType,
            ageRange: {
                high: tempHigh,
                low: tempLow
            }
        
        });

        // Update the parent state
        setCharacters(characters);
    }
    

    return (
        <div>
             <ThemeProvider theme={theme}>
            <Grid container spacing={5}>
                <Grid item xs={2}>
                    <TextField
                        value={tempCharacterName}
                        onChange={(e) => setTempCharacterName(e.target.value)}
                    >
                    </TextField>
                    <button onClick={() => updateCharas()}>SAVE?</button>

                </Grid>
                <Grid item xs={2}>
                    <ToggleButtonGroup
                        value={tempType}
                        exclusive
                        onChange={handleType}
                        aria-label="text alignment">
                        <ToggleButton value="lead" aria-label="left aligned">
                            Lead
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
                            value={tempGenderIdentity}
                            onChange={handleGender}
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
                        value={tempLow}
                        onChange={(e) => setTempLow(e.target.value)}
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        id="outlined-number"
                        value={tempHigh}
                        type="number"
                        onChange={(e) => setTempHigh(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: '1em' }}>
                <Grid item xs={2}>
                    <Box

                        sx={{
                            width: 150,
                            height: 170,
                            backgroundColor: 'beige',
                        }}
                    >
                        <img src={props.image} alt="picture" />
                    </Box>
                </Grid>
                <Grid item xs={3} md={6}>
                    <TextField
                        value={tempDescription}
                        onChange={(e) => setTempDescription(e.target.value)}
                        multiline
                        rows={5}
                        fullWidth
                    />
                </Grid>

            </Grid>
            </ThemeProvider>
        </div>
    )

}

export default Character;