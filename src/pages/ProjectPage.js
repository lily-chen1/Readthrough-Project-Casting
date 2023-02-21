import React from 'react';
import EmailModal from './EmailModal'
import Sidebar from './components/Sidebar.js'
import Project from './components/Project.js'

function ProjectPage() {
    
    return (
    <div>
      <div>
        <Sidebar></Sidebar>
      </div>
      <div>

      <EmailModal/>
      <Project></Project>
      </div>
    </div>

        
      );
}

export default ProjectPage;