import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/students/Students";
import Teachers from "./pages/teachers/Teachers";
import Courses from "./pages/courses/Courses";
import Attendance from "./pages/attendance/Attendance";
import Fees from "./pages/fees/Fees";
import Exams from "./pages/exams/Exams";
import Settings from "./pages/settings/Settings";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>EduOrbit</h1>
        <p>Education Management Platform</p>

        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button onClick={() => navigate("/dashboard")}>
          Login
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/students" element={<Students />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/fees" element={<Fees />} />
      <Route path="/exams" element={<Exams />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
