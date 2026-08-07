import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Topbar() {
  const [open, setOpen] = useState(false);

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
          <p>Welcome back, Admin</p>
        </div>

        <div className="profile">
          <div className="avatar">A</div>

          <div>
            <strong>Admin</strong>
            <p>Administrator</p>
          </div>
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
