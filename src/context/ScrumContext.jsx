import { createContext, useContext, useEffect, useState } from "react";
import { sampleTeamMembers, sampleUserStories } from "../data/initialData";

const ScrumContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useScrumContext = () => {
  const context = useContext(ScrumContext);
  if (!context) {
    throw new Error("useScrumContext must be used within ScrumProvider");
  }
  return context;
};

export const ScrumProvider = ({ children }) => {
  // Load initial state from localStorage or use defaults
  const loadFromStorage = (key, defaultValue) => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  };

  // Product Backlog - all user stories
  const [productBacklog, setProductBacklog] = useState(() =>
    loadFromStorage("productBacklog", [])
  );

  // Sprint Backlog - stories selected for current sprint
  const [sprintBacklog, setSprintBacklog] = useState(() =>
    loadFromStorage("sprintBacklog", [])
  );

  // Current Sprint information
  const [currentSprint, setCurrentSprint] = useState(() =>
    loadFromStorage("currentSprint", null)
  );

  // All sprints history
  const [sprints, setSprints] = useState(() => loadFromStorage("sprints", []));

  // Team Members
  const [teamMembers, setTeamMembers] = useState(() =>
    loadFromStorage("teamMembers", [])
  );

  // Retrospectives
  const [retrospectives, setRetrospectives] = useState(() =>
    loadFromStorage("retrospectives", [])
  );

  // Velocity data (story points completed per sprint)
  const [velocity, setVelocity] = useState(() =>
    loadFromStorage("velocity", [])
  );

  // Product Increment (completed stories)
  const [increment, setIncrement] = useState(() =>
    loadFromStorage("increment", [])
  );

  // Current user role
  const [userRole, setUserRole] = useState(() =>
    loadFromStorage("userRole", null)
  );

  // Simulation state
  const [isSimulating, setIsSimulating] = useState(false);
  const [currentDay, setCurrentDay] = useState(0);

  // Persist to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("productBacklog", JSON.stringify(productBacklog));
  }, [productBacklog]);

  useEffect(() => {
    localStorage.setItem("sprintBacklog", JSON.stringify(sprintBacklog));
  }, [sprintBacklog]);

  useEffect(() => {
    localStorage.setItem("currentSprint", JSON.stringify(currentSprint));
  }, [currentSprint]);

  useEffect(() => {
    localStorage.setItem("sprints", JSON.stringify(sprints));
  }, [sprints]);

  useEffect(() => {
    localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
  }, [teamMembers]);

  useEffect(() => {
    localStorage.setItem("retrospectives", JSON.stringify(retrospectives));
  }, [retrospectives]);

  useEffect(() => {
    localStorage.setItem("velocity", JSON.stringify(velocity));
  }, [velocity]);

  useEffect(() => {
    localStorage.setItem("increment", JSON.stringify(increment));
  }, [increment]);

  useEffect(() => {
    localStorage.setItem("userRole", JSON.stringify(userRole));
  }, [userRole]);

  // Helper functions
  const addToProductBacklog = (story) => {
    setProductBacklog([...productBacklog, { ...story, id: Date.now() }]);
  };

  const updateStory = (id, updates) => {
    setProductBacklog(
      productBacklog.map((story) =>
        story.id === id ? { ...story, ...updates } : story
      )
    );
  };

  const moveToSprintBacklog = (storyId) => {
    const story = productBacklog.find((s) => s.id === storyId);
    if (story) {
      setSprintBacklog([...sprintBacklog, story]);
      setProductBacklog(productBacklog.filter((s) => s.id !== storyId));
    }
  };

  const moveToProductBacklog = (storyId) => {
    const story = sprintBacklog.find((s) => s.id === storyId);
    if (story) {
      setProductBacklog([...productBacklog, story]);
      setSprintBacklog(sprintBacklog.filter((s) => s.id !== storyId));
    }
  };

  const startSprint = (sprintData) => {
    const newSprint = {
      ...sprintData,
      id: Date.now(),
      sprintNumber: sprints.length + 1,
      startDate: new Date().toISOString(),
      stories: [...sprintBacklog],
      burndownData: [],
      status: "active",
    };
    setCurrentSprint(newSprint);
    setCurrentDay(0);
  };

  const endSprint = () => {
    if (currentSprint) {
      const completedStories = sprintBacklog.filter((s) => s.status === "Done");
      const completedPoints = completedStories.reduce(
        (sum, s) => sum + s.storyPoints,
        0
      );

      // Update sprint
      const updatedSprint = {
        ...currentSprint,
        endDate: new Date().toISOString(),
        completedPoints,
        status: "completed",
      };

      setSprints([...sprints, updatedSprint]);
      setVelocity([
        ...velocity,
        { sprint: updatedSprint.sprintNumber, points: completedPoints },
      ]);
      setIncrement([...increment, ...completedStories]);

      // Clear sprint backlog of completed items
      setSprintBacklog(sprintBacklog.filter((s) => s.status !== "Done"));
      setCurrentSprint(null);
      setCurrentDay(0);
    }
  };

  const addRetrospective = (retro) => {
    setRetrospectives([...retrospectives, retro]);
  };

  const loadSampleData = () => {
    setProductBacklog(sampleUserStories);
    setTeamMembers(sampleTeamMembers);
  };

  const resetSimulation = () => {
    localStorage.clear();
    setProductBacklog([]);
    setSprintBacklog([]);
    setCurrentSprint(null);
    setSprints([]);
    setTeamMembers([]);
    setRetrospectives([]);
    setVelocity([]);
    setIncrement([]);
    setUserRole(null);
    setIsSimulating(false);
    setCurrentDay(0);
  };

  const value = {
    // State
    productBacklog,
    sprintBacklog,
    currentSprint,
    sprints,
    teamMembers,
    retrospectives,
    velocity,
    increment,
    userRole,
    isSimulating,
    currentDay,

    // Setters
    setProductBacklog,
    setSprintBacklog,
    setCurrentSprint,
    setSprints,
    setTeamMembers,
    setRetrospectives,
    setVelocity,
    setIncrement,
    setUserRole,
    setIsSimulating,
    setCurrentDay,

    // Helper functions
    addToProductBacklog,
    updateStory,
    moveToSprintBacklog,
    moveToProductBacklog,
    startSprint,
    endSprint,
    addRetrospective,
    resetSimulation,
    loadSampleData,
  };

  return (
    <ScrumContext.Provider value={value}>{children}</ScrumContext.Provider>
  );
};
