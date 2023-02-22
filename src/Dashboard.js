import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from "react";

import Data from './resources/mock_project_data.json'
import './resources/ProjectDashboard.css';

function ProjectDashboard() {
	const [isArchived, archive_toggle] = useState(false);
	
	function handle_archive_toggle() {
		if (isArchived == false) {
			archive_toggle(true);
		}
		else {
			archive_toggle(false);
		}
	}

	// function handleHiatus(items) {
	// 	const hiatus = [...new Set(items.map((e) => e.value))];
	// 	if(item = ""){

	// 	}
	//   }
return (
	<div className="container">
		<div className="header">
			<img className="logo" src={require('../writerDuet-logo.png')}></img>
		</div>
		<hr className="header-line"></hr>
		<aside className="side-bar">
				stuff
				stuff
				stuff
		</aside>
		<div className='project-table'>
			<tb className="card-grid">
			<tr>
				<th>Project Name</th>
				<th>Owner</th>
				<th>Status</th>
			</tr>	
			{Data
			.slice()
				.map((item) => ( 	
					<tr className="card">
					<div className="card-content">
						<div class="header">
						<td>{item.name}</td>
						<td>{item.owner}</td>
						<td>{item.status}</td>
						</div>
					</div>
					</tr>
				))}
			</tb>
		</div>
    </div>
);
}

export default ProjectDashboard;import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from "react";

import Data from './resources/mock_project_data.json'
import './resources/ProjectDashboard.css';

function ProjectDashboard() {
	const [isArchived, archive_toggle] = useState(false);
	
	function handle_archive_toggle() {
		if (isArchived == false) {
			archive_toggle(true);
		}
		else {
			archive_toggle(false);
		}
	}

	// function handleHiatus(items) {
	// 	const hiatus = [...new Set(items.map((e) => e.value))];
	// 	if(item = ""){

	// 	}
	//   }
return (
	<div className="container">
		<div className="header">
			<img className="logo" src={require('../writerDuet-logo.png')}></img>
		</div>
		<hr className="header-line"></hr>
		<aside className="side-bar">
				stuff
				stuff
				stuff
		</aside>
		<div className='project-table'>
			<tb className="card-grid">
			<tr>
				<th>Project Name</th>
				<th>Owner</th>
				<th>Status</th>
			</tr>	
			{Data
			.slice()
				.map((item) => ( 	
					<tr className="card">
					<div className="card-content">
						<div class="header">
						<td>{item.name}</td>
						<td>{item.owner}</td>
						<td>{item.status}</td>
						</div>
					</div>
					</tr>
				))}
			</tb>
		</div>
    </div>
);
}

export default ProjectDashboard;
