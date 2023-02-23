
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
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

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

const drawerWidth = 240;

function ProjectDashboard() {
return (
	// <div className="container">
	// 	<div className="header">
	// 		<img className="logo" src={require('./assets/images/writerDuet-logo.png')}></img>
	// 	</div>
	// 	<hr className="header-line"></hr>
	// 	<Drawer>
	// 	</Drawer>
	// 	<div className='project-table'>
	// 		<tb className="card-grid">
	// 		<tr>
	// 			<th>Project Name</th>
	// 			<th>Owner</th>
	// 			<th>Status</th>
	// 		</tr>	
	// 		{Data
	// 		.slice()
	// 			.map((item) => ( 	
	// 				<tr className="card">
	// 				<div className="card-content">
	// 					<div class="header">
	// 					<td>{item.name}</td>
	// 					<td>{item.owner}</td>
	// 					<td>{item.status}</td>
	// 					</div>
	// 				</div>
	// 				</tr>
	// 			))}
	// 		</tb>
	// 	</div>
    // </div>
	<Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `100%` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
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
        <List>
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
        </List>
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
          {Data.map((project) => (
            <TableRow
              key={project.title}
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

      </Box>
    </Box>
);
}

export default ProjectDashboard;