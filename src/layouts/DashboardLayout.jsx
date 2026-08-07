import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function DashboardLayout({
  title,
  children,
}) {
  return (
    <div className="dashboard">

      <Sidebar />

      <main className="main">

        <Topbar />

        <div
          style={{
            marginBottom: "20px",
          }}
        >
          <h2>{title}</h2>
        </div>

        {children}

      </main>
    </div>
  );
}
