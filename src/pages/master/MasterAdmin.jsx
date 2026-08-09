import { masterAdmin } from "../../data/master/masterAdmin";

export default function MasterAdmin() {
  const stats = [
    { title: "Institutes", value: "12", icon: "🏫" },
    { title: "Users", value: "1,248", icon: "👥" },
    { title: "Active Subscriptions", value: "9", icon: "💳" },
    { title: "White-label Clients", value: "4", icon: "🎨" },
  ];

  return (
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ margin: 0 }}>Master Admin</h1>
        <p style={{ color: "#64748b" }}>
          Control and manage the EduOrbit platform.
        </p>
      </div>

      <div style={{
        background: "#111827",
        color: "#fff",
        padding: 20,
        borderRadius: 14,
        marginBottom: 24
      }}>
        <h2 style={{ marginTop: 0 }}>
          {masterAdmin.platform.name}
        </h2>

        <p style={{ marginBottom: 0 }}>
          Platform Status: {masterAdmin.platform.status}
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
        gap: 16,
        marginBottom: 24
      }}>
        {stats.map((stat) => (
          <div
            key={stat.title}
            style={{
              background: "#fff",
              padding: 20,
              borderRadius: 14,
              boxShadow: "0 4px 14px rgba(0,0,0,.06)"
            }}
          >
            <div style={{ fontSize: 28 }}>{stat.icon}</div>
            <p style={{ color: "#64748b" }}>{stat.title}</p>
            <h2 style={{ margin: 0 }}>{stat.value}</h2>
          </div>
        ))}
      </div>

      <div style={{
        background: "#fff",
        padding: 20,
        borderRadius: 14
      }}>
        <h2>Platform Controls</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: 12
        }}>
          {masterAdmin.permissions.map((permission) => (
            <div
              key={permission}
              style={{
                padding: 14,
                border: "1px solid #e5e7eb",
                borderRadius: 10
              }}
            >
              ✓ {permission.replaceAll("_", " ")}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
