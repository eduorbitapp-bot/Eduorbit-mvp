import { useState } from "react";
import TeacherPhoto from "./TeacherPhoto";

const emptyForm = {
  name: "",
  subject: "",
  phone: "",
  email: "",
  qualification: "",
  joiningDate: "",
  experience: "",
  address: "",
  emergencyContact: "",
  status: "Active",
  photo: "",
};

export default function TeacherForm({ onAdd }) {
  const [form, setForm] = useState(emptyForm);

  function updateField(field, value) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.subject.trim() ||
      !form.phone.trim()
    ) {
      alert("Please fill Name, Subject and Phone");
      return;
    }

    onAdd({
      id: Date.now(),
      name: form.name.trim(),
      subject: form.subject.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      qualification: form.qualification.trim(),
      joiningDate: form.joiningDate,
      experience: form.experience.trim(),
      address: form.address.trim(),
      emergencyContact: form.emergencyContact.trim(),
      status: form.status,
      photo: form.photo,
    });

    setForm(emptyForm);
  }

  return (
    <form
      className="teacher-form"
      onSubmit={handleSubmit}
    >
      <h2 className="teacher-form-title">
        Add Teacher
      </h2>

      <TeacherPhoto
        photo={form.photo}
        name={form.name}
        onChange={(value) =>
          updateField("photo", value)
        }
      />

      <div className="teacher-form-grid">
        <input
          placeholder="Teacher Name *"
          value={form.name}
          onChange={(e) =>
            updateField("name", e.target.value)
          }
        />

        <input
          placeholder="Subject *"
          value={form.subject}
          onChange={(e) =>
            updateField("subject", e.target.value)
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

        <input
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) =>
            updateField("email", e.target.value)
          }
        />

        <input
          placeholder="Qualification"
          value={form.qualification}
          onChange={(e) =>
            updateField(
              "qualification",
              e.target.value
            )
          }
        />

        <label>
          Joining Date
          <input
            type="date"
            value={form.joiningDate}
            onChange={(e) =>
              updateField(
                "joiningDate",
                e.target.value
              )
            }
          />
        </label>

        <input
          placeholder="Experience (e.g. 5 years)"
          value={form.experience}
          onChange={(e) =>
            updateField(
              "experience",
              e.target.value
            )
          }
        />

        <input
          placeholder="Emergency Contact"
          type="tel"
          value={form.emergencyContact}
          onChange={(e) =>
            updateField(
              "emergencyContact",
              e.target.value
            )
          }
        />

        <select
          value={form.status}
          onChange={(e) =>
            updateField("status", e.target.value)
          }
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="On Leave">On Leave</option>
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

      <button type="submit">
        Add Teacher
      </button>
    </form>
  );
}
