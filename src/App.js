import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/loginform";
import SignupForm from "./components/signupform";
import Home from "./components/home";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
