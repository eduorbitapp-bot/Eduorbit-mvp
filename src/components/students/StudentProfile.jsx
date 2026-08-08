export default function StudentProfile({ student, onClose }) {
  if (!student) return null;

  return (
    <div className="modal-overlay">
      <div className="modal student-profile-modal">

        <div className="profile-header">

          {student.photo ? (
            <img
              src={student.photo}
              alt={student.name || "Student"}
              className="student-profile-photo"
            />
          ) : (
            <div className="student-avatar">
              {student.name?.charAt(0)?.toUpperCase() || "S"}
            </div>
          )}

          <div>
            <h2>{student.name}</h2>

            <p>
              {student.class
                ? `Class ${student.class}`
                : "Student Profile"}
              {student.section
                ? ` • Section ${student.section}`
                : ""}
            </p>
          </div>

        </div>

        <div className="profile-grid">

          <div className="profile-field">
            <span>Student ID</span>
            <strong>{student.id}</strong>
          </div>

          <div className="profile-field">
            <span>Class</span>
            <strong>{student.class || "Not added"}</strong>
          </div>

          <div className="profile-field">
            <span>Section</span>
            <strong>{student.section || "Not added"}</strong>
          </div>

          <div className="profile-field">
            <span>Phone</span>
            <strong>{student.phone || "Not added"}</strong>
          </div>

          <div className="profile-field">
            <span>Date of Birth</span>
            <strong>
              {student.dateOfBirth || "Not added"}
            </strong>
          </div>

          <div className="profile-field">
            <span>Gender</span>
            <strong>
              {student.gender || "Not added"}
            </strong>
          </div>

          <div className="profile-field">
            <span>Blood Group</span>
            <strong>
              {student.bloodGroup || "Not added"}
            </strong>
          </div>

          <div className="profile-field">
            <span>Status</span>
            <strong className="status-active">
              {student.status || "Active"}
            </strong>
          </div>

        </div>

        <div className="profile-section">
          <h3>Parent Details</h3>

          <div className="profile-grid">

            <div className="profile-field">
              <span>Father's Name</span>
              <strong>
                {student.fatherName || "Not added"}
              </strong>
            </div>

            <div className="profile-field">
              <span>Mother's Name</span>
              <strong>
                {student.motherName || "Not added"}
              </strong>
            </div>

          </div>
        </div>

        <div className="profile-section">
          <h3>Admission Details</h3>

          <div className="profile-field">
            <span>Admission Date</span>
            <strong>
              {student.admissionDate || "Not added"}
            </strong>
          </div>
        </div>

        <div className="profile-section">
          <h3>Address</h3>

          <p>
            {student.address || "Address not added"}
          </p>
        </div>

        <div className="modal-actions">
          <button onClick={onClose}>
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
