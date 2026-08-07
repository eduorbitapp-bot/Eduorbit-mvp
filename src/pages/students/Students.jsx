import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import StudentTable from "../../components/students/StudentTable";
import EditStudentModal from "../../components/students/EditStudentModal";

export default function Students() {
  const [students, setStudents] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("students")) || [];
    } catch {
      return [];
    }
  });

  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [phone, setPhone] = useState("");
  const [search, setSearch] = useState("");

  const [editing, setEditing] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      "students",
      JSON.stringify(students)
    );
  }, [students]);

  function addStudent() {
    if (!name || !studentClass || !phone) {
      alert("Fill all fields");
      return;
    }

    setStudents((prev) => [
      ...prev,
      {
        id: Date.now(),
        name,
        class: studentClass,
        phone,
      },
    ]);

    setName("");
    setStudentClass("");
    setPhone("");
  }

  function deleteStudent(id) {
    if (!confirm("Delete Student?")) return;

    setStudents((prev) =>
      prev.filter((s) => s.id !== id)
    );
  }

  function editStudent(student) {
    setEditing(student);
    setOpenModal(true);
  }

  function saveStudent(updatedStudent) {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === updatedStudent.id
          ? updatedStudent
          : s
      )
    );

    setOpenModal(false);
    setEditing(null);
  }

  const filtered = students.filter((s) =>
    s.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">

      <Sidebar />

      <main className="main">

        <Topbar />

        <div className="card">

          <h2>Students</h2>

          <input
            placeholder="Student Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            placeholder="Class"
            value={studentClass}
            onChange={(e) =>
              setStudentClass(e.target.value)
            }
          />

          <input
            placeholder="Phone"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
          />

          <button
            onClick={addStudent}
            style={{ marginTop: 10 }}
          >
            Add Student
          </button>

        </div>

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
            onEdit={editStudent}
            onDelete={deleteStudent}
          />

        </div>

        <EditStudentModal
          open={openModal}
          student={editing}
          onSave={saveStudent}
          onClose={() => {
            setOpenModal(false);
            setEditing(null);
          }}
        />

      </main>

    </div>
  );
}
