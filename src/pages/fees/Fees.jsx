import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

const defaultFees = [
  {
    id: 1,
    student: "Rahul Sharma",
    studentClass: "10-A",
    total: 50000,
    paid: 40000,
  },
  {
    id: 2,
    student: "Priya Patel",
    studentClass: "9-B",
    total: 45000,
    paid: 45000,
  },
];

export default function Fees() {
  const [fees, setFees] = useState(() => {
    try {
      const saved = localStorage.getItem("fees");

      if (saved) {
        return JSON.parse(saved);
      }

      localStorage.setItem("fees", JSON.stringify(defaultFees));
      return defaultFees;
    } catch {
      return defaultFees;
    }
  });

  const [student, setStudent] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [total, setTotal] = useState("");
  const [paid, setPaid] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("fees", JSON.stringify(fees));
  }, [fees]);

  function addFee(e) {
    e.preventDefault();

    const totalAmount = Number(total);
    const paidAmount = Number(paid);

    if (
      !student.trim() ||
      !studentClass.trim() ||
      !total ||
      totalAmount <= 0
    ) {
      alert("Please fill Student, Class and Total Fees");
      return;
    }

    if (paidAmount < 0 || paidAmount > totalAmount) {
      alert("Paid amount cannot be greater than Total Fees");
      return;
    }

    const newFee = {
      id: Date.now(),
      student: student.trim(),
      studentClass: studentClass.trim(),
      total: totalAmount,
      paid: paidAmount,
    };

    setFees((prev) => [...prev, newFee]);

    setStudent("");
    setStudentClass("");
    setTotal("");
    setPaid("");
  }

  function deleteFee(id) {
    if (!confirm("Delete this fee record?")) return;

    setFees((prev) => prev.filter((fee) => fee.id !== id));
  }

  const filteredFees = fees.filter((fee) => {
    const query = search.toLowerCase();

    return (
      fee.student.toLowerCase().includes(query) ||
      fee.studentClass.toLowerCase().includes(query)
    );
  });

  const totalFees = filteredFees.reduce(
    (sum, fee) => sum + Number(fee.total),
    0
  );

  const totalPaid = filteredFees.reduce(
    (sum, fee) => sum + Number(fee.paid),
    0
  );

  const totalDue = totalFees - totalPaid;

  function formatCurrency(amount) {
    return `₹${Number(amount).toLocaleString("en-IN")}`;
  }

  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main">
        <Topbar />

        <div className="fees-page">

          <div className="fees-header">
            <div>
              <h1>Fees Management</h1>
              <p>Manage student fees, payments and outstanding dues.</p>
            </div>
          </div>

          <div className="fees-stats">

            <div className="card fees-stat">
              <span>Total Fees</span>
              <strong>{formatCurrency(totalFees)}</strong>
            </div>

            <div className="card fees-stat">
              <span>Total Paid</span>
              <strong>{formatCurrency(totalPaid)}</strong>
            </div>

            <div className="card fees-stat">
              <span>Total Due</span>
              <strong>{formatCurrency(totalDue)}</strong>
            </div>

          </div>

          <form className="card fees-form" onSubmit={addFee}>

            <h2>Add Fee Record</h2>

            <div className="fees-form-grid">

              <input
                placeholder="Student Name *"
                value={student}
                onChange={(e) => setStudent(e.target.value)}
              />

              <input
                placeholder="Class *"
                value={studentClass}
                onChange={(e) => setStudentClass(e.target.value)}
              />

              <input
                type="number"
                min="1"
                placeholder="Total Fees *"
                value={total}
                onChange={(e) => setTotal(e.target.value)}
              />

              <input
                type="number"
                min="0"
                placeholder="Paid Amount"
                value={paid}
                onChange={(e) => setPaid(e.target.value)}
              />

            </div>

            <button type="submit" className="fees-add-btn">
              + Add Fee Record
            </button>

          </form>

          <input
            className="fees-search"
            placeholder="Search Student or Class..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="fees-table-wrapper">

            <table className="fees-table">

              <thead>
                <tr>
                  <th>Student</th>
                  <th>Class</th>
                  <th>Total Fees</th>
                  <th>Paid</th>
                  <th>Due</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {filteredFees.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="fees-empty">
                      No Fee Records Found
                    </td>
                  </tr>
                ) : (
                  filteredFees.map((fee) => {

                    const due =
                      Number(fee.total) - Number(fee.paid);

                    const status =
                      due === 0 ? "Paid" : "Due";

                    return (
                      <tr key={fee.id}>

                        <td>{fee.student}</td>

                        <td>{fee.studentClass}</td>

                        <td>{formatCurrency(fee.total)}</td>

                        <td>{formatCurrency(fee.paid)}</td>

                        <td>{formatCurrency(due)}</td>

                        <td>
                          <span
                            className={
                              status === "Paid"
                                ? "fee-status paid"
                                : "fee-status due"
                            }
                          >
                            {status}
                          </span>
                        </td>

                        <td>
                          <button
                            className="delete-btn"
                            onClick={() => deleteFee(fee.id)}
                          >
                            Delete
                          </button>
                        </td>

                      </tr>
                    );
                  })
                )}

              </tbody>

            </table>

          </div>

        </div>
      </main>
    </div>
  );
}
