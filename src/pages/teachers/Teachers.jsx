import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import TeacherForm from "../../components/teachers/TeacherForm";
import TeacherTable from "../../components/teachers/TeacherTable";
import TeacherProfile from "../../components/teachers/TeacherProfile";
import EditTeacherModal from "../../components/teachers/EditTeacherModal";
import "../../styles/teachers.css";

export default function Teachers() {
  const [teachers, setTeachers] = useState(() => {
    try {
      return (
        JSON.parse(
          localStorage.getItem("teachers")
        ) || []
      );
    } catch {
      return [];
    }
  });

  const [search, setSearch] = useState("");
  const [viewing, setViewing] = useState(null);
  const [editing, setEditing] = useState(null);

  const [openProfile, setOpenProfile] =
    useState(false);

  const [openEditModal, setOpenEditModal] =
    useState(false);

  useEffect(() => {
    localStorage.setItem(
      "teachers",
      JSON.stringify(teachers)
    );
  }, [teachers]);

  function addTeacher(newTeacher) {
    setTeachers((prev) => [
      ...prev,
      newTeacher,
    ]);
  }

  function deleteTeacher(id) {
    if (!window.confirm("Delete Teacher?")) {
      return;
    }

    setTeachers((prev) =>
      prev.filter((teacher) => teacher.id !== id)
    );

    if (viewing?.id === id) {
      setViewing(null);
      setOpenProfile(false);
    }
  }

  function viewTeacher(teacher) {
    setViewing(teacher);
    setOpenProfile(true);
  }

  function editTeacher(teacher) {
    setEditing(teacher);
    setOpenEditModal(true);
  }

  function saveTeacher(updatedTeacher) {
    setTeachers((prev) =>
      prev.map((teacher) =>
        teacher.id === updatedTeacher.id
          ? {
              ...teacher,
              ...updatedTeacher,
            }
          : teacher
      )
    );

    setOpenEditModal(false);
    setEditing(null);
  }

  const filtered = teachers.filter((teacher) =>
    `${teacher.name || ""} ${
      teacher.subject || ""
    }`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">

      <Sidebar />

      <main className="main">

        <Topbar />

        <div className="teachers-header">
          <div>
            <h2>Teachers</h2>
            <p>
              Manage teachers and faculty profiles
            </p>
          </div>

          <input
            className="teacher-search"
            placeholder="Search Teacher..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

        <TeacherForm
          onAdd={addTeacher}
        />

        <TeacherTable
          teachers={filtered}
          onView={viewTeacher}
          onEdit={editTeacher}
          onDelete={deleteTeacher}
        />

        {openProfile && (
          <TeacherProfile
            teacher={viewing}
            onClose={() => {
              setOpenProfile(false);
              setViewing(null);
            }}
          />
        )}

        {openEditModal && (
          <EditTeacherModal
            open={openEditModal}
            teacher={editing}
            onSave={saveTeacher}
            onClose={() => {
              setOpenEditModal(false);
              setEditing(null);
            }}
          />
        )}

      </main>

    </div>
  );
}
