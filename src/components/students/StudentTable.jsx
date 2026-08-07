export default function StudentTable({
  students,
  onDelete,
}) {
  return (
    <table className="student-table">

      <thead>
        <tr>
          <th>Name</th>
          <th>Class</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>

        {students.length === 0 ? (
          <tr>
            <td colSpan="4" className="empty-state">
              No Students Found
            </td>
          </tr>
        ) : (
          students.map((student) => (
            <tr key={student.id}>

              <td>{student.name}</td>

              <td>{student.class}</td>

              <td>{student.phone}</td>

              <td>
                <button
                  className="delete-btn"
                  onClick={() => onDelete(student.id)}
                >
                  Delete
                </button>
              </td>

            </tr>
          ))
        )}

      </tbody>

    </table>
  );
}
