import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
