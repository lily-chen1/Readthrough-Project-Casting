import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import RetrieveMobXDataTest from "./RetrieveMobXDataTest";
import EditMobXDataTest from "./EditMobXDataTest";
import Home from "./Home";
import AddProject from "./addProjects";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addProjects" element={<AddProject />} />
      <Route path="/rtest" element={<RetrieveMobXDataTest />} />
      <Route path="/etest" element={<EditMobXDataTest />} />
    </Routes>
  </BrowserRouter>
);

export default App;
