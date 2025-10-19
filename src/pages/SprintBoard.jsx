import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScrumContext } from "../context/ScrumContext";
import "./SprintBoard.css";

function SprintBoard() {
  const {
    currentSprint,
    sprintBacklog,
    setSprintBacklog,
    currentDay,
    setCurrentDay,
  } = useScrumContext();

  const navigate = useNavigate();
  const [selectedStory, setSelectedStory] = useState(null);

  if (!currentSprint) {
    return (
      <div className="sprint-board">
        <div className="no-sprint">
          <h1>🏃 No Active Sprint</h1>
          <p>Start a sprint to begin working on stories</p>
          <button className="btn-primary" onClick={() => navigate("/planning")}>
            Plan New Sprint
          </button>
        </div>
      </div>
    );
  }

  const todoStories = sprintBacklog.filter((s) => s.status === "To Do");
  const inProgressStories = sprintBacklog.filter(
    (s) => s.status === "In Progress"
  );
  const doneStories = sprintBacklog.filter((s) => s.status === "Done");

  const updateStoryStatus = (storyId, newStatus) => {
    setSprintBacklog(
      sprintBacklog.map((story) =>
        story.id === storyId ? { ...story, status: newStatus } : story
      )
    );
  };

  const handleDragStart = (e, storyId) => {
    e.dataTransfer.setData("storyId", storyId.toString());
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, newStatus) => {
    e.preventDefault();
    const storyId = parseInt(e.dataTransfer.getData("storyId"));
    updateStoryStatus(storyId, newStatus);
  };

  const simulateDay = () => {
    // Simple simulation: randomly progress some stories
    const updatedBacklog = sprintBacklog.map((story) => {
      if (story.status === "To Do" && Math.random() > 0.7) {
        return { ...story, status: "In Progress" };
      }
      if (story.status === "In Progress" && Math.random() > 0.6) {
        return { ...story, status: "Done" };
      }
      return story;
    });

    setSprintBacklog(updatedBacklog);
    setCurrentDay(currentDay + 1);
  };

  const completedPoints = doneStories.reduce(
    (sum, s) => sum + s.storyPoints,
    0
  );
  const totalPoints = sprintBacklog.reduce((sum, s) => sum + s.storyPoints, 0);
  const progress =
    totalPoints > 0 ? ((completedPoints / totalPoints) * 100).toFixed(0) : 0;

  return (
    <div className="sprint-board">
      <header className="sprint-header">
        <div>
          <h1>🏃 Sprint {currentSprint.sprintNumber}</h1>
          <p className="sprint-goal">Goal: {currentSprint.goal}</p>
        </div>
        <div className="sprint-info">
          <div className="info-item">
            <span className="label">Day:</span>
            <span className="value">
              {currentDay} / {currentSprint.duration}
            </span>
          </div>
          <div className="info-item">
            <span className="label">Progress:</span>
            <span className="value">{progress}%</span>
          </div>
          <div className="info-item">
            <span className="label">Points:</span>
            <span className="value">
              {completedPoints} / {totalPoints}
            </span>
          </div>
        </div>
      </header>

      <div className="sprint-actions">
        <button className="btn-simulate" onClick={simulateDay}>
          ⏭️ Simulate Day
        </button>
        <button className="btn-secondary" onClick={() => navigate("/review")}>
          End Sprint & Review
        </button>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="board-columns">
        <div className="column">
          <div className="column-header todo">
            <h2>📋 To Do ({todoStories.length})</h2>
          </div>
          <div
            className="column-content"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "To Do")}
          >
            {todoStories.map((story) => (
              <div
                key={story.id}
                className="story-card"
                draggable
                onDragStart={(e) => handleDragStart(e, story.id)}
                onClick={() => setSelectedStory(story)}
              >
                <h3>{story.title}</h3>
                <p>{story.description}</p>
                <div className="story-footer">
                  <span className="points">{story.storyPoints} pts</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="column">
          <div className="column-header in-progress">
            <h2>🔄 In Progress ({inProgressStories.length})</h2>
          </div>
          <div
            className="column-content"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "In Progress")}
          >
            {inProgressStories.map((story) => (
              <div
                key={story.id}
                className="story-card"
                draggable
                onDragStart={(e) => handleDragStart(e, story.id)}
                onClick={() => setSelectedStory(story)}
              >
                <h3>{story.title}</h3>
                <p>{story.description}</p>
                <div className="story-footer">
                  <span className="points">{story.storyPoints} pts</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="column">
          <div className="column-header done">
            <h2>✅ Done ({doneStories.length})</h2>
          </div>
          <div
            className="column-content"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "Done")}
          >
            {doneStories.map((story) => (
              <div
                key={story.id}
                className="story-card"
                draggable
                onDragStart={(e) => handleDragStart(e, story.id)}
                onClick={() => setSelectedStory(story)}
              >
                <h3>{story.title}</h3>
                <p>{story.description}</p>
                <div className="story-footer">
                  <span className="points">{story.storyPoints} pts</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedStory && (
        <div className="modal-overlay" onClick={() => setSelectedStory(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedStory(null)}
            >
              ✕
            </button>
            <h2>{selectedStory.title}</h2>
            <p className="story-description">{selectedStory.description}</p>

            <div className="story-details">
              <div className="detail-item">
                <strong>Story Points:</strong> {selectedStory.storyPoints}
              </div>
              <div className="detail-item">
                <strong>Status:</strong> {selectedStory.status}
              </div>
            </div>

            {selectedStory.acceptanceCriteria &&
              selectedStory.acceptanceCriteria.length > 0 && (
                <div className="acceptance-criteria">
                  <h3>Acceptance Criteria</h3>
                  <ul>
                    {selectedStory.acceptanceCriteria.map((criterion, idx) => (
                      <li key={idx}>{criterion}</li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SprintBoard;
