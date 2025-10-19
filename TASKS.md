Excellent — you now want to **turn that Scrum Simulator prompt into a set of detailed AI-executable tasks**.

Below is a **step-by-step breakdown** structured like an **AI task plan**, optimized for a model like Claude (or GPT-5) to follow and progressively build the project from concept → UI → logic → simulation → polish.

---

## 🧩 **Task Breakdown for AI: Scrum Simulator (React + CSS)**

### **Phase 1 — Project Setup**

**Goal:** Initialize a clean, modular React project structure.

**Tasks:**

1. Create a new React project using Vite or Create React App.
2. Configure basic routing (React Router) for these pages:

   - `/` → Dashboard
   - `/backlog` → Product Backlog
   - `/sprint` → Sprint Board
   - `/review` → Sprint Review
   - `/retrospective` → Retrospective

3. Set up global state management:

   - Use React Context API or Redux.
   - Define global data structure for:

     - `productBacklog`, `sprintBacklog`, `currentSprint`, `teamMembers`, `velocity`, `retrospectives`.

---

### **Phase 2 — Define Data Models**

**Goal:** Define all entities for the Scrum simulation.

**Tasks:**

1. Create TypeScript interfaces or JS objects for:

   - `UserStory`: { id, title, description, priority, storyPoints, status, acceptanceCriteria }
   - `Task`: { id, storyId, title, estimateHours, status }
   - `Sprint`: { id, sprintNumber, goal, startDate, endDate, stories, burndownData }
   - `TeamMember`: { id, name, role, capacity, tasks }
   - `Retrospective`: { sprintId, wentWell, notWell, improvements }

2. Store initial sample data:

   - Example project with 8–10 user stories (e.g., “Build Login Feature”, “Add Product Search”).

---

### **Phase 3 — Implement Scrum Artifacts UI**

**Goal:** Build visual representations of Scrum artifacts.

**Tasks:**

1. **Product Backlog Page**

   - Display all user stories.
   - Allow reordering via drag-and-drop (for prioritization).
   - Buttons: _Add Story_, _Edit Story_, _Move to Sprint Backlog_.

2. **Sprint Backlog Page**

   - Display selected stories and their tasks.
   - Allow adding/deleting tasks under each story.
   - Show total story points and estimated hours.

3. **Increment Page (optional)**

   - List completed stories across sprints.
   - Show version history.

---

### **Phase 4 — Implement Scrum Events**

**Goal:** Simulate all Scrum ceremonies interactively.

**Tasks:**

#### 🧭 Sprint Planning

- Allow Product Owner to:

  - Select stories for the sprint.
  - Define sprint goal.

- Allow Developers to:

  - Break stories into tasks.
  - Estimate hours for each task.

- “Start Sprint” button begins the sprint timer (simulated).

#### ⏱️ Daily Scrum

- Each simulated day:

  - Randomly or manually update task progress.
  - Show “What was done yesterday / today / blockers” for each team member.

- Update Burndown Chart automatically.

#### 🎯 Sprint Review

- At sprint end:

  - List completed vs. incomplete stories.
  - Allow PO to “accept” or “reject” stories.
  - Update Velocity and Product Increment.

#### 💬 Sprint Retrospective

- Display form with three sections:

  - “What went well?”
  - “What didn’t go well?”
  - “What to improve next sprint?”

- Optionally generate sample feedback automatically.

---

### **Phase 5 — Visualization & Metrics**

**Goal:** Help users understand progress using charts.

**Tasks:**

1. Implement **Burndown Chart** (Recharts or Chart.js).

   - X-axis: Days in Sprint
   - Y-axis: Remaining Story Points

2. Implement **Velocity Chart** across sprints.
3. Add a **Sprint Summary Dashboard**:

   - Sprint Goal
   - Planned vs. Completed Points
   - Team Performance

---

### **Phase 6 — Simulation Engine**

**Goal:** Add light automation to make simulation dynamic.

**Tasks:**

1. Implement a timer (e.g., 10s = 1 Scrum day).
2. Each tick updates task progress (randomly or based on member capacity).
3. Auto-advance through Scrum events:

   - Planning → Daily Scrums → Review → Retrospective → Next Sprint.

4. Store state in `localStorage` to persist progress between sessions.

---

### **Phase 7 — Role Interactivity**

**Goal:** Let users play as different Scrum roles.

**Tasks:**

1. Add a **Role Selection screen** at start:

   - Product Owner | Scrum Master | Developer

2. Depending on role:

   - PO sees backlog management tools.
   - Dev sees task board.
   - SM sees reports and metrics dashboard.

3. Optionally simulate other roles’ actions automatically.

---

### **Phase 8 — UI & Polish**

**Goal:** Make UI clean, usable, and educational.

**Tasks:**

1. Use pure **CSS (no Tailwind)** with modular structure:

   - `/styles/global.css`
   - `/styles/components/Backlog.css`, etc.

2. Add tooltips and popovers explaining Scrum concepts (e.g., “What is a Sprint?”).
3. Add icons and light animations for transitions (optional).
4. Implement responsive layout for desktop/tablet.

---

### **Phase 9 — Optional Enhancements**

**Goal:** Extend educational value and engagement.

**Tasks:**

1. Add AI-generated:

   - Random user stories (e.g., “Add Wishlist Feature”).
   - Random sprint challenges (e.g., “Team member sick, capacity reduced”).

2. Add scoring system:

   - Based on sprint success, velocity stability, and completion rate.

3. Add export feature for reports or reflection (PDF or CSV).

---

### **Phase 10 — Testing & Documentation**

**Goal:** Make the simulator robust and easy to extend.

**Tasks:**

1. Test all workflows: backlog editing, sprint loop, chart updates.
2. Add comments explaining logic and data flow.
3. Write a short `README.md`:

   - Overview of features.
   - How to run and customize simulation.

---

## ✅ **Deliverables (AI Expected Outputs)**

- Full React project (with all pages and components).
- Working Scrum simulation (multi-sprint cycle).
- CSS-based clean UI.
- Example dataset (sample project + backlog).
- Documentation and comments.

---

Would you like me to now **convert this breakdown into a “multi-agent AI task plan”** (e.g., how to divide this into subtasks for multiple AI agents — frontend builder, logic designer, data modeler, etc.) so Claude or an AI system can parallelize it efficiently?
