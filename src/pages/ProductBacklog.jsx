import { useState } from "react";
import { useScrumContext } from "../context/ScrumContext";
import "./ProductBacklog.css";

function ProductBacklog() {
  const {
    productBacklog,
    setProductBacklog,
    addToProductBacklog,
    moveToSprintBacklog,
    currentSprint,
    loadSampleData,
  } = useScrumContext();
  const [showAddForm, setShowAddForm] = useState(false);
  const [newStory, setNewStory] = useState({
    title: "",
    description: "",
    priority: 1,
    storyPoints: 0,
    status: "To Do",
    acceptanceCriteria: [""],
  });

  const handleAddStory = (e) => {
    e.preventDefault();
    addToProductBacklog({
      ...newStory,
      acceptanceCriteria: newStory.acceptanceCriteria.filter(
        (c) => c.trim() !== ""
      ),
      tasks: [],
    });
    setNewStory({
      title: "",
      description: "",
      priority: 1,
      storyPoints: 0,
      status: "To Do",
      acceptanceCriteria: [""],
    });
    setShowAddForm(false);
  };

  const handleDragStart = (e, storyId) => {
    e.dataTransfer.setData("storyId", storyId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    const storyId = parseInt(e.dataTransfer.getData("storyId"));
    const draggedStoryIndex = productBacklog.findIndex((s) => s.id === storyId);

    if (draggedStoryIndex !== -1) {
      const newBacklog = [...productBacklog];
      const [draggedStory] = newBacklog.splice(draggedStoryIndex, 1);
      newBacklog.splice(targetIndex, 0, draggedStory);

      // Update priorities based on new order
      const updatedBacklog = newBacklog.map((story, index) => ({
        ...story,
        priority: index + 1,
      }));

      setProductBacklog(updatedBacklog);
    }
  };

  const addCriteriaField = () => {
    setNewStory({
      ...newStory,
      acceptanceCriteria: [...newStory.acceptanceCriteria, ""],
    });
  };

  const updateCriteria = (index, value) => {
    const updated = [...newStory.acceptanceCriteria];
    updated[index] = value;
    setNewStory({ ...newStory, acceptanceCriteria: updated });
  };

  const removeCriteria = (index) => {
    const updated = newStory.acceptanceCriteria.filter((_, i) => i !== index);
    setNewStory({ ...newStory, acceptanceCriteria: updated });
  };

  return (
    <div className="product-backlog">
      <header className="page-header">
        <div>
          <h1>📋 Product Backlog</h1>
          <p>Manage and prioritize user stories</p>
        </div>
        <div className="header-actions">
          <button
            className="btn-secondary"
            onClick={() => {
              if (
                window.confirm(
                  "Load sample user stories? This will replace your current backlog."
                )
              ) {
                loadSampleData();
              }
            }}
          >
            📚 Load Sample Stories
          </button>
          <button
            className="btn-primary"
            onClick={() => setShowAddForm(!showAddForm)}
          >
            {showAddForm ? "✕ Cancel" : "+ Add User Story"}
          </button>
        </div>
      </header>

      {showAddForm && (
        <div className="add-story-form">
          <h2>Create New User Story</h2>
          <form onSubmit={handleAddStory}>
            <div className="form-group">
              <label>Title *</label>
              <input
                type="text"
                value={newStory.title}
                onChange={(e) =>
                  setNewStory({ ...newStory, title: e.target.value })
                }
                placeholder="e.g., User Login Feature"
                required
              />
            </div>

            <div className="form-group">
              <label>Description *</label>
              <textarea
                value={newStory.description}
                onChange={(e) =>
                  setNewStory({ ...newStory, description: e.target.value })
                }
                placeholder="As a [user type], I want to [action] so that [benefit]"
                rows="3"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Story Points</label>
                <select
                  value={newStory.storyPoints}
                  onChange={(e) =>
                    setNewStory({
                      ...newStory,
                      storyPoints: parseInt(e.target.value),
                    })
                  }
                >
                  <option value="0">Not Estimated</option>
                  <option value="1">1 - Trivial</option>
                  <option value="2">2 - Very Small</option>
                  <option value="3">3 - Small</option>
                  <option value="5">5 - Medium</option>
                  <option value="8">8 - Large</option>
                  <option value="13">13 - Very Large</option>
                  <option value="21">21 - Huge</option>
                </select>
              </div>

              <div className="form-group">
                <label>Priority</label>
                <input
                  type="number"
                  min="1"
                  value={newStory.priority}
                  onChange={(e) =>
                    setNewStory({
                      ...newStory,
                      priority: parseInt(e.target.value),
                    })
                  }
                />
              </div>
            </div>

            <div className="form-group">
              <label>Acceptance Criteria</label>
              {newStory.acceptanceCriteria.map((criteria, index) => (
                <div key={index} className="criteria-input">
                  <input
                    type="text"
                    value={criteria}
                    onChange={(e) => updateCriteria(index, e.target.value)}
                    placeholder="Enter acceptance criterion"
                  />
                  {newStory.acceptanceCriteria.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeCriteria(index)}
                      className="btn-remove"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addCriteriaField}
                className="btn-add-criteria"
              >
                + Add Criterion
              </button>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary">
                Create Story
              </button>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="btn-secondary"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="backlog-info">
        <p>
          💡 <strong>Tip:</strong> Drag and drop stories to reorder priority.
          Higher priority items appear first.
        </p>
        <p>
          Total Stories: <strong>{productBacklog.length}</strong> | Total
          Points:{" "}
          <strong>
            {productBacklog.reduce((sum, s) => sum + s.storyPoints, 0)}
          </strong>
        </p>
      </div>

      <div className="backlog-list">
        {productBacklog.length === 0 ? (
          <div className="empty-state">
            <h2>📭 No Stories Yet</h2>
            <p>Start by adding user stories to your product backlog</p>
          </div>
        ) : (
          productBacklog.map((story, index) => (
            <div
              key={story.id}
              className="story-card"
              draggable
              onDragStart={(e) => handleDragStart(e, story.id)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
            >
              <div className="story-header">
                <div className="story-priority">#{story.priority}</div>
                <div className="story-points">{story.storyPoints} pts</div>
              </div>

              <h3>{story.title}</h3>
              <p className="story-description">{story.description}</p>

              {story.acceptanceCriteria &&
                story.acceptanceCriteria.length > 0 && (
                  <div className="acceptance-criteria">
                    <strong>Acceptance Criteria:</strong>
                    <ul>
                      {story.acceptanceCriteria.map((criterion, idx) => (
                        <li key={idx}>{criterion}</li>
                      ))}
                    </ul>
                  </div>
                )}

              <div className="story-actions">
                <span className="story-status">{story.status}</span>
                {!currentSprint && (
                  <button
                    className="btn-move"
                    onClick={() => moveToSprintBacklog(story.id)}
                  >
                    Move to Sprint →
                  </button>
                )}
                {currentSprint && (
                  <span className="note">
                    Complete current sprint to add stories
                  </span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductBacklog;
