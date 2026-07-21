import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  
  return (
    <div
      className="sidebar"
      style={{ width: "200px", borderRight: "1px solid #ccc", padding: "10px" }}
    >
      <h2>Sidebar</h2>
      <button onClick={onClose}>Close</button>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/lesson-list">Lesson List</Link>
          </li>
          <li>
            <Link to="/achievements">Achievements</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
