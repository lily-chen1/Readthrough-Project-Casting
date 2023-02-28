import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import FirebaseTest from "./FirebaseTest";
import MobXTest from "./MobXTest";
import Home from "./Home";
import AddProject from "./addProjects";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/firebasetest" element={<FirebaseTest />} />
      <Route path="/addProjects" element={<AddProject />} />
      <Route path="/mobxtest" element={<MobXTest />} />
    </Routes>
  </BrowserRouter>
);

export default App;
