import { NavLink } from "react-router-dom";
import { useScrumContext } from "../context/ScrumContext";
import "./Navigation.css";

function Navigation() {
  const { resetSimulation } = useScrumContext();

  const handleReset = () => {
    if (
      window.confirm(
        "Are you sure you want to reset the entire simulation? This cannot be undone."
      )
    ) {
      resetSimulation();
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-brand">
        <h1>🏃‍♂️ Scrum Simulator</h1>
      </div>

      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/backlog"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Product Backlog
        </NavLink>
        <NavLink
          to="/planning"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Sprint Planning
        </NavLink>
        <NavLink
          to="/sprint"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Sprint Board
        </NavLink>
        <NavLink
          to="/review"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Sprint Review
        </NavLink>
        <NavLink
          to="/retrospective"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Retrospective
        </NavLink>
        <NavLink
          to="/metrics"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Metrics
        </NavLink>
      </div>

      <button className="btn-reset" onClick={handleReset}>
        🔄 Reset
      </button>
    </nav>
  );
}

export default Navigation;
