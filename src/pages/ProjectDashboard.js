
// react imports
import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from "react";

// mui imports
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Button from '@mui/material/Button';

// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';

import DeleteIcon from '@mui/icons-material/Delete';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import InventoryIcon from '@mui/icons-material/Inventory';
import HideSourceIcon from '@mui/icons-material/HideSource';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SettingsIcon from '@mui/icons-material/Settings';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// local imports
import Data from '../assets/jsons/mock_project_data.json'
import '../resources/ProjectDashboard.css';
import SearchBar from '../components/SearchBar.js'

const drawerWidth = 240;

function filter_by_active(item){
  if (item.status =="Active") {
    return true;
  }
  return false;
}

function filter_by_all_projects(item){
  if (item.status =="Trashed") {
    return false;
  }
  return true;
}


function filter_by_trash(item){
  if (item.status =="Trashed") {
    return true;
  }
  return false;
}

var projectData = Data.filter(filter_by_active);

function ProjectDashboard() {
  
  // SEARCH BAR
  // const search_parameters = Object.keys(Object.assign({}, ...));
  
  // FOLDER IMPLEMENTAION
  const [view, setView] = useState("all-projects");

  const handleView = (event, newView) => {
    if (newView != null) {
      if (newView=="all-projects"){
        projectData = Data.filter(filter_by_all_projects);
        console.log(projectData);
      }
      else if (newView=="active"){
        projectData = Data.filter(filter_by_active);
        console.log(projectData);
      }
      else {
        projectData = Data.filter(filter_by_trash);
        console.log(projectData);
      }

      setView(newView);
      console.log(newView);    
    }
  };


return (
	<Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6">
          rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr     My Projects
          </Typography>
          <SearchBar/>

        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
			bgcolor: '#f6f6f6',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        {/* <List>
          <ListItem disablePadding>
                  <ListItemButton>
              <ListItemIcon>
                <InventoryIcon />
              </ListItemIcon>
              <ListItemText primary='All Projects' />
                  </ListItemButton>
                </ListItem>
          <ListItem disablePadding>
                  <ListItemButton>
              <ListItemIcon>
                <AccessTimeFilledIcon />
              </ListItemIcon>
              <ListItemText primary='Recents' />
                  </ListItemButton>
                </ListItem>
          <ListItem disablePadding>
                  <ListItemButton>
              <ListItemIcon>
                <HideSourceIcon />
              </ListItemIcon>
              <ListItemText primary='In Hiatus' />
                  </ListItemButton>
                </ListItem>
          <ListItem disablePadding>
                  <ListItemButton>
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemText primary='Trash' />
                  </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
          <ListItem disablePadding>
                  <ListItemButton>
              <ListItemIcon>
                <PermIdentityIcon />
              </ListItemIcon>
              <ListItemText primary='Profile' />
                  </ListItemButton>
                </ListItem>

          <ListItem disablePadding>
                  <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary='Settings' />
                  </ListItemButton>
                </ListItem>
        </List> */}

        <ToggleButtonGroup
          orientation="vertical"
          value={view}
          exclusive
          align="left"
          onChange={handleView}
        >
          <ToggleButton value="active" aria-label="active" >
            <InventoryIcon /> Active
          </ToggleButton>
          <ToggleButton value="all-projects" aria-label="all-projects">
            <AccessTimeFilledIcon /> All Projects
          </ToggleButton>
          <ToggleButton value="trash" aria-label="trash">
            <DeleteIcon /> Trash
          </ToggleButton>
        </ToggleButtonGroup>
        <Divider />

        <ToggleButtonGroup
          orientation="vertical"
          exclusive
          align="left"
        >
          <ToggleButton value="all-projects" aria-label="all-projects" >
            <PermIdentityIcon /> Profile
          </ToggleButton>
          <ToggleButton value="recent" aria-label="recent">
            <SettingsIcon /> Settings
          </ToggleButton>
        </ToggleButtonGroup>

      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Project Title</TableCell>
                <TableCell align="right">Owner</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Timestamp</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projectData.map((project) => (
                <TableRow
                  key={project.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {project.title}
                  </TableCell>
                  <TableCell align="right">{project.owner}</TableCell>
                  <TableCell align="right">{project.status}</TableCell>
                  <TableCell align="right">{project.timestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
          <Button
          sx={{
            bgcolor: '#5D6BB5',
          }}
          >
            + New Project
          </Button>
      </Box>
    </Box>
);
}

export default ProjectDashboard;