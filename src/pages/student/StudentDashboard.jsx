import { studentEducation } from "../../data/studentEducation";
import { studentProgress } from "../../data/studentProgress";
import { studentTopics } from "../../data/studentTopics";
import { buildLearningPlan } from "../../data/learningPlan";
  const learningPlan = buildLearningPlan();

  const strongTopics = studentTopics.reduce(
    (total, subject) =>
      total + subject.topics.filter((topic) => topic.status === "Strong").length,
    0
  );

  const needsAttentionTopics = studentTopics.reduce(
    (total, subject) =>
      total + subject.topics.filter(
        (topic) => topic.status === "Practice" || topic.status === "Needs Attention"
      ).length,
    0
  );

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
          <h2>📅 Today's Learning Plan</h2>

          {learningPlan.map((item) => (
            <div
              key={item.id}
              style={{
                padding: "14px 0",
                borderBottom: "1px solid #e2e8f0",
              }}
            >
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 12,
              }}>
                <strong>{item.title}</strong>
                <span style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  padding: "4px 8px",
                  borderRadius: 999,
                  background: item.priority === "High" ? "#fee2e2" : item.priority === "Medium" ? "#fef3c7" : "#dcfce7",
                  color: item.priority === "High" ? "#b91c1c" : item.priority === "Medium" ? "#92400e" : "#166534",
                }}>
                  {item.priority}
                </span>
              </div>

              <p style={{ color: "#64748b", margin: "6px 0 0" }}>
                {item.subject} • {item.provider}
              </p>
            </div>
          ))}
        </div>
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
          <h2>{studentProgress.attendance.overall}%</h2>
        </div>

        <div style={{ background: "#fff", padding: 18, borderRadius: 12 }}>
          <strong>Assignments</strong>
          <h2>{studentProgress.assignments.completed} / {studentProgress.assignments.total}</h2>
        </div>

        <div style={{ background: "#fff", padding: 18, borderRadius: 12 }}>
          <strong>Tests</strong>
          <h2>{studentProgress.tests.average}%</h2>
        </div>
        </div>
      </div>

      <h2 style={{ marginTop: 28 }}>Subject Performance</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: 16,
          marginTop: 16,
        }}
      >

      <h2 style={{ marginTop: 28 }}>Topic Insights</h2>

      {studentTopics.map((subject) => (
        <div
          key={subject.subject}
          style={{
            background: "#fff",
            padding: 20,
            borderRadius: 14,
            marginTop: 16,
          }}
        >
          <h3 style={{ marginBottom: 14 }}>{subject.subject}</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
              gap: 12,
            }}
          >
            {subject.topics.map((topic) => (
              <div
                key={topic.name}
                style={{
                  padding: 14,
                  borderRadius: 10,
                  background: "#f8fafc",
                }}
              >
                <strong>{topic.name}</strong>
                <h3 style={{ margin: "8px 0 4px" }}>{topic.score}%</h3>
                <p style={{ color: "#64748b", margin: 0 }}>{topic.status}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

      <h2 style={{ marginTop: 28 }}>Recommended Practice</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          gap: 16,
          marginTop: 16,
        }}
      >
        {studentTopics.flatMap((subject) =>
          subject.topics
            .filter(
              (topic) =>
                topic.status === "Practice" ||
                topic.status === "Needs Attention"
            )
            .map((topic) => ({
              ...topic,
              subject: subject.subject,
            }))
        ).map((topic) => (
          <div
            key={`${topic.subject}-${topic.name}`}
            style={{
              background: "#fff",
              padding: 18,
              borderRadius: 12,
              borderLeft: "4px solid #f59e0b",
            }}
          >
            <strong>{topic.name}</strong>
            <p style={{ color: "#64748b", margin: "8px 0 4px" }}>
              {topic.subject}
            </p>
            <strong>{topic.score}%</strong>
            <p style={{ color: "#f59e0b", margin: "4px 0 0" }}>
              {topic.status}
            </p>
          </div>
        ))}
      </div>
      </div>
  );
}
