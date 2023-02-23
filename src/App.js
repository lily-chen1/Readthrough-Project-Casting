import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectDashboard from "./pages/ProjectDashboard.js";
import FirebaseTest from "./FirebaseTest";

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/projectDashboard" element={<ProjectDashboard />} />
      <Route path="/firebasetest" element={<FirebaseTest />} />
    </Routes>
  </BrowserRouter>
);

export default App;
