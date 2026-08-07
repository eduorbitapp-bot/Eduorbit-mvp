import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">EduOrbit</div>

      <nav>
        <Link to="/dashboard" className="menu-item">Dashboard</Link>
        <Link to="/students" className="menu-item">Students</Link>
        <Link to="/teachers" className="menu-item">Teachers</Link>
        <Link to="/courses" className="menu-item">Courses</Link>
        <Link to="/attendance" className="menu-item">Attendance</Link>
        <Link to="/fees" className="menu-item">Fees</Link>
        <Link to="/exams" className="menu-item">Exams</Link>
        <Link to="/settings" className="menu-item">Settings</Link>
      </nav>
    </aside>
  );
}
