import { useEffect, useState } from "react";

const emptyForm = {
  name: "",
  className: "",
  date: "",
  totalMarks: "",
};

export default function Exams() {
  const [exams, setExams] = useState(() => {
    try {
      const saved = localStorage.getItem("eduorbit_exams");
      if (saved) return JSON.parse(saved);

      return [
        {
          id: 1,
          name: "Mid Term",
          className: "10-A",
          date: "2026-08-15",
          totalMarks: 100,
        },
        {
          id: 2,
          name: "Final Exam",
          className: "9-B",
          date: "2026-12-20",
          totalMarks: 100,
        },
      ];
    } catch {
      return [];
    }
  });

  const [form, setForm] = useState(emptyForm);
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    localStorage.setItem("eduorbit_exams", JSON.stringify(exams));
  }, [exams]);

  function updateField(field, value) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function saveExam(e) {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.className.trim() ||
      !form.date ||
      !form.totalMarks
    ) {
      alert("Please fill all fields");
      return;
    }

    const examData = {
      name: form.name.trim(),
      className: form.className.trim(),
      date: form.date,
      totalMarks: Number(form.totalMarks),
    };

    if (editingId !== null) {
      setExams((prev) =>
        prev.map((exam) =>
          exam.id === editingId
            ? { ...exam, ...examData }
            : exam
        )
      );
      setEditingId(null);
    } else {
      setExams((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...examData,
        },
      ]);
    }

    setForm(emptyForm);
  }

  function editExam(exam) {
    setEditingId(exam.id);

    setForm({
      name: exam.name || "",
      className: exam.className || "",
      date: exam.date || "",
      totalMarks: exam.totalMarks || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function deleteExam(id) {
    if (!confirm("Delete this exam?")) return;

    setExams((prev) =>
      prev.filter((exam) => exam.id !== id)
    );
  }

  function cancelEdit() {
    setEditingId(null);
    setForm(emptyForm);
  }

  const filteredExams = exams.filter((exam) =>
    `${exam.name} ${exam.className}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  function formatDate(date) {
    if (!date) return "-";

    return new Date(`${date}T00:00:00`).toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  }

  return (
    <div className="main">

      <div className="teachers-header">
        <div>
          <h2>Exams</h2>
          <p>Manage school examinations</p>
        </div>

        <input
          className="teacher-search"
          placeholder="Search Exam..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <form
        className="teacher-form"
        onSubmit={saveExam}
      >
        <input
          placeholder="Exam Name *"
          value={form.name}
          onChange={(e) =>
            updateField("name", e.target.value)
          }
        />

        <input
          placeholder="Class / Section *"
          value={form.className}
          onChange={(e) =>
            updateField("className", e.target.value)
          }
        />

        <input
          type="date"
          value={form.date}
          onChange={(e) =>
            updateField("date", e.target.value)
          }
        />

        <input
          type="number"
          min="1"
          placeholder="Total Marks *"
          value={form.totalMarks}
          onChange={(e) =>
            updateField("totalMarks", e.target.value)
          }
        />

        <button type="submit">
          {editingId !== null
            ? "Update Exam"
            : "Add Exam"}
        </button>

        {editingId !== null && (
          <button
            type="button"
            onClick={cancelEdit}
            style={{
              background: "#64748b",
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <div className="teacher-table-wrapper">
        <table className="teacher-table">
          <thead>
            <tr>
              <th>Exam</th>
              <th>Class</th>
              <th>Date</th>
              <th>Total Marks</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredExams.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  style={{
                    textAlign: "center",
                    padding: "30px",
                  }}
                >
                  No Exams Found
                </td>
              </tr>
            ) : (
              filteredExams.map((exam) => (
                <tr key={exam.id}>
                  <td>{exam.name}</td>
                  <td>{exam.className}</td>
                  <td>{formatDate(exam.date)}</td>
                  <td>{exam.totalMarks}</td>

                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => editExam(exam)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteExam(exam.id)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}
