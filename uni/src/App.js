import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen";
import StudentLogin from "./components/StudentLogin";
import ProfessionalLogin from "./components/ProfessionalLogin";
import CreateStudentAccount from "./components/CreateStudentAccount";
import CreateProfessionalAccount from "./components/CreateProfessionalAccount";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/professional-login" element={<ProfessionalLogin />} />
        <Route path="/create-student-account" element={<CreateStudentAccount />} />
        <Route path="/create-professional-account" element={<CreateProfessionalAccount />} />
      </Routes>
    </div>
  );
}

export default App;
