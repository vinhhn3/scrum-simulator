import { sampleTeamMembers, sampleUserStories } from "../data/initialData";

/**
 * Initialize the simulation with sample data if localStorage is empty
 */
export const initializeSimulation = () => {
  // Check if data already exists
  const existingBacklog = localStorage.getItem("productBacklog");
  const existingTeam = localStorage.getItem("teamMembers");

  // If no data exists, initialize with sample data
  if (!existingBacklog) {
    localStorage.setItem("productBacklog", JSON.stringify(sampleUserStories));
  }

  if (!existingTeam) {
    localStorage.setItem("teamMembers", JSON.stringify(sampleTeamMembers));
  }

  // Initialize empty arrays for other data if not present
  if (!localStorage.getItem("sprintBacklog")) {
    localStorage.setItem("sprintBacklog", JSON.stringify([]));
  }

  if (!localStorage.getItem("sprints")) {
    localStorage.setItem("sprints", JSON.stringify([]));
  }

  if (!localStorage.getItem("retrospectives")) {
    localStorage.setItem("retrospectives", JSON.stringify([]));
  }

  if (!localStorage.getItem("velocity")) {
    localStorage.setItem("velocity", JSON.stringify([]));
  }

  if (!localStorage.getItem("increment")) {
    localStorage.setItem("increment", JSON.stringify([]));
  }

  if (!localStorage.getItem("currentSprint")) {
    localStorage.setItem("currentSprint", JSON.stringify(null));
  }

  if (!localStorage.getItem("userRole")) {
    localStorage.setItem("userRole", JSON.stringify(null));
  }
};
