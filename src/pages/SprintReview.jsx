import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScrumContext } from "../context/ScrumContext";
import "./SprintReview.css";

function SprintReview() {
  const { currentSprint, sprintBacklog, endSprint } = useScrumContext();

  const navigate = useNavigate();
  const [feedback, setFeedback] = useState({});

  if (!currentSprint) {
    return (
      <div className="sprint-review">
        <div className="no-sprint">
          <h1>🎯 No Sprint to Review</h1>
          <p>Start and complete a sprint to perform a review</p>
          <button className="btn-primary" onClick={() => navigate("/planning")}>
            Plan New Sprint
          </button>
        </div>
      </div>
    );
  }

  const doneStories = sprintBacklog.filter((s) => s.status === "Done");
  const incompleteStories = sprintBacklog.filter((s) => s.status !== "Done");

  const completedPoints = doneStories.reduce(
    (sum, s) => sum + s.storyPoints,
    0
  );
  const totalPoints = sprintBacklog.reduce((sum, s) => sum + s.storyPoints, 0);
  const completionRate =
    totalPoints > 0 ? ((completedPoints / totalPoints) * 100).toFixed(1) : 0;

  const handleAcceptStory = (storyId, accepted) => {
    setFeedback({
      ...feedback,
      [storyId]: accepted ? "Accepted" : "Needs Revision",
    });
  };

  const handleEndSprint = () => {
    endSprint();
    navigate("/retrospective");
  };

  return (
    <div className="sprint-review">
      <header className="page-header">
        <div>
          <h1>🎯 Sprint {currentSprint.sprintNumber} Review</h1>
          <p>Review completed work and gather feedback</p>
        </div>
      </header>

      <div className="review-summary">
        <h2>Sprint Summary</h2>
        <div className="summary-grid">
          <div className="summary-card">
            <div className="summary-icon">✅</div>
            <div className="summary-content">
              <div className="summary-value">{doneStories.length}</div>
              <div className="summary-label">Stories Completed</div>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-icon">⚡</div>
            <div className="summary-content">
              <div className="summary-value">{completedPoints}</div>
              <div className="summary-label">Points Completed</div>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-icon">📊</div>
            <div className="summary-content">
              <div className="summary-value">{completionRate}%</div>
              <div className="summary-label">Completion Rate</div>
            </div>
          </div>

          <div className="summary-card">
            <div className="summary-icon">🎯</div>
            <div className="summary-content">
              <div className="summary-value">{incompleteStories.length}</div>
              <div className="summary-label">Carried Over</div>
            </div>
          </div>
        </div>

        <div className="sprint-goal-review">
          <h3>Sprint Goal</h3>
          <p>{currentSprint.goal}</p>
          <div className="goal-status">
            {completionRate >= 80 ? (
              <span className="status-success">✓ Goal Achieved</span>
            ) : completionRate >= 50 ? (
              <span className="status-partial">⚠ Partially Achieved</span>
            ) : (
              <span className="status-failed">✗ Goal Not Met</span>
            )}
          </div>
        </div>
      </div>

      <div className="review-sections">
        <div className="review-section">
          <h2>✅ Completed Stories ({doneStories.length})</h2>
          {doneStories.length === 0 ? (
            <p className="empty-message">
              No stories were completed this sprint
            </p>
          ) : (
            <div className="stories-list">
              {doneStories.map((story) => (
                <div key={story.id} className="story-review-card">
                  <div className="story-header">
                    <h3>{story.title}</h3>
                    <span className="points">{story.storyPoints} pts</span>
                  </div>

                  <p>{story.description}</p>

                  {story.acceptanceCriteria &&
                    story.acceptanceCriteria.length > 0 && (
                      <div className="criteria-checklist">
                        <strong>Acceptance Criteria:</strong>
                        <ul>
                          {story.acceptanceCriteria.map((criterion, idx) => (
                            <li key={idx} className="completed">
                              <span className="check">✓</span> {criterion}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  <div className="story-actions">
                    <button
                      className={`btn-accept ${
                        feedback[story.id] === "Accepted" ? "active" : ""
                      }`}
                      onClick={() => handleAcceptStory(story.id, true)}
                    >
                      ✓ Accept
                    </button>
                    <button
                      className={`btn-reject ${
                        feedback[story.id] === "Needs Revision" ? "active" : ""
                      }`}
                      onClick={() => handleAcceptStory(story.id, false)}
                    >
                      ✗ Needs Revision
                    </button>
                  </div>

                  {feedback[story.id] && (
                    <div
                      className={`feedback-badge ${
                        feedback[story.id] === "Accepted"
                          ? "accepted"
                          : "rejected"
                      }`}
                    >
                      {feedback[story.id]}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="review-section">
          <h2>⚠️ Incomplete Stories ({incompleteStories.length})</h2>
          {incompleteStories.length === 0 ? (
            <p className="success-message">
              All stories completed! Great work! 🎉
            </p>
          ) : (
            <div className="stories-list">
              {incompleteStories.map((story) => (
                <div key={story.id} className="story-incomplete-card">
                  <div className="story-header">
                    <h3>{story.title}</h3>
                    <span className="status-badge">{story.status}</span>
                  </div>
                  <p>{story.description}</p>
                  <p className="note">
                    This story will return to the product backlog
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="review-actions">
        <button className="btn-end-sprint" onClick={handleEndSprint}>
          Complete Review & Continue to Retrospective
        </button>
      </div>

      <div className="review-tips">
        <h3>💡 Sprint Review Tips</h3>
        <ul>
          <li>
            <strong>Demo:</strong> In a real sprint review, the team would demo
            completed features to stakeholders
          </li>
          <li>
            <strong>Feedback:</strong> Gather feedback from Product Owner and
            stakeholders
          </li>
          <li>
            <strong>Increment:</strong> Only accept work that meets the
            Definition of Done
          </li>
          <li>
            <strong>Backlog:</strong> Update the product backlog based on
            feedback and new insights
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SprintReview;
