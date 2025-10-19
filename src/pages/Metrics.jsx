import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useScrumContext } from "../context/ScrumContext";
import "./Metrics.css";

function Metrics() {
  const { sprints, velocity, currentSprint, sprintBacklog } = useScrumContext();

  // Prepare velocity chart data
  const velocityData = velocity.map((v) => ({
    sprint: `Sprint ${v.sprint}`,
    points: v.points,
  }));

  // Prepare burndown chart data for current sprint
  const getBurndownData = () => {
    if (!currentSprint) return [];

    const totalPoints = sprintBacklog.reduce(
      (sum, s) => sum + s.storyPoints,
      0
    );
    const completedPoints = sprintBacklog
      .filter((s) => s.status === "Done")
      .reduce((sum, s) => sum + s.storyPoints, 0);
    const remainingPoints = totalPoints - completedPoints;

    // Ideal burndown line
    const idealBurndown = [];
    const pointsPerDay = totalPoints / currentSprint.duration;

    for (let day = 0; day <= currentSprint.duration; day++) {
      idealBurndown.push({
        day: `Day ${day}`,
        ideal: Math.max(0, totalPoints - pointsPerDay * day),
        actual:
          day === 0
            ? totalPoints
            : day <= currentSprint.currentDay
            ? remainingPoints
            : null,
      });
    }

    return idealBurndown;
  };

  const burndownData = getBurndownData();

  // Calculate sprint statistics
  const totalSprints = sprints.length;
  const avgVelocity =
    velocity.length > 0
      ? (
          velocity.reduce((sum, v) => sum + v.points, 0) / velocity.length
        ).toFixed(1)
      : 0;

  const totalCompleted = velocity.reduce((sum, v) => sum + v.points, 0);

  return (
    <div className="metrics">
      <header className="page-header">
        <div>
          <h1>📈 Metrics & Analytics</h1>
          <p>Track team performance and sprint progress</p>
        </div>
      </header>

      <div className="metrics-overview">
        <div className="metric-card">
          <div className="metric-icon">🔄</div>
          <div className="metric-content">
            <h3>{totalSprints}</h3>
            <p>Total Sprints</p>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon">⚡</div>
          <div className="metric-content">
            <h3>{avgVelocity}</h3>
            <p>Avg Velocity</p>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon">✅</div>
          <div className="metric-content">
            <h3>{totalCompleted}</h3>
            <p>Total Points Completed</p>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon">📊</div>
          <div className="metric-content">
            <h3>
              {sprints.length > 0
                ? (totalCompleted / sprints.length).toFixed(1)
                : 0}
            </h3>
            <p>Points Per Sprint</p>
          </div>
        </div>
      </div>

      {currentSprint && burndownData.length > 0 && (
        <div className="chart-container">
          <h2>🔥 Sprint Burndown Chart</h2>
          <p className="chart-description">
            Track remaining work vs. ideal progress in the current sprint
          </p>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={burndownData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis
                  label={{
                    value: "Story Points",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="ideal"
                  stroke="#95a5a6"
                  strokeDasharray="5 5"
                  name="Ideal Burndown"
                />
                <Line
                  type="monotone"
                  dataKey="actual"
                  stroke="#3498db"
                  strokeWidth={2}
                  name="Actual Progress"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {velocityData.length > 0 && (
        <div className="chart-container">
          <h2>⚡ Velocity Chart</h2>
          <p className="chart-description">
            Story points completed per sprint - helps predict future capacity
          </p>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={velocityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="sprint" />
                <YAxis
                  label={{
                    value: "Story Points",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <Tooltip />
                <Legend />
                <Bar dataKey="points" fill="#27ae60" name="Completed Points" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {velocity.length > 1 && (
            <div className="velocity-insights">
              <h3>Insights</h3>
              <ul>
                <li>
                  Average Velocity: <strong>{avgVelocity} points</strong>
                </li>
                <li>
                  Highest Velocity:{" "}
                  <strong>
                    {Math.max(...velocity.map((v) => v.points))} points
                  </strong>
                </li>
                <li>
                  Lowest Velocity:{" "}
                  <strong>
                    {Math.min(...velocity.map((v) => v.points))} points
                  </strong>
                </li>
                <li>
                  Trend:{" "}
                  {velocity.length >= 2 &&
                  velocity[velocity.length - 1].points >
                    velocity[velocity.length - 2].points
                    ? "📈 Increasing"
                    : "📉 Decreasing"}
                </li>
              </ul>
            </div>
          )}
        </div>
      )}

      {sprints.length === 0 && (
        <div className="no-data">
          <h2>📊 No Data Yet</h2>
          <p>Complete your first sprint to see metrics and charts</p>
        </div>
      )}

      <div className="metrics-info">
        <h3>💡 Understanding Metrics</h3>
        <div className="info-grid">
          <div className="info-card">
            <h4>Burndown Chart</h4>
            <p>
              Shows remaining work (story points) over time. The ideal line
              represents perfect progress, while the actual line shows your
              team's real progress.
            </p>
          </div>
          <div className="info-card">
            <h4>Velocity</h4>
            <p>
              Measures story points completed per sprint. Helps predict how much
              work the team can complete in future sprints.
            </p>
          </div>
          <div className="info-card">
            <h4>Why Track These?</h4>
            <p>
              Metrics help teams improve predictability, identify bottlenecks,
              and make data-driven decisions for better sprint planning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Metrics;
