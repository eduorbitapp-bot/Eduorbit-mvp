export default function Attendance() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Attendance</h1>

      <table style={{ width: "100%", minWidth: 600 }}>
        <thead>
          <tr>
            <th>Student</th>
            <th>Class</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Rahul Sharma</td>
            <td>10-A</td>
            <td>Today</td>
            <td>Present</td>
          </tr>

          <tr>
            <td>Priya Patel</td>
            <td>9-B</td>
            <td>Today</td>
            <td>Absent</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
