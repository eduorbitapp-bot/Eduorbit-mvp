export default function Exams() {
  return (
    <div style={{ padding:20 }}>
      <h1>Exams</h1>

      <table style={{width:"100%",minWidth:650}}>
        <thead>
          <tr>
            <th>Exam</th>
            <th>Class</th>
            <th>Date</th>
            <th>Total Marks</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Mid Term</td>
            <td>10-A</td>
            <td>15 Aug 2026</td>
            <td>100</td>
          </tr>

          <tr>
            <td>Final Exam</td>
            <td>9-B</td>
            <td>20 Dec 2026</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
