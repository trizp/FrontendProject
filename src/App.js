import React from "react";
import Login from "./components/Login";
import Daftar from "./components/Daftar";
import Dashboard from "./components/Dashboard";
import LupaPassword from "./components/LupaPassword";
import { Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/daftar" element={<Daftar/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/lupa-password" element={<LupaPassword/>} />
      </Routes>
    </div>
  );
}

export default App;