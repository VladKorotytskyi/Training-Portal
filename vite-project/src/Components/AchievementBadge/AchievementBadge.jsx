import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/selectors.jsx";

export const AchievementBadge = () => {
  const user = useSelector(selectUser);

  const badges = user?.badges || [];
  return (
    <div>
      <h2>Твої досягнення</h2>
      <p>Набирай XP, виконуючи уроки, щоб відкрити нові значки!</p>
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {badges.map(badge => (
          <div 
            key={badge.id} 
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
              width: "140px",
              background: badge.unlocked ? "#e8f5e9" : "#f5f5f5",
              filter: badge.unlocked ? "none" : "grayscale(100%)",
              opacity: badge.unlocked ? 1 : 0.6,
              transition: "all 0.3s ease"
            }}
          >
            <div style={{ fontSize: "40px", marginBottom: "10px" }}></div>
            <h4 style={{ margin: "0 0 5px 0", fontSize: "14px" }}>{badge.title}</h4>
            <span style={{ fontSize: "11px", color: "#666" }}>
              {badge.unlocked ? "Відкрито" : `Потрібно: ${badge.reqXp} XP`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};