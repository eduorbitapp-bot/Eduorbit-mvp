import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import StudentForm from "../../components/students/StudentForm";
import StudentSearch from "../../components/students/StudentSearch";
import StudentTable from "../../components/students/StudentTable";
import "../../styles/students.css";

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

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  function addStudent() {
    if (!name.trim() || !studentClass.trim() || !phone.trim()) {
      alert("Please fill all fields");
      return;
    }

    setStudents((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: name.trim(),
        class: studentClass.trim(),
        phone: phone.trim(),
      },
    ]);

    setName("");
    setStudentClass("");
    setPhone("");
  }

  function deleteStudent(id) {
    if (!window.confirm("Delete this student?")) return;
    setStudents((prev) => prev.filter((s) => s.id !== id));
  }

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout title="Students">

      <StudentForm
        name={name}
        setName={setName}
        studentClass={studentClass}
        setStudentClass={setStudentClass}
        phone={phone}
        setPhone={setPhone}
        onAdd={addStudent}
      />

      <StudentSearch
        value={search}
        onChange={setSearch}
      />

      <StudentTable
        students={filteredStudents}
        onDelete={deleteStudent}
      />

    </DashboardLayout>
  );
}
