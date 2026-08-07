import { useEffect, useState } from "react";

export default function EditStudentModal({
  open,
  student,
  onSave,
  onClose,
}) {
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (student) {
      setName(student.name || "");
      setStudentClass(student.class || "");
      setPhone(student.phone || "");
    }
  }, [student]);

  if (!open) return null;

  return (
    <div className="modal-overlay">

      <div className="modal">

        <h2>Edit Student</h2>

        <input
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Class"
          value={studentClass}
          onChange={(e) => setStudentClass(e.target.value)}
        />

        <input
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <div className="modal-actions">

          <button
            onClick={() =>
              onSave({
                ...student,
                name,
                class: studentClass,
                phone,
              })
            }
          >
            Save
          </button>

          <button onClick={onClose}>
            Cancel
          </button>

        </div>

      </div>

    </div>
  );
}
