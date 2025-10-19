import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import { ScrumProvider } from "./context/ScrumContext";
import Dashboard from "./pages/Dashboard";
import Metrics from "./pages/Metrics";
import ProductBacklog from "./pages/ProductBacklog";
import Retrospective from "./pages/Retrospective";
import SprintBoard from "./pages/SprintBoard";
import SprintPlanning from "./pages/SprintPlanning";
import SprintReview from "./pages/SprintReview";

function App() {
  return (
    <Router>
      <ScrumProvider>
        <div className="app">
          <Navigation />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/backlog" element={<ProductBacklog />} />
              <Route path="/planning" element={<SprintPlanning />} />
              <Route path="/sprint" element={<SprintBoard />} />
              <Route path="/review" element={<SprintReview />} />
              <Route path="/retrospective" element={<Retrospective />} />
              <Route path="/metrics" element={<Metrics />} />
            </Routes>
          </main>
        </div>
      </ScrumProvider>
    </Router>
  );
}

export default App;
