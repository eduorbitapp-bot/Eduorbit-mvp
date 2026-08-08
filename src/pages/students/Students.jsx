import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import StudentForm from "../../components/students/StudentForm";
import StudentTable from "../../components/students/StudentTable";
import EditStudentModal from "../../components/students/EditStudentModal";
import StudentProfile from "../../components/students/StudentProfile";

export default function Students() {
  const [students, setStudents] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("students")) || [];
    } catch {
      return [];
    }
  });

  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState(null);
  const [viewing, setViewing] = useState(null);

  const [openEditModal, setOpenEditModal] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  function addStudent(newStudent) {
    setStudents((prev) => [...prev, newStudent]);
  }

  function deleteStudent(id) {
    if (!window.confirm("Delete Student?")) {
      return;
    }

    setStudents((prev) =>
      prev.filter((student) => student.id !== id)
    );

    if (viewing?.id === id) {
      setViewing(null);
      setOpenProfile(false);
    }
  }

  function editStudent(student) {
    setEditing(student);
    setOpenEditModal(true);
  }

  function saveStudent(updatedStudent) {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === updatedStudent.id
          ? updatedStudent
          : student
      )
    );

    setOpenEditModal(false);
    setEditing(null);
  }

  function viewStudent(student) {
    setViewing(student);
    setOpenProfile(true);
  }

  const filtered = students.filter((student) =>
    `${student.name} ${student.class} ${student.section || ""}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main">
        <Topbar />

        <StudentForm onAdd={addStudent} />

        <div
          className="card"
          style={{ marginTop: 20 }}
        >
          <input
            placeholder="Search Student..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

        <div style={{ marginTop: 20 }}>
          <StudentTable
            students={filtered}
            onView={viewStudent}
            onEdit={editStudent}
            onDelete={deleteStudent}
          />
        </div>

        {openEditModal && (
          <EditStudentModal
            open={openEditModal}
            student={editing}
            onSave={saveStudent}
            onClose={() => {
              setOpenEditModal(false);
              setEditing(null);
            }}
          />
        )}

        {openProfile && (
          <StudentProfile
            student={viewing}
            onClose={() => {
              setOpenProfile(false);
              setViewing(null);
            }}
          />
        )}
      </main>
    </div>
  );
}
