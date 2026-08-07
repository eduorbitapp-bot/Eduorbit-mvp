export default function StatCard({
  title,
  value,
  icon,
  color = "#2563eb",
}) {
  return (
    <div
      className="card"
      style={{
        borderLeft: `5px solid ${color}`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h3>{title}</h3>

          <h1>{value}</h1>
        </div>

        <div
          style={{
            fontSize: "32px",
          }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}
