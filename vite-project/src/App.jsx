import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Components/redux/store.jsx";
import { Header } from "./Components/Header/Header.jsx";
import { Sidebar } from "./Components/Sidebar/Sidebar.jsx";
import { Layout } from "./Components/Layout/Layout.jsx";
import { Dashboard } from "./Components/Dashboard/Dashboard.jsx";
import { LessonList } from "./Components/LessonList/LessonList.jsx";
import { CourseCard } from "./Components/CourseCard/CourseCard.jsx";
import { AchievementBadge } from "./Components/AchievementBadge/AchievementBadge.jsx";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Provider store={store}>
      <Router>
        <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <div style={{ display: "flex" }}>
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />

          <div style={{ flexGrow: 1, padding: "20px" }}>
            <Layout>
              <Routes>
                <Route
                  path="/"
                  element={<Navigate to="/dashboard" replace />}
                />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/lesson-list" element={<LessonList />} />
                <Route path="/lesson/:id" element={<CourseCard />} />
                <Route path="/achievements" element={<AchievementBadge />} />
              </Routes>
            </Layout>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
