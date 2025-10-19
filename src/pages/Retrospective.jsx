import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScrumContext } from "../context/ScrumContext";
import { retrospectivePrompts } from "../data/initialData";
import "./Retrospective.css";

function Retrospective() {
  const { sprints, addRetrospective } = useScrumContext();
  const navigate = useNavigate();

  const lastSprint = sprints.length > 0 ? sprints[sprints.length - 1] : null;

  const [retro, setRetro] = useState({
    wentWell: "",
    notWell: "",
    improvements: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (lastSprint) {
      addRetrospective({
        sprintId: lastSprint.id,
        sprintNumber: lastSprint.sprintNumber,
        date: new Date().toISOString(),
        ...retro,
      });

      alert("Retrospective saved! Ready to plan next sprint.");
      navigate("/dashboard");
    }
  };

  const applySuggestion = (category) => {
    const suggestions = retrospectivePrompts[category];
    const random = suggestions[Math.floor(Math.random() * suggestions.length)];
    setRetro({ ...retro, [category]: random });
  };

  if (!lastSprint) {
    return (
      <div className="retrospective">
        <div className="no-sprint">
          <h1>💭 No Sprint to Reflect On</h1>
          <p>Complete a sprint to perform a retrospective</p>
          <button className="btn-primary" onClick={() => navigate("/planning")}>
            Plan New Sprint
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="retrospective">
      <header className="page-header">
        <div>
          <h1>💭 Sprint Retrospective</h1>
          <p>
            Reflect on Sprint {lastSprint.sprintNumber} and identify
            improvements
          </p>
        </div>
      </header>

      <div className="retro-intro">
        <h2>What is a Sprint Retrospective?</h2>
        <p>
          The Sprint Retrospective is an opportunity for the Scrum Team to
          inspect itself and create a plan for improvements to be enacted during
          the next Sprint. It occurs after the Sprint Review and prior to the
          next Sprint Planning.
        </p>
      </div>

      <div className="sprint-summary">
        <h3>Sprint {lastSprint.sprintNumber} Summary</h3>
        <div className="summary-stats">
          <div className="stat">
            <span className="stat-label">Completed Points:</span>
            <span className="stat-value">
              {lastSprint.completedPoints || 0}
            </span>
          </div>
          <div className="stat">
            <span className="stat-label">Completion Rate:</span>
            <span className="stat-value">
              {lastSprint.plannedPoints > 0
                ? (
                    (lastSprint.completedPoints / lastSprint.plannedPoints) *
                    100
                  ).toFixed(0)
                : 0}
              %
            </span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="retro-form">
        <div className="retro-section went-well">
          <div className="section-header">
            <h3>😊 What Went Well?</h3>
            <button
              type="button"
              className="btn-suggestion"
              onClick={() => applySuggestion("wentWell")}
            >
              💡 Suggestion
            </button>
          </div>
          <textarea
            value={retro.wentWell}
            onChange={(e) => setRetro({ ...retro, wentWell: e.target.value })}
            placeholder="What positive things happened during this sprint? What should we keep doing?"
            rows="5"
            required
          />
        </div>

        <div className="retro-section not-well">
          <div className="section-header">
            <h3>😟 What Didn't Go Well?</h3>
            <button
              type="button"
              className="btn-suggestion"
              onClick={() => applySuggestion("notWell")}
            >
              💡 Suggestion
            </button>
          </div>
          <textarea
            value={retro.notWell}
            onChange={(e) => setRetro({ ...retro, notWell: e.target.value })}
            placeholder="What challenges or problems did we face? What slowed us down?"
            rows="5"
            required
          />
        </div>

        <div className="retro-section improvements">
          <div className="section-header">
            <h3>🚀 What Can We Improve?</h3>
            <button
              type="button"
              className="btn-suggestion"
              onClick={() => applySuggestion("improvements")}
            >
              💡 Suggestion
            </button>
          </div>
          <textarea
            value={retro.improvements}
            onChange={(e) =>
              setRetro({ ...retro, improvements: e.target.value })
            }
            placeholder="What specific actions can we take to improve in the next sprint?"
            rows="5"
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-complete-retro">
            Complete Retrospective
          </button>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => navigate("/dashboard")}
          >
            Cancel
          </button>
        </div>
      </form>

      <div className="retro-tips">
        <h3>💡 Retrospective Best Practices</h3>
        <ul>
          <li>
            <strong>Safe Environment:</strong> Create a judgment-free space for
            honest feedback
          </li>
          <li>
            <strong>Be Specific:</strong> Focus on specific events and examples
            rather than generalizations
          </li>
          <li>
            <strong>Actionable Items:</strong> Ensure improvements are concrete
            and achievable
          </li>
          <li>
            <strong>Follow Up:</strong> Review previous retrospective actions in
            the next meeting
          </li>
          <li>
            <strong>Time-boxed:</strong> Keep the meeting focused and within the
            allocated time
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Retrospective;
