import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import "../../styles/teachers.css";

export default function Teachers() {

  const [teachers, setTeachers] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("teachers")) || [];
    } catch {
      return [];
    }
  });

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "teachers",
      JSON.stringify(teachers)
    );
  }, [teachers]);

  function addTeacher() {

    if (
      !name.trim() ||
      !subject.trim() ||
      !phone.trim()
    ) {
      alert("Fill all fields");
      return;
    }

    setTeachers(prev => [
      ...prev,
      {
        id: Date.now(),
        name,
        subject,
        phone,
      }
    ]);

    setName("");
    setSubject("");
    setPhone("");
  }

  function deleteTeacher(id) {
    if (!confirm("Delete Teacher?")) return;

    setTeachers(prev =>
      prev.filter(t => t.id !== id)
    );
  }

  const filtered = teachers.filter(t =>
    t.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">

      <Sidebar />

      <main className="main">

        <Topbar />

        <div className="teachers-header">

          <h2>Teachers</h2>

          <input
            className="teacher-search"
            placeholder="Search Teacher..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        <div className="teacher-form">

          <input
            placeholder="Teacher Name"
            value={name}
            onChange={(e)=>
              setName(e.target.value)
            }
          />

          <input
            placeholder="Subject"
            value={subject}
            onChange={(e)=>
              setSubject(e.target.value)
            }
          />

          <input
            placeholder="Phone"
            value={phone}
            onChange={(e)=>
              setPhone(e.target.value)
            }
          />

          <button onClick={addTeacher}>
            Add Teacher
          </button>

        </div>

        <table className="teacher-table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Subject</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.length === 0 ? (

              <tr>
                <td
                  colSpan="4"
                  style={{
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  No Teachers Found
                </td>
              </tr>

            ) : (

              filtered.map((teacher) => (

                <tr key={teacher.id}>

                  <td>{teacher.name}</td>

                  <td>{teacher.subject}</td>

                  <td>{teacher.phone}</td>

                  <td>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteTeacher(teacher.id)
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

      </main>

    </div>
  );

}
