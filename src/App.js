import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
// import FirebaseTest from "./FirebaseTest";
import Home from "./Home";
import AddProject from "./addProjects";
import ViewProjects from "./viewProjects";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route path="/firebasetest" element={<FirebaseTest />} /> */}
      <Route path="/addProject" element={<AddProject />} />
      <Route path="/viewProjects" element={<ViewProjects />} />
    </Routes>
  </BrowserRouter>
);

export default App;
