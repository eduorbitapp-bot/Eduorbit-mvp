import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

const defaultCourses = [
  { id: 1, name: "Mathematics", teacher: "Rajesh Kumar", students: 120, status: "Active" },
  { id: 2, name: "Science", teacher: "Neha Sharma", students: 95, status: "Active" },
  { id: 3, name: "English", teacher: "Amit Patel", students: 110, status: "Active" },
];

export default function Courses() {
  const [courses, setCourses] = useState(() => {
    try {
      const saved = localStorage.getItem("courses");

      if (saved) {
        return JSON.parse(saved);
      }

      localStorage.setItem("courses", JSON.stringify(defaultCourses));
      return defaultCourses;
    } catch {
      return defaultCourses;
    }
  });

  const [name, setName] = useState("");
  const [teacher, setTeacher] = useState("");
  const [students, setStudents] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  function addCourse(e) {
    e.preventDefault();

    if (!name.trim() || !teacher.trim()) {
      alert("Please fill Course Name and Teacher");
      return;
    }

    const newCourse = {
      id: Date.now(),
      name: name.trim(),
      teacher: teacher.trim(),
      students: Number(students) || 0,
      status: "Active",
    };

    setCourses((prev) => [...prev, newCourse]);

    setName("");
    setTeacher("");
    setStudents("");
  }

  function deleteCourse(id) {
    if (!confirm("Delete this course?")) return;

    setCourses((prev) => prev.filter((course) => course.id !== id));
  }

  const filteredCourses = courses.filter((course) => {
    const query = search.toLowerCase();

    return (
      course.name.toLowerCase().includes(query) ||
      course.teacher.toLowerCase().includes(query)
    );
  });

  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main">
        <Topbar />

        <div className="course-page">
          <div className="course-header">
            <div>
              <h1>Courses</h1>
              <p>Manage all courses and assigned teachers.</p>
            </div>
          </div>

          <form className="card course-form" onSubmit={addCourse}>
            <h2>Add Course</h2>

            <div className="course-form-grid">
              <input
                placeholder="Course Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                placeholder="Teacher *"
                value={teacher}
                onChange={(e) => setTeacher(e.target.value)}
              />

              <input
                type="number"
                min="0"
                placeholder="Students"
                value={students}
                onChange={(e) => setStudents(e.target.value)}
              />
            </div>

            <button type="submit" className="course-add-btn">
              + Add Course
            </button>
          </form>

          <input
            className="course-search"
            placeholder="Search Course or Teacher..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="course-table-wrapper">
            <table className="course-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Course</th>
                  <th>Teacher</th>
                  <th>Students</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredCourses.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="course-empty">
                      No Courses Found
                    </td>
                  </tr>
                ) : (
                  filteredCourses.map((course) => (
                    <tr key={course.id}>
                      <td>{course.id}</td>
                      <td>{course.name}</td>
                      <td>{course.teacher}</td>
                      <td>{course.students}</td>
                      <td>
                        <span className="course-status">
                          {course.status}
                        </span>
                      </td>
                      <td>
                        <button
                          className="delete-btn"
                          onClick={() => deleteCourse(course.id)}
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
