export default function Fees() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Fees Management</h1>

      <table style={{ width: "100%", minWidth: 650 }}>
        <thead>
          <tr>
            <th>Student</th>
            <th>Class</th>
            <th>Total Fees</th>
            <th>Paid</th>
            <th>Due</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Rahul Sharma</td>
            <td>10-A</td>
            <td>₹50,000</td>
            <td>₹40,000</td>
            <td>₹10,000</td>
          </tr>

          <tr>
            <td>Priya Patel</td>
            <td>9-B</td>
            <td>₹45,000</td>
            <td>₹45,000</td>
            <td>₹0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
