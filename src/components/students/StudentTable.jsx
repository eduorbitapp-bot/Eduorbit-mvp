export default function StudentTable({
  students,
  onView,
  onEdit,
  onDelete,
}) {
  if (students.length === 0) {
    return (
      <div className="card">
        <p style={{ textAlign: "center" }}>
          No Students Found
        </p>
      </div>
    );
  }

  return (
    <div
      className="card"
      style={{ overflowX: "auto" }}
    >
      <table className="teacher-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Class</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>

              <td>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      background: "#2563eb",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "700",
                    }}
                  >
                    {student.name
                      ?.charAt(0)
                      ?.toUpperCase()}
                  </div>

                  <strong>{student.name}</strong>
                </div>
              </td>

              <td>{student.class}</td>

              <td>{student.phone}</td>

              <td>
                <button
                  onClick={() => onView(student)}
                  style={{ marginRight: 8 }}
                >
                  View
                </button>

                <button
                  onClick={() => onEdit(student)}
                  style={{ marginRight: 8 }}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    onDelete(student.id)
                  }
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
