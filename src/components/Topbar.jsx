import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Sidebar from "./Sidebar";

export default function Topbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  function handleLogout() {
    logout();
    navigate("/", { replace: true });
  }

  const name = user?.name || "Admin";
  const role = user?.role === "master_admin"
    ? "Master Administrator"
    : "Administrator";

  return (
    <>
      <header className="topbar">
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <div>
          <h2>Dashboard</h2>
          <p>Welcome back, {name}</p>
        </div>

        <div className="profile">
          <div className="avatar">
            {name.charAt(0).toUpperCase()}
          </div>

          <div>
            <strong>{name}</strong>
            <p>{role}</p>
          </div>

          <button
            onClick={handleLogout}
            style={{
              marginLeft: 12,
              padding: "8px 12px",
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              background: "#fff",
              cursor: "pointer"
            }}
          >
            Logout
          </button>
        </div>
      </header>

      {open && (
        <div className="mobile-sidebar">
          <Sidebar />
        </div>
      )}
    </>
  );
}
