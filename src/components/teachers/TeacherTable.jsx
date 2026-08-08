export default function TeacherTable({
  teachers,
  onView,
  onEdit,
  onDelete,
}) {
  if (teachers.length === 0) {
    return (
      <div className="card teacher-empty-state">
        <p>No Teachers Found</p>
      </div>
    );
  }

  return (
    <div className="teacher-table-wrapper">
      <table className="teacher-table">

        <thead>
          <tr>
            <th>Teacher</th>
            <th>Subject</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id}>

              <td>
                <div className="teacher-table-person">

                  {teacher.photo ? (
                    <img
                      src={teacher.photo}
                      alt={teacher.name}
                      className="teacher-table-photo"
                    />
                  ) : (
                    <div className="teacher-table-avatar">
                      {teacher.name
                        ?.charAt(0)
                        ?.toUpperCase() || "T"}
                    </div>
                  )}

                  <strong>{teacher.name}</strong>

                </div>
              </td>

              <td>
                {teacher.subject || "Not added"}
              </td>

              <td>
                {teacher.phone || "Not added"}
              </td>

              <td>
                <span
                  className={
                    teacher.status === "Inactive"
                      ? "teacher-status inactive"
                      : teacher.status === "On Leave"
                      ? "teacher-status leave"
                      : "teacher-status active"
                  }
                >
                  {teacher.status || "Active"}
                </span>
              </td>

              <td>
                <div className="teacher-actions">

                  <button
                    type="button"
                    className="teacher-view-btn"
                    onClick={() => onView(teacher)}
                  >
                    View
                  </button>

                  <button
                    type="button"
                    className="teacher-edit-btn"
                    onClick={() => onEdit(teacher)}
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() =>
                      onDelete(teacher.id)
                    }
                  >
                    Delete
                  </button>

                </div>
              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}
