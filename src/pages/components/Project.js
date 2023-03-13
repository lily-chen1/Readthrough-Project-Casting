import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';

import Tags from './Tags.js'
import ProjectStatus from './ProjectStatus.js'
import EmailModal from './../EmailModal'
import Character from './Character.js'
import sampleProj from './project.json'
import Sidebar from './Sidebar.js'

import theme from "../themes/Theme";
import { ThemeProvider } from "@mui/material/styles";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
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

    //  const ProjectData = class {
    //     constructor(sampleProj) {
    //       //this.project = sampleProj// JSON.parse(project_json)
    //       this.project = {
    //         name: sampleProj.PushId.details.projectName,
    //         description: sampleProj.PushId.details.description
              
    //       }
    //       //PushId = this.project.sampleProj.PushId??
    //     }
      
    //     get getDescription() {
    //       return this.description
    //     }
    //     set setDescription(description) {
    //         this.description = description
    //     }

    //     handleDescription(event) {
    //     // Extract the current value of the customer from state
    //     var updatedProj = this.project;
      
    //     // Extract the value of the input element represented by `target`
    //     var modifiedValue = event.target.value;
      
    //     // Update the customer object's first name
    //     updatedProj.description = modifiedValue;
      
    //     // Update the state object
    //     this.setProject({
    //       project: updatedProj
    //     });
    //   }
    //     get getName() {
    //         return this.project.name
    //     }
    //     // get getTags() {
    //     //     return this.project.PushId.details.tags.list.PushId
    //     // }
    //     // set setTags(tags) {
    //     //     this.project.tags = tags
    //     // }
    //     get getCharacters() {
    //         return this.project.PushId.characters.list
    //     }
    //     get getStatus() {
    //         return this.project.PushId.status
    //     }

        
    //   };
    
    
    // const proj = new ProjectData(sampleProj)

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
        console.log("INDEX")
        console.log(index)
        let updated = characters.splice(index, 1);
        console.log("UPDATED")
        console.log(updated)
        setCharacters(updated)
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
        console.log("IN USEEFFECT")
        console.log(characters)
    }, [characters])

    useEffect(() =>
    {
        console.log("IN PROJECT")
        console.log(projectDetails)
    }, [projectDetails])

    const handleDescription = (event) => {
        setProjectDetails(projectDetails => ({
            ...projectDetails,
            description: event.target.value
          }));
    }

 
    const handleName = (event) => {
        setProjectDetails(projectDetails => ({
            ...projectDetails,
            projectName: event.target.value
          }));
    }

 
    return (
        <ThemeProvider theme={theme}> 
        <div>
            <Sidebar></Sidebar>
            <div>
           
                <Toolbar sx={{ marginLeft: '18em', bgcolor: 'background.default' }}>
               
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <TextField
                            type="text"
                                value={projectDetails.projectName}
                                onChange={handleName}   //use save function somehwere else?
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
                            value={projectDetails.description}
                            multiline
                            rows={10}
                            fullWidth
                            onChange={handleDescription}
                        />
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Box
                            sx={{ display: 'flex', marginRight: '2em', backgroundColor: 'beige' }}
                        >
                            <Tags projectDetails={projectDetails} setProjectDetails={setProjectDetails} />
                        </Box>
                        <br />
                        <Box>
                            <ProjectStatus projectDetails={projectDetails} setProjectDetails={setProjectDetails}/>
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
        </ThemeProvider>
      
    );
}