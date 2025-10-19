Perfect — you want Claude to generate a **full Scrum Simulator** that covers not only roles and sprints but also **all Scrum events and artifacts** (Product Backlog, Sprint Backlog, Increment, etc.).

Here’s a **refined and expanded version** of your prompt — detailed enough for Claude (or any AI dev assistant) to build a _complete, realistic Scrum simulation system_ in React 👇

---

## 🧠 **Prompt: Full Scrum Simulator (Interactive Learning Web App)**

I want to build a **Scrum Simulator Web Application** to help students understand, visualize, and practice how **Scrum** works in real-world software projects.

This simulator should guide users through **all Scrum roles, events, and artifacts**, allowing them to experience multiple sprints from planning to delivery.
Use **React** for the frontend and **plain CSS (no Tailwind)** for styling.

---

## 🎯 **Objectives**

- Help students learn **Scrum roles, events, and artifacts** through interaction and simulation.
- Provide **hands-on experience** with backlog refinement, sprint planning, daily scrum, sprint review, and retrospective.
- Track and visualize progress with metrics like **Burndown Charts**, **Velocity**, and **Sprint Reports**.

---

## 🧩 **Core Functionalities**

### 🧑‍💼 1. Scrum Roles (Simulated or User-Controlled)

- **Product Owner (PO)**:

  - Manages and prioritizes the Product Backlog.
  - Defines acceptance criteria for user stories.
  - Selects user stories for each sprint based on business value and priority.

- **Scrum Master (SM)**:

  - Facilitates Scrum events.
  - Ensures the process is followed.
  - Provides guidance and feedback.

- **Development Team (Dev)**:

  - Breaks stories into tasks.
  - Estimates and updates progress daily.
  - Marks stories as “Done” when acceptance criteria are met.

> Optionally, allow the user to play one role (e.g., Product Owner) while others are simulated.

---

## 📦 **Scrum Artifacts**

1. **Product Backlog**

   - A list of all user stories with priority, business value, and story points.
   - Editable by the PO.
   - Stories can move from Product Backlog → Sprint Backlog.

2. **Sprint Backlog**

   - The set of stories selected for the current sprint.
   - Developers can break stories into smaller **tasks** (each with estimated hours).
   - Tasks have statuses: _To Do → In Progress → Done._

3. **Increment**

   - Automatically generated at the end of each sprint, containing all completed stories.
   - Display as a “Product Version” summary.

4. **Definition of Done (DoD)**

   - Predefined checklist for completion (e.g., “Code Complete”, “Tested”, “Reviewed”).
   - Shown as part of story/task completion validation.

---

## 🕒 **Scrum Events Simulation**

### 1. **Product Backlog Refinement**

- User (as PO) can edit priorities, re-estimate points, and add new stories.
- Optional AI helper can suggest backlog improvements.

### 2. **Sprint Planning**

- PO selects stories from the backlog.
- Dev team estimates tasks, sets sprint goal, and defines capacity.
- Sprint begins when “Start Sprint” is clicked.

### 3. **Daily Scrum (Standup)**

- Every simulated “day” in the sprint (e.g., 10 seconds = 1 day).
- Each dev updates status:

  - “What I did yesterday”
  - “What I plan today”
  - “Any blockers”

- Show progress on the Sprint Board and update Burndown Chart.

### 4. **Sprint Review**

- At sprint end, system displays completed vs. incomplete stories.
- PO can “accept” or “reject” completed stories based on acceptance criteria.
- Update velocity and product increment.

### 5. **Sprint Retrospective**

- Team reflects on what went well, what didn’t, and improvements.
- Generate a summary (can use random or pre-set improvement suggestions).
- Store retrospectives for future reference.

---

## 📊 **Metrics & Visualization**

- **Burndown Chart:** Remaining story points vs. sprint days.
- **Velocity Chart:** Story points completed per sprint.
- **Sprint Summary Dashboard:** Completion %, accepted stories, total velocity.
- **Team Capacity Chart:** Planned vs. actual hours.

Use a lightweight chart library (e.g., Chart.js or Recharts).

---

## 🧱 **Technical Requirements**

- **Framework:** React (latest version)
- **Styling:** Plain CSS or CSS Modules only (no Tailwind)
- **Chart Library:** Recharts or Chart.js
- **State Management:** React Context API or Redux
- **Data Persistence:** LocalStorage (for simulation continuity)
- **Interactivity:**

  - Drag & drop user stories between backlog stages
  - Clickable actions for each Scrum event
  - Dynamic sprint progress simulation

---

## 💡 **Optional Advanced Features**

- **Role Mode Selection:** Choose PO, SM, or Dev role.
- **AI Story Generator:** Use AI to create random realistic user stories.
- **Performance Scoring:** Evaluate how well the player managed sprints.
- **Team Personality Profiles:** Different developer speeds, accuracy, or risk factors.
- **Random Events:** Bugs, changing requirements, or team issues to simulate real-world conditions.

---

## 🧾 **Deliverables**

- Full React project structure with working simulation loop (multiple sprints).
- UI pages/components:

  - Dashboard / Home
  - Product Backlog
  - Sprint Board
  - Sprint Planning View
  - Sprint Review / Retrospective
  - Burndown Chart Visualization

- Sample dataset with 1–2 example projects and user stories.
- Comments and documentation explaining how to extend or customize the simulator.

---

### 🧠 Notes

Keep the simulation **lightweight and educational**, not a full project management tool.
The goal is **teaching Scrum concepts interactively** — not enterprise-level accuracy.

---

Would you like me to now **add example component structure + UI flow (React-level breakdown)** so you can include it in the same prompt for Claude to directly generate code (e.g., components like `<BacklogBoard />`, `<SprintBoard />`, `<DailyScrum />`, etc.)?
