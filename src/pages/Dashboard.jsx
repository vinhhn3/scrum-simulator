import { useNavigate } from "react-router-dom";
import { useScrumContext } from "../context/ScrumContext";
import "./Dashboard.css";

function Dashboard() {
  const {
    currentSprint,
    sprints,
    velocity,
    productBacklog,
    sprintBacklog,
    increment,
    userRole,
    setUserRole,
  } = useScrumContext();

  const navigate = useNavigate();

  // Calculate statistics
  const totalStories = productBacklog.length + sprintBacklog.length;
  const completedStories = increment.length;
  const avgVelocity =
    velocity.length > 0
      ? (
          velocity.reduce((sum, v) => sum + v.points, 0) / velocity.length
        ).toFixed(1)
      : 0;
  const totalSprints = sprints.length + (currentSprint ? 1 : 0);

  const handleRoleSelect = (role) => {
    setUserRole(role);
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>🏃‍♂️ Scrum Simulator</h1>
        <p className="subtitle">Learn Scrum through Interactive Simulation</p>
      </header>

      {!userRole ? (
        <div className="role-selection">
          <h2>Select Your Role</h2>
          <p>Choose a role to begin your Scrum learning journey</p>

          <div className="role-cards">
            <div
              className="role-card"
              onClick={() => handleRoleSelect("Product Owner")}
            >
              <div className="role-icon">👨‍💼</div>
              <h3>Product Owner</h3>
              <p>Manage and prioritize the product backlog</p>
              <ul>
                <li>Define user stories</li>
                <li>Set priorities</li>
                <li>Accept/reject work</li>
              </ul>
            </div>

            <div
              className="role-card"
              onClick={() => handleRoleSelect("Scrum Master")}
            >
              <div className="role-icon">👩‍💼</div>
              <h3>Scrum Master</h3>
              <p>Facilitate Scrum events and remove impediments</p>
              <ul>
                <li>Run ceremonies</li>
                <li>Coach the team</li>
                <li>Track metrics</li>
              </ul>
            </div>

            <div
              className="role-card"
              onClick={() => handleRoleSelect("Developer")}
            >
              <div className="role-icon">👩‍💻</div>
              <h3>Developer</h3>
              <p>Build features and complete sprint tasks</p>
              <ul>
                <li>Estimate stories</li>
                <li>Complete tasks</li>
                <li>Collaborate daily</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="current-role">
            <span>
              Current Role: <strong>{userRole}</strong>
            </span>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">📊</div>
              <div className="stat-content">
                <h3>{totalStories}</h3>
                <p>Total Stories</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">✅</div>
              <div className="stat-content">
                <h3>{completedStories}</h3>
                <p>Completed</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">⚡</div>
              <div className="stat-content">
                <h3>{avgVelocity}</h3>
                <p>Avg Velocity</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">🔄</div>
              <div className="stat-content">
                <h3>{totalSprints}</h3>
                <p>Sprints</p>
              </div>
            </div>
          </div>

          {currentSprint ? (
            <div className="current-sprint-info">
              <h2>🎯 Current Sprint: Sprint {currentSprint.sprintNumber}</h2>
              <p className="sprint-goal">
                <strong>Goal:</strong> {currentSprint.goal}
              </p>
              <div className="sprint-progress">
                <p>Stories in Sprint: {sprintBacklog.length}</p>
                <p>
                  Status: <span className="status-active">Active</span>
                </p>
              </div>
              <button
                className="btn-primary"
                onClick={() => navigate("/sprint")}
              >
                Go to Sprint Board
              </button>
            </div>
          ) : (
            <div className="no-sprint">
              <h2>No Active Sprint</h2>
              <p>
                Start by managing your product backlog or planning a new sprint
              </p>
              <div className="action-buttons">
                <button
                  className="btn-primary"
                  onClick={() => navigate("/backlog")}
                >
                  View Product Backlog
                </button>
                <button
                  className="btn-secondary"
                  onClick={() => navigate("/planning")}
                >
                  Plan New Sprint
                </button>
              </div>
            </div>
          )}

          <div className="quick-links">
            <h2>Quick Links</h2>
            <div className="links-grid">
              <button
                className="link-card"
                onClick={() => navigate("/backlog")}
              >
                <span className="link-icon">📋</span>
                <span>Product Backlog</span>
              </button>
              <button className="link-card" onClick={() => navigate("/sprint")}>
                <span className="link-icon">🏃</span>
                <span>Sprint Board</span>
              </button>
              <button
                className="link-card"
                onClick={() => navigate("/planning")}
              >
                <span className="link-icon">📅</span>
                <span>Sprint Planning</span>
              </button>
              <button className="link-card" onClick={() => navigate("/review")}>
                <span className="link-icon">🎯</span>
                <span>Sprint Review</span>
              </button>
              <button
                className="link-card"
                onClick={() => navigate("/retrospective")}
              >
                <span className="link-icon">💭</span>
                <span>Retrospective</span>
              </button>
              <button
                className="link-card"
                onClick={() => navigate("/metrics")}
              >
                <span className="link-icon">📈</span>
                <span>Metrics</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
