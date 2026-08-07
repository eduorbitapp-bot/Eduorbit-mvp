export default function StudentSearch({
  value,
  onChange,
}) {
  return (
    <input
      className="student-search"
      type="text"
      placeholder="Search student..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
