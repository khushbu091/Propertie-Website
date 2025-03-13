import '../Styling-css/AdminDashboard.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { FaEye, FaThumbsUp, FaComment, FaUser } from "react-icons/fa";


const data = [
  { month: "Jan", buying: 120, selling: 80 },
  { month: "Feb", buying: 60, selling: 100 },
  { month: "Mar", buying: 180, selling: 90 },
  { month: "Apr", buying: 150, selling: 110 },
  { month: "May", buying: 170, selling: 120 },
  { month: "Jun", buying: 140, selling: 130 },
];

const pieData = [
  { name: "Commercial", value: 400, color: "#E57373" },
  { name: "Residential", value: 300, color: "#FFA726" },
  { name: "Purchased", value: 500, color: "#64B5F6" },
  { name: "Rented", value: 350, color: "#7E57C2" },
];
  
  const AdminDashboard = () => {
    return (
      <>
      <div className="dashboard-container">
      {/* Top Section */}
      <div className="dashboard-header">Dashboard</div>
      
      {/* Cards Section */}
      <div className="dashboard-cards">
        <div className="card"> <h3>Properties</h3> <p>62</p> </div>
        <div className="card"> <h3>Sellers</h3> <p>20</p> </div>
        <div className="card"> <h3>Buyers</h3> <p>70</p> </div>
        <div className="card"> <h3>Transactions</h3> <p>$43M</p> </div>
      </div>
      
      {/* Charts Section */}
      <div className="dashboard-charts">
        <div className="chart-container">
          <h3>Total Properties</h3>
          <PieChart width={300} height={300}>
            <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </div>

        <div className="chart-container">
          <h3>Graph this year</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="buying" fill="#0c2d48" />
              <Bar dataKey="selling" fill="#FF9800" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Stats Cards */}
      <div className="dashboard-stats-cards">
        <div className="dashboard-stats-card">
          <FaEye className="dashboard-icon" />
          <p>15,453</p>
          <span>View</span>
        </div>
        <div className="dashboard-stats-card">
          <FaThumbsUp className="dashboard-icon" />
          <p>921</p>
          <span>Likes</span>
        </div>
        <div className="dashboard-stats-card">
          <FaComment className="dashboard-icon" />
          <p>215</p>
          <span>Comments</span>
        </div>
        <div className="dashboard-stats-card">
          <FaUser className="dashboard-icon" />
          <p>2,55</p>
          <span>Total Agent</span>
        </div>


      </div>

      {/* Revenue Card */}
      <div className="revenue-container">
        <div className="revenue-card">
          <h3>Total Revenue</h3>
          <h2>Total Sale</h2>
          <p>2,45,124</p>
          <div className="progress-circle">66</div>
          <p className="satisfaction-rate">Satisfaction Rate: 47% Average</p>
        
          <div className="revenue-details">
          <p><strong>240</strong> New Feedbacks</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "15%" }}></div>
          </div>
          <p><strong>50.5 Gb</strong> Traffic this month</p>
          <div className="progress-bar">
            <div className="progress blue" style={{ width: "5%" }}></div>
          </div>
        </div>        
        </div>
        {/* Browser Usage Chart */}
      <div className="browser-usage">
        <h3>Browser Usage</h3>
        <div className="pie-chart">
          <div className="pie" />
        </div>
        <table>
          <thead>
            <tr>
              <th>Browser</th>
              <th>Users</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Chrome</td><td>6985</td></tr>
            <tr><td>Other</td><td>2697</td></tr>
            <tr><td>Safari</td><td>3597</td></tr>
            <tr><td>Firefox</td><td>2145</td></tr>
            <tr><td>Opera</td><td>1854</td></tr>
            <tr><td>IE</td><td>154</td></tr>
          </tbody>
        </table>
      </div>
    </div>
       
      </div>

      
      </>
    );
  };
  
  export default AdminDashboard;
