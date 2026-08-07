export default function StudentTable({
  students,
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
            <th>Name</th>
            <th>Class</th>
            <th>Phone</th>
            <th width="180">Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>

              <td>{student.class}</td>

              <td>{student.phone}</td>

              <td>
                <button
                  style={{
                    marginRight: 8,
                  }}
                  onClick={() => onEdit(student)}
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
