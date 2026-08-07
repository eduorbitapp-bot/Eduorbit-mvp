import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  const [students, setStudents] = useState(0);
  const [teachers, setTeachers] = useState(0);

  useEffect(() => {
    setStudents(
      JSON.parse(localStorage.getItem("students") || "[]").length
    );

    setTeachers(
      JSON.parse(localStorage.getItem("teachers") || "[]").length
    );
  }, []);

  return (
    <DashboardLayout title="Dashboard">

      <div className="cards">

        <StatCard
          title="Students"
          value={students}
          icon="🎓"
          color="#2563eb"
        />

        <StatCard
          title="Teachers"
          value={teachers}
          icon="👨‍🏫"
          color="#16a34a"
        />

        <StatCard
          title="Courses"
          value="12"
          icon="📚"
          color="#ea580c"
        />

        <StatCard
          title="Attendance"
          value="96%"
          icon="📈"
          color="#7c3aed"
        />

      </div>

      <div
        className="card"
        style={{ marginTop: 24 }}
      >
        <h2>Recent Activity</h2>

        <ul style={{ marginTop: 16, lineHeight: 2 }}>
          <li>✅ Student module completed</li>
          <li>✅ Teachers module started</li>
          <li>🚀 EduOrbit V2 Production Architecture</li>
        </ul>
      </div>

    </DashboardLayout>
  );
}
