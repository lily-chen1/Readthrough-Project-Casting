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
                                {sampleProj.PushId.details.projectName}
                            </Typography>
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
                            maxRows={15}
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
                        {Object.entries(sampleProj.PushId.characters.list).map((chara)=> (
                            <Character key={chara[0]} prop={chara[1]} />
                        )
                        )
                        }
                        <TableRow>
                            
                        </TableRow>
                    </TableBody>
                </Table>
                <Button sx={{ backgroundColor: "#DED7C3", marginBottom: '2em' }} variant="contained">Add Character</Button> 


            </Box>



        </div>
    );
}