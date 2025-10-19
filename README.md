# 🏃‍♂️ Scrum Simulator

An interactive web application for learning and practicing Scrum methodology through simulation. Built with React, this educational tool guides users through all Scrum roles, events, and artifacts in a realistic project environment.

![Scrum Simulator](https://img.shields.io/badge/React-19.1.1-blue) ![Vite](https://img.shields.io/badge/Vite-7.1.10-purple) ![License](https://img.shields.io/badge/License-MIT-green)

## 🎯 Features

### Scrum Roles

- **Product Owner**: Manage and prioritize the product backlog
- **Scrum Master**: Facilitate events and track team metrics
- **Developer**: Complete tasks and collaborate on sprint goals

### Scrum Artifacts

- **Product Backlog**: Drag-and-drop prioritization of user stories
- **Sprint Backlog**: Task management and story tracking
- **Product Increment**: View completed work across sprints
- **Definition of Done**: Built-in quality checklist

### Scrum Events

- **Sprint Planning**: Select stories, set goals, and estimate capacity
- **Daily Scrum**: Simulate daily progress updates
- **Sprint Review**: Review completed work and gather feedback
- **Sprint Retrospective**: Reflect and identify improvements

### Metrics & Visualization

- **Burndown Chart**: Track remaining work vs. ideal progress
- **Velocity Chart**: Measure story points completed per sprint
- **Sprint Metrics**: Completion rates, team capacity, and trends

### Additional Features

- ✅ **LocalStorage Persistence**: Your progress is automatically saved
- 🎨 **Clean UI**: Custom CSS styling (no Tailwind)
- 📊 **Interactive Charts**: Powered by Recharts
- 🎓 **Educational Tips**: Learn Scrum best practices throughout

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd scrum-simulator
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to:

```
http://localhost:5173
```

## 📖 How to Use

### First Time Setup

1. **Select Your Role**: Choose between Product Owner, Scrum Master, or Developer
2. **Review Product Backlog**: 10 sample user stories are pre-loaded
3. **Start Planning**: Move stories to sprint backlog

### Running a Sprint

#### Step 1: Sprint Planning

- Navigate to **Sprint Planning**
- Review the product backlog
- Move 3-5 stories to the sprint backlog
- Set a sprint goal
- Click **Start Sprint**

#### Step 2: Sprint Execution

- Go to **Sprint Board**
- Drag stories between columns (To Do → In Progress → Done)
- Use **Simulate Day** to progress work automatically
- Track progress with the burndown chart

#### Step 3: Sprint Review

- Navigate to **Sprint Review**
- Review completed and incomplete stories
- Accept or reject work based on acceptance criteria
- View sprint metrics and completion rate

#### Step 4: Retrospective

- Complete the **Retrospective** form
- Reflect on what went well and what didn't
- Identify specific improvements
- Use suggestion buttons for ideas

#### Step 5: Metrics

- View **Metrics** page to see:
  - Velocity trends across sprints
  - Burndown charts
  - Team performance insights

### Tips for Learning

- Complete at least 3 sprints to see meaningful metrics
- Try different roles to understand various perspectives
- Experiment with over-committing or under-committing stories
- Use the retrospective to track improvements

## 🏗️ Project Structure

```
scrum-simulator/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx        # Main navigation bar
│   │   └── Navigation.css
│   ├── context/
│   │   └── ScrumContext.jsx      # Global state management
│   ├── data/
│   │   └── initialData.js        # Sample stories and team data
│   ├── pages/
│   │   ├── Dashboard.jsx         # Home page with role selection
│   │   ├── ProductBacklog.jsx    # Backlog management
│   │   ├── SprintPlanning.jsx    # Sprint planning interface
│   │   ├── SprintBoard.jsx       # Kanban-style sprint board
│   │   ├── SprintReview.jsx      # Sprint review ceremony
│   │   ├── Retrospective.jsx     # Sprint retrospective
│   │   └── Metrics.jsx           # Charts and analytics
│   ├── utils/
│   │   └── initialization.js     # Setup sample data
│   ├── App.jsx                   # Main app component
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles
├── public/
├── package.json
└── vite.config.js
```

## 🛠️ Built With

- **React 19.1.1** - UI framework
- **React Router DOM** - Navigation and routing
- **Recharts** - Data visualization
- **Vite** - Build tool and dev server
- **Pure CSS** - Styling (no frameworks)

## 🎓 Learning Objectives

This simulator helps you understand:

1. **Scrum Framework**: All roles, events, and artifacts
2. **Sprint Planning**: Capacity planning and story estimation
3. **Team Collaboration**: Daily coordination and communication
4. **Empirical Process**: Inspect and adapt through metrics
5. **Continuous Improvement**: Retrospectives and action items

## 🔧 Customization

### Adding Your Own User Stories

Edit `src/data/initialData.js`:

```javascript
export const sampleUserStories = [
  {
    id: 1,
    title: "Your Story Title",
    description: "As a [user], I want to [action] so that [benefit]",
    priority: 1,
    storyPoints: 5,
    status: "To Do",
    acceptanceCriteria: ["Criterion 1", "Criterion 2"],
    tasks: [],
  },
  // Add more stories...
];
```

### Modifying Team Members

Edit team configuration in `src/data/initialData.js`:

```javascript
export const sampleTeamMembers = [
  {
    id: 1,
    name: "Your Name",
    role: "Developer",
    capacity: 40, // hours per sprint
    avatar: "👨‍💻",
    tasks: [],
  },
  // Add more team members...
];
```

### Resetting the Simulation

Click the **🔄 Reset** button in the navigation bar to clear all data and start fresh.

## 📊 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Inspired by the Scrum Guide and Agile principles
- Built for educational purposes to help teams learn Scrum

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Happy Scrumming! 🎉**

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
