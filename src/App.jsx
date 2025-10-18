import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/website/Landing";
import Register from "./pages/website/Register";
import Login from "./pages/website/Login";
import Student from "./pages/student/Student";
import Parent from "./pages/parent/Parent";
import Teacher from "./pages/teacher/Teacher";
import DOS from "./pages/DOS/DOS";
import DOD from "./pages/DOD/DOD";
import Headmaster from "./pages/headmaster/Headmaster";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<Landing />} />

        {/* Register & Login */}
        <Route path="/register" element={<Register />} />

        {/* Dashboards */}
        <Route path="/student" element={<Student />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/dos" element={<DOS />} />
        <Route path="/dod" element={<DOD />} />
        <Route path="/headmaster" element={<Headmaster />} />
      </Routes>
    </Router>
  );
}

export default App;
