import { useEffect, useState } from "react";
import StudentPhoto from "./StudentPhoto";

const emptyForm = {
  name: "",
  studentClass: "",
  section: "",
  phone: "",
  dateOfBirth: "",
  gender: "",
  fatherName: "",
  motherName: "",
  address: "",
  admissionDate: "",
  bloodGroup: "",
  status: "Active",
  photo: "",
};

export default function EditStudentModal({
  open,
  student,
  onSave,
  onClose,
}) {
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (!student) {
      setForm(emptyForm);
      return;
    }

    setForm({
      name: student.name || "",
      studentClass: student.class || "",
      section: student.section || "",
      phone: student.phone || "",
      dateOfBirth: student.dateOfBirth || "",
      gender: student.gender || "",
      fatherName: student.fatherName || "",
      motherName: student.motherName || "",
      address: student.address || "",
      admissionDate: student.admissionDate || "",
      bloodGroup: student.bloodGroup || "",
      status: student.status || "Active",
      photo: student.photo || "",
    });
  }, [student]);

  function updateField(field, value) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleSave() {
    if (
      !form.name.trim() ||
      !form.studentClass.trim() ||
      !form.phone.trim()
    ) {
      alert("Please fill Name, Class and Phone");
      return;
    }

    onSave({
      ...student,
      name: form.name.trim(),
      class: form.studentClass.trim(),
      section: form.section.trim(),
      phone: form.phone.trim(),
      dateOfBirth: form.dateOfBirth,
      gender: form.gender,
      fatherName: form.fatherName.trim(),
      motherName: form.motherName.trim(),
      address: form.address.trim(),
      admissionDate: form.admissionDate,
      bloodGroup: form.bloodGroup,
      status: form.status,
      photo: form.photo,
    });
  }

  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal student-edit-modal">

        <h2>Edit Student</h2>

        <StudentPhoto
          photo={form.photo}
          name={form.name}
          onChange={(value) =>
            updateField("photo", value)
          }
        />

        <div className="form-grid">

          <input
            placeholder="Student Name *"
            value={form.name}
            onChange={(e) =>
              updateField("name", e.target.value)
            }
          />

          <input
            placeholder="Class *"
            value={form.studentClass}
            onChange={(e) =>
              updateField(
                "studentClass",
                e.target.value
              )
            }
          />

          <input
            placeholder="Section"
            value={form.section}
            onChange={(e) =>
              updateField("section", e.target.value)
            }
          />

          <input
            placeholder="Phone *"
            type="tel"
            value={form.phone}
            onChange={(e) =>
              updateField("phone", e.target.value)
            }
          />

          <label>
            Date of Birth
            <input
              type="date"
              value={form.dateOfBirth}
              onChange={(e) =>
                updateField(
                  "dateOfBirth",
                  e.target.value
                )
              }
            />
          </label>

          <select
            value={form.gender}
            onChange={(e) =>
              updateField("gender", e.target.value)
            }
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <input
            placeholder="Father's Name"
            value={form.fatherName}
            onChange={(e) =>
              updateField(
                "fatherName",
                e.target.value
              )
            }
          />

          <input
            placeholder="Mother's Name"
            value={form.motherName}
            onChange={(e) =>
              updateField(
                "motherName",
                e.target.value
              )
            }
          />

          <label>
            Admission Date
            <input
              type="date"
              value={form.admissionDate}
              onChange={(e) =>
                updateField(
                  "admissionDate",
                  e.target.value
                )
              }
            />
          </label>

          <select
            value={form.bloodGroup}
            onChange={(e) =>
              updateField(
                "bloodGroup",
                e.target.value
              )
            }
          >
            <option value="">Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>

          <select
            value={form.status}
            onChange={(e) =>
              updateField("status", e.target.value)
            }
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

        </div>

        <textarea
          placeholder="Address"
          value={form.address}
          onChange={(e) =>
            updateField("address", e.target.value)
          }
          rows="3"
        />

        <div className="modal-actions">

          <button onClick={handleSave}>
            Save Changes
          </button>

          <button onClick={onClose}>
            Cancel
          </button>

        </div>

      </div>
    </div>
  );
}
