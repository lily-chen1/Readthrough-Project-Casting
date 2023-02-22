import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import FirebaseTest from "./FirebaseTest";

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/firebasetest" element={<FirebaseTest />} />
    </Routes>
  </BrowserRouter>
);

export default App;
