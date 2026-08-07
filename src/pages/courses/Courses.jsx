import { useState } from "react";

export default function Courses() {
  const [courses, setCourses] = useState([
    { id: 1, name: "Mathematics", teacher: "Rajesh Kumar", students: 120 },
    { id: 2, name: "Science", teacher: "Neha Sharma", students: 95 },
    { id: 3, name: "English", teacher: "Amit Patel", students: 110 },
  ]);

  function addCourse() {
    const name = prompt("Course Name");
    if (!name) return;

    const teacher = prompt("Teacher");
    if (!teacher) return;

    setCourses([
      ...courses,
      {
        id: Date.now(),
        name,
        teacher,
        students: 0,
      },
    ]);
  }

  function deleteCourse(id) {
    setCourses(courses.filter(c => c.id !== id));
  }

  return (
    <div style={{ padding:20 }}>
      <h1>Courses</h1>

      <button onClick={addCourse}>
        + Add Course
      </button>

      <div style={{overflowX:"auto",marginTop:20}}>
        <table style={{width:"100%",minWidth:650}}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Course</th>
              <th>Teacher</th>
              <th>Students</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {courses.map(c=>(
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.teacher}</td>
                <td>{c.students}</td>
                <td>
                  <button onClick={()=>deleteCourse(c.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
