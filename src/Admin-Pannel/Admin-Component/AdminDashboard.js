import '../Styling-css/AdminDashboard.css';
import { LineChart, Line, PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from "recharts";


const lineData = [
    { name: "Jan", google: 50, facebook: 40 },
    { name: "Feb", google: 150, facebook: 100 },
    { name: "Mar", google: 175, facebook: 100 },
    { name: "Apr", google: 160, facebook: 120 },
    { name: "May", google: 140, facebook: 250 },
    { name: "Jun", google: 130, facebook: 200 },
    { name: "Jul", google: 170, facebook: 180 },
    { name: "Aug", google: 100, facebook: 220 },
  ];
  
  const pieData = [
    { name: "Direct", value: 38, fill: "#ff6b6b" },
    { name: "Organic", value: 22, fill: "#4caf50" },
    { name: "Paid", value: 12, fill: "#42a5f5" },
    { name: "Social", value: 28, fill: "#ffa726" },
  ];
  
  const AdminDashboard = () => {
    return (
      <div className="dashboard-container">
        <div className="stats">
          <div className="dashboard-card">
            <h4>Sales</h4>
            <p>$230,220</p>
            <span>+55% last month</span>
          </div>
          <div className="dashboard-card">
            <h4>Customers</h4>
            <p>$3,200</p>
            <span>+12% last month</span>
          </div>
          <div className="dashboard-card">
            <h4>Avg Revenue</h4>
            <p>$2,300</p>
            <span>+210% last month</span>
          </div>
        </div>
  
        <div className="charts">
          <div className="line-chart">
            <h4>Revenue</h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                <Line type="monotone" dataKey="google" stroke="#4caf50" strokeWidth={2} dot={{ r: 5 }} />
                <Line type="monotone" dataKey="facebook" stroke="#ffa726" strokeWidth={2} dot={{ r: 5 }} />
                <Tooltip />
                <Legend />
              </LineChart>
            </ResponsiveContainer>
          </div>
  
          <div className="pie-chart">
            <h4>Website Visitors</h4>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={80} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
  
        <div className="top-products">
        <h4>Top Selling Product</h4>
        <table className="product-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Orders</th>
              <th>Price</th>
              <th>Ads Spent</th>
              <th>Refunds</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nike v22</td>
              <td>8000</td>
              <td>$130</td>
              <td>$9,500</td>
              <td>13</td>
            </tr>
            <tr>
              <td>Instax Camera</td>
              <td>3000</td>
              <td>$45</td>
              <td>$4,500</td>
              <td>18</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    );
  };
  
  export default AdminDashboard;
