import logo from './logo.svg';
import './App.css';
import { ProSidebarProvider } from 'react-pro-sidebar';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/projectPage" element={<ProjectPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
