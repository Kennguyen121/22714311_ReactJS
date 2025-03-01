import { useState } from "react";
import "./App.css";
import investLogo from "./assets/invest.jpg";

function App() {
  const [amount, setAmount] = useState(""); // Số tiền đầu tư ban đầu
  const [rate, setRate] = useState(""); // Lãi suất hàng năm
  const [goal, setGoal] = useState(""); // Mục tiêu đầu tư
  const [tableData, setTableData] = useState([]);

  const calculateInvestment = (e) => {
    e.preventDefault();
    let currentAmount = parseFloat(amount);
    const interestRate = parseFloat(rate) / 100;
    const goalAmount = parseFloat(goal);
    let year = new Date().getFullYear(); // Lấy năm hiện tại
    let data = [];

    while (currentAmount < goalAmount) {
      let interest = currentAmount * interestRate; // Tính lãi suất hàng năm
      let endYearAmount = currentAmount + interest; // Số tiền sau khi cộng lãi suất
      data.push({
        year,
        amount: currentAmount.toFixed(2),
        rate: (interestRate * 100).toFixed(2),
        endYear: endYearAmount.toFixed(2),
      });
      currentAmount = endYearAmount;
      year++; // Tăng năm lên 1
    }

    setTableData(data);
  };

  return (
    <div className="container">
      <img src={investLogo} alt="Invest Logo" className="invest-image" />
      <h1>Invest</h1>
      <form onSubmit={calculateInvestment} className="invest-form">
        <label>Input Your Invest Money:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <label>Input Rate:</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
        <label>Input Your Goal:</label>
        <input
          type="number"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <button type="submit" className="invest-button">
          Calculate
        </button>
      </form>

      <table border="1" className="invest-table">
        <thead
          style={{
            backgroundColor: "#f2f2f2",
            fontWeight: "bold",
            color: "black",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <tr>
            <th>Year</th>
            <th>Money</th>
            <th>Rate (%)</th>
            <th>End Year</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 ? (
            tableData.map((row) => (
              <tr key={row.year}>
                <td>{row.year}</td>
                <td>${row.amount}</td>
                <td>{row.rate}%</td>
                <td>${row.endYear}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
