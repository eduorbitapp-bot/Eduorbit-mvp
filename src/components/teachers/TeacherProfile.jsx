export default function TeacherProfile({
  teacher,
  onClose,
}) {
  if (!teacher) return null;

  return (
    <div className="modal-overlay">
      <div className="modal teacher-profile-modal">

        <div className="teacher-profile-header">

          {teacher.photo ? (
            <img
              src={teacher.photo}
              alt={teacher.name || "Teacher"}
              className="teacher-profile-photo"
            />
          ) : (
            <div className="teacher-avatar">
              {teacher.name
                ?.charAt(0)
                ?.toUpperCase() || "T"}
            </div>
          )}

          <div>
            <h2>{teacher.name}</h2>

            <p>
              {teacher.subject || "Teacher"}
            </p>
          </div>

        </div>

        <div className="teacher-profile-grid">

          <div className="teacher-profile-field">
            <span>Teacher ID</span>
            <strong>{teacher.id}</strong>
          </div>

          <div className="teacher-profile-field">
            <span>Subject</span>
            <strong>
              {teacher.subject || "Not added"}
            </strong>
          </div>

          <div className="teacher-profile-field">
            <span>Phone</span>
            <strong>
              {teacher.phone || "Not added"}
            </strong>
          </div>

          <div className="teacher-profile-field">
            <span>Email</span>
            <strong>
              {teacher.email || "Not added"}
            </strong>
          </div>

          <div className="teacher-profile-field">
            <span>Qualification</span>
            <strong>
              {teacher.qualification || "Not added"}
            </strong>
          </div>

          <div className="teacher-profile-field">
            <span>Experience</span>
            <strong>
              {teacher.experience || "Not added"}
            </strong>
          </div>

          <div className="teacher-profile-field">
            <span>Joining Date</span>
            <strong>
              {teacher.joiningDate || "Not added"}
            </strong>
          </div>

          <div className="teacher-profile-field">
            <span>Status</span>
            <strong className="teacher-status-active">
              {teacher.status || "Active"}
            </strong>
          </div>

          <div className="teacher-profile-field">
            <span>Emergency Contact</span>
            <strong>
              {teacher.emergencyContact || "Not added"}
            </strong>
          </div>

        </div>

        <div className="teacher-profile-section">
          <h3>Address</h3>

          <p>
            {teacher.address || "Address not added"}
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
