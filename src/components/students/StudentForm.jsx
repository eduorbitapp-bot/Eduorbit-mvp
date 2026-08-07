export default function StudentForm({
  name,
  setName,
  studentClass,
  setStudentClass,
  phone,
  setPhone,
  onAdd,
}) {
  return (
    <div className="student-form">

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
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button onClick={onAdd}>
        Add Student
      </button>

    </div>
  );
}
