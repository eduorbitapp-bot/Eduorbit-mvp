import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

const defaultAttendance = [
  {
    id: 1,
    student: "Rahul Sharma",
    studentClass: "10-A",
    date: new Date().toISOString().slice(0, 10),
    status: "Present",
  },
  {
    id: 2,
    student: "Priya Patel",
    studentClass: "9-B",
    date: new Date().toISOString().slice(0, 10),
    status: "Absent",
  },
];

export default function Attendance() {
  const [records, setRecords] = useState(() => {
    try {
      const saved = localStorage.getItem("attendance");

      if (saved) {
        return JSON.parse(saved);
      }

      localStorage.setItem("attendance", JSON.stringify(defaultAttendance));
      return defaultAttendance;
    } catch {
      return defaultAttendance;
    }
  });

  const [student, setStudent] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [date, setDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [status, setStatus] = useState("Present");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("attendance", JSON.stringify(records));
  }, [records]);

  function addAttendance(e) {
    e.preventDefault();

    if (!student.trim() || !studentClass.trim() || !date) {
      alert("Please fill Student, Class and Date");
      return;
    }

    const newRecord = {
      id: Date.now(),
      student: student.trim(),
      studentClass: studentClass.trim(),
      date,
      status,
    };

    setRecords((prev) => [newRecord, ...prev]);

    setStudent("");
    setStudentClass("");
    setDate(new Date().toISOString().slice(0, 10));
    setStatus("Present");
  }

  function deleteAttendance(id) {
    if (!confirm("Delete this attendance record?")) return;

    setRecords((prev) => prev.filter((record) => record.id !== id));
  }

  const filteredRecords = records.filter((record) => {
    const query = search.toLowerCase();

    return (
      record.student.toLowerCase().includes(query) ||
      record.studentClass.toLowerCase().includes(query) ||
      record.status.toLowerCase().includes(query)
    );
  });

  const presentCount = filteredRecords.filter(
    (record) => record.status === "Present"
  ).length;

  const absentCount = filteredRecords.filter(
    (record) => record.status === "Absent"
  ).length;

  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main">
        <Topbar />

        <div className="attendance-page">

          <div className="attendance-header">
            <div>
              <h1>Attendance</h1>
              <p>Track student attendance records.</p>
            </div>
          </div>

          <div className="attendance-stats">
            <div className="card attendance-stat">
              <span>Present</span>
              <strong>{presentCount}</strong>
            </div>

            <div className="card attendance-stat">
              <span>Absent</span>
              <strong>{absentCount}</strong>
            </div>

            <div className="card attendance-stat">
              <span>Total Records</span>
              <strong>{filteredRecords.length}</strong>
            </div>
          </div>

          <form
            className="card attendance-form"
            onSubmit={addAttendance}
          >
            <h2>Mark Attendance</h2>

            <div className="attendance-form-grid">

              <input
                placeholder="Student Name *"
                value={student}
                onChange={(e) => setStudent(e.target.value)}
              />

              <input
                placeholder="Class *"
                value={studentClass}
                onChange={(e) => setStudentClass(e.target.value)}
              />

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
              </select>

            </div>

            <button type="submit" className="attendance-add-btn">
              + Mark Attendance
            </button>
          </form>

          <input
            className="attendance-search"
            placeholder="Search Student, Class or Status..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="attendance-table-wrapper">
            <table className="attendance-table">

              <thead>
                <tr>
                  <th>Student</th>
                  <th>Class</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {filteredRecords.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="attendance-empty">
                      No Attendance Records Found
                    </td>
                  </tr>
                ) : (
                  filteredRecords.map((record) => (
                    <tr key={record.id}>

                      <td>{record.student}</td>

                      <td>{record.studentClass}</td>

                      <td>{record.date}</td>

                      <td>
                        <span
                          className={
                            record.status === "Present"
                              ? "attendance-status present"
                              : "attendance-status absent"
                          }
                        >
                          {record.status}
                        </span>
                      </td>

                      <td>
                        <button
                          className="delete-btn"
                          onClick={() =>
                            deleteAttendance(record.id)
                          }
                        >
                          Delete
                        </button>
                      </td>

                    </tr>
                  ))
                )}

              </tbody>

            </table>
          </div>

        </div>
      </main>
    </div>
  );
}
