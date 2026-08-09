import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import MasterAdminRoute from "./components/auth/MasterAdminRoute";

import "./styles/students.css";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/students/Students";
import Teachers from "./pages/teachers/Teachers";
import Courses from "./pages/courses/Courses";
import Attendance from "./pages/attendance/Attendance";
import Fees from "./pages/fees/Fees";
import Exams from "./pages/exams/Exams";
import Settings from "./pages/settings/Settings";
import MasterAdmin from "./pages/master/MasterAdmin";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    const ok = login(email, password);

    if (ok) {
      const savedUser = JSON.parse(localStorage.getItem("eduorbit-user"));
      if (savedUser?.role === "master_admin") {
        navigate("/master-admin", { replace: true });
      } else {
        navigate("/dashboard", { replace: true });
      }
    } else {
      alert("Invalid Email or Password");
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">

        <h1>EduOrbit</h1>
        <p>Education Management Platform</p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
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
      <Route
        path="/master-admin"
        element={
          <MasterAdminRoute>
            <MasterAdmin />
          </MasterAdminRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/students"
        element={
          <ProtectedRoute>
            <Students />
          </ProtectedRoute>
        }
      />

      <Route
        path="/teachers"
        element={
          <ProtectedRoute>
            <Teachers />
          </ProtectedRoute>
        }
      />

      <Route
        path="/courses"
        element={
          <ProtectedRoute>
            <Courses />
          </ProtectedRoute>
        }
      />

      <Route
        path="/attendance"
        element={
          <ProtectedRoute>
            <Attendance />
          </ProtectedRoute>
        }
      />

      <Route
        path="/fees"
        element={
          <ProtectedRoute>
            <Fees />
          </ProtectedRoute>
        }
      />

      <Route
        path="/exams"
        element={
          <ProtectedRoute>
            <Exams />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}
