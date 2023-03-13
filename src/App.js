import logo from './logo.svg';
import './App.css';
import { ProSidebarProvider } from 'react-pro-sidebar';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import ProjectDashboard from "./pages/ProjectDashboard.js";


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/projectPage" element={<ProjectPage />} />
      <Route path="/projectDashboard" element={<ProjectDashboard />} />
    </Routes>
  </BrowserRouter>
);

export default App;
