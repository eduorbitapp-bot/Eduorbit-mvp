import { studentEducation } from "../../data/studentEducation";

export default function StudentDashboard() {
  const { student, providers } = studentEducation;

  return (
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ margin: 0 }}>Hello, {student.name} 👋</h1>
        <p style={{ color: "#64748b" }}>
          Your complete learning journey in one place.
        </p>
      </div>

      <h2>My Education</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: 16,
        marginBottom: 24
      }}>
        {providers.map((provider) => (
          <div
            key={provider.id}
            style={{
              background: "#fff",
              padding: 20,
              borderRadius: 14,
              boxShadow: "0 4px 14px rgba(0,0,0,.06)"
            }}
          >
            <div style={{ fontSize: 28 }}>
              {provider.type === "school"
                ? "🏫"
                : provider.type === "coaching"
                ? "📚"
                : "👨‍🏫"}
            </div>

            <h3>{provider.name}</h3>

            <p style={{ color: "#64748b" }}>
              {provider.role}
            </p>

            <strong>Subjects</strong>

            <p style={{ color: "#475569" }}>
              {provider.subjects.join(" • ")}
            </p>
          </div>
        ))}
      </div>

      <div style={{
        background: "#fff",
        padding: 20,
        borderRadius: 14,
        marginBottom: 20
      }}>
        <h2>📅 Today</h2>

        <p>Maths homework — School</p>
        <p>Physics test preparation — Coaching</p>
        <p>Algebra revision — Tuition</p>
      </div>

      <div style={{
        background: "#f5f3ff",
        padding: 20,
        borderRadius: 14,
        marginBottom: 20
      }}>
        <h2>🤖 EduOrbit AI</h2>

        <p>
          Your personal learning assistant will eventually understand
          your learning across school, coaching and tuition.
        </p>

        <button
          style={{
            padding: "10px 16px",
            border: 0,
            borderRadius: 8,
            background: "#7c3aed",
            color: "#fff",
            cursor: "pointer"
          }}
        >
          Open AI Assistant
        </button>
      </div>

      <h2>My Progress</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
        gap: 16
      }}>
        <div style={{ background: "#fff", padding: 18, borderRadius: 12 }}>
          <strong>Attendance</strong>
          <h2>94%</h2>
        </div>

        <div style={{ background: "#fff", padding: 18, borderRadius: 12 }}>
          <strong>Assignments</strong>
          <h2>8 / 10</h2>
        </div>

        <div style={{ background: "#fff", padding: 18, borderRadius: 12 }}>
          <strong>Tests</strong>
          <h2>82%</h2>
        </div>
      </div>
    </div>
  );
}
