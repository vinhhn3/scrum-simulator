import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScrumContext } from "../context/ScrumContext";
import "./SprintPlanning.css";

function SprintPlanning() {
  const { sprintBacklog, startSprint, currentSprint, teamMembers } =
    useScrumContext();

  const navigate = useNavigate();
  const [sprintGoal, setSprintGoal] = useState("");
  const [sprintDuration, setSprintDuration] = useState(10); // days

  const totalPoints = sprintBacklog.reduce(
    (sum, story) => sum + story.storyPoints,
    0
  );
  const totalCapacity = teamMembers
    .filter((m) => m.role === "Developer")
    .reduce((sum, m) => sum + m.capacity, 0);

  const handleStartSprint = () => {
    if (sprintBacklog.length === 0) {
      alert("Please add stories to the sprint backlog first!");
      return;
    }

    if (!sprintGoal.trim()) {
      alert("Please enter a sprint goal!");
      return;
    }

    const sprintData = {
      goal: sprintGoal,
      duration: sprintDuration,
      capacity: totalCapacity,
      plannedPoints: totalPoints,
    };

    startSprint(sprintData);
    navigate("/sprint");
  };

  if (currentSprint) {
    return (
      <div className="sprint-planning">
        <div className="already-started">
          <h1>🎯 Sprint Already In Progress</h1>
          <p>Sprint {currentSprint.sprintNumber} is currently active.</p>
          <p>Complete the current sprint before planning a new one.</p>
          <button className="btn-primary" onClick={() => navigate("/sprint")}>
            Go to Sprint Board
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="sprint-planning">
      <header className="page-header">
        <div>
          <h1>📅 Sprint Planning</h1>
          <p>Define your sprint goal and commit to stories</p>
        </div>
      </header>

      <div className="planning-grid">
        <div className="sprint-setup">
          <h2>Sprint Configuration</h2>

          <div className="form-group">
            <label>Sprint Goal *</label>
            <textarea
              value={sprintGoal}
              onChange={(e) => setSprintGoal(e.target.value)}
              placeholder="What is the main objective for this sprint?"
              rows="3"
            />
          </div>

          <div className="form-group">
            <label>Sprint Duration (days)</label>
            <select
              value={sprintDuration}
              onChange={(e) => setSprintDuration(parseInt(e.target.value))}
            >
              <option value="7">1 Week (7 days)</option>
              <option value="10">2 Weeks (10 days)</option>
              <option value="14">2 Weeks (14 days)</option>
              <option value="21">3 Weeks (21 days)</option>
            </select>
          </div>

          <div className="capacity-info">
            <h3>Team Capacity</h3>
            <div className="team-list">
              {teamMembers
                .filter((m) => m.role === "Developer")
                .map((member) => (
                  <div key={member.id} className="team-member">
                    <span>
                      {member.avatar} {member.name}
                    </span>
                    <span className="capacity">{member.capacity}h</span>
                  </div>
                ))}
            </div>
            <div className="total-capacity">
              <strong>Total Capacity:</strong> {totalCapacity} hours
            </div>
          </div>

          <div className="sprint-metrics">
            <div className="metric">
              <div className="metric-label">Stories Selected</div>
              <div className="metric-value">{sprintBacklog.length}</div>
            </div>
            <div className="metric">
              <div className="metric-label">Story Points</div>
              <div className="metric-value">{totalPoints}</div>
            </div>
            <div className="metric">
              <div className="metric-label">Avg Points/Story</div>
              <div className="metric-value">
                {sprintBacklog.length > 0
                  ? (totalPoints / sprintBacklog.length).toFixed(1)
                  : 0}
              </div>
            </div>
          </div>

          <button
            className="btn-start-sprint"
            onClick={handleStartSprint}
            disabled={sprintBacklog.length === 0 || !sprintGoal.trim()}
          >
            🚀 Start Sprint
          </button>
        </div>

        <div className="sprint-backlog-preview">
          <h2>Sprint Backlog ({sprintBacklog.length} stories)</h2>

          {sprintBacklog.length === 0 ? (
            <div className="empty-backlog">
              <p>No stories selected for this sprint.</p>
              <button
                className="btn-primary"
                onClick={() => navigate("/backlog")}
              >
                Go to Product Backlog
              </button>
            </div>
          ) : (
            <div className="stories-list">
              {sprintBacklog.map((story) => (
                <div key={story.id} className="story-item">
                  <div className="story-header">
                    <h4>{story.title}</h4>
                    <span className="points">{story.storyPoints} pts</span>
                  </div>
                  <p>{story.description}</p>

                  {story.acceptanceCriteria &&
                    story.acceptanceCriteria.length > 0 && (
                      <div className="criteria">
                        <strong>Acceptance Criteria:</strong>
                        <ul>
                          {story.acceptanceCriteria.map((criterion, idx) => (
                            <li key={idx}>{criterion}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="planning-tips">
        <h3>💡 Sprint Planning Tips</h3>
        <ul>
          <li>
            <strong>SMART Goal:</strong> Make your sprint goal Specific,
            Measurable, Achievable, Relevant, and Time-bound
          </li>
          <li>
            <strong>Capacity Planning:</strong> Don't over-commit. Consider team
            velocity and capacity
          </li>
          <li>
            <strong>Break Down Stories:</strong> Ensure stories can be completed
            within the sprint
          </li>
          <li>
            <strong>Definition of Done:</strong> Make sure all team members
            understand what "Done" means
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SprintPlanning;
