import logo from "./logo.svg";
import "./App.css";
import { ProSidebarProvider } from "react-pro-sidebar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import ProjectDashboard from "./pages/ProjectDashboard.js";
import MobXTest from "./pages/MobXTest";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/projectPage" element={<ProjectPage />} />
      <Route path="/projectDashboard" element={<ProjectDashboard />} />
      <Route path="/MobXTest" element={<MobXTest />} />
    </Routes>
  </BrowserRouter>
);

export default App;
