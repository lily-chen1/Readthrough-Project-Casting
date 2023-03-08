import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Tags from './Tags.js'
import ProjectStatus from './ProjectStatus.js'
import EmailModal from './../EmailModal'
import Character from './Character.js'
import sampleProj from './project.json'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Project() {
    const [characters, setCharacters] = useState(
        Object.entries(sampleProj.PushId.characters.list));
    const [projectDetails, setProjectDetails] = useState(
       sampleProj.PushId.details
    )

    const [projectTags, setProjectTags] = useState(
        sampleProj.PushId.details.tags.list.PushId
     )
    const addChara = () => {
        let newChara = [
            "PushId3", {
                ageRange: {
                    high: 0,
                    low: 0,
                },
                characterName: "",
                description: "",
                genderIdentity: "",
                image: "",
                type: "",
            }];
        setCharacters(characters => [...characters, newChara])
        
    }
  
    const removeChara = (index) => 
    {
        setCharacters(characters.filter((_, i) => i !== index))
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() =>
    {
        console.log(characters)
    }, [characters])


    return (
        <div>
            <div>
                <Toolbar sx={{ marginLeft: '18em' }}>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <TextField 
                                value={projectDetails.projectName}
                                onChange={(e) =>
                                    (prevState => ({
                                        projectDetails: {                   // object that we want to update
                                            ...prevState.projectDetails,    // keep all other key-value pairs
                                            projectName: e.target.value       // update the value of specific key
                                        }
                                    }))}  
                            >
                            </TextField>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography>
                                Auto saving message
                            </Typography>
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
                            value={sampleProj.PushId.details.description}
                            multiline
                            rows={10}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Box
                            sx={{ display: 'flex', marginRight: '2em', backgroundColor: 'beige' }}
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
                <Table>
                    <TableBody>
                        {characters.map((chara, index) => (
                            <TableRow>
                                {/* <Character setCharacters={setCharacters} key={chara[0]} props={chara[1]} /> */}
                                <Character characters={characters} setCharacters={setCharacters} key={index} index={index} />
                                <Button sx={{ backgroundColor: "#DED7C3", marginBottom: '2em' }} variant="contained" onClick={() => removeChara(index)}>Remove Character</Button>
                                
                            </TableRow>
                        ))
                        }
                    </TableBody>
                </Table>
                <Button sx={{ backgroundColor: "#DED7C3", marginBottom: '2em' }} variant="contained" onClick={addChara}>Add Character</Button>
            </Box>
        </div>
    );
}