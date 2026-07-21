import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../Components/redux/selectors";

export const Header = ({ onToggleSidebar }) => {
  const user = useSelector(selectUser);

  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #ccc", padding: "10px 20px" }}>
      <div>
        <h1 style={{ margin: 0, fontSize: "20px" }}>Training Portal</h1>
        <button onClick={onToggleSidebar}>Toggle Menu</button>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <p style={{ margin: 0 }}>Привіт, <strong>{user.name}</strong>!</p>
        <p style={{ margin: 0, background: "#eee", padding: "4px 8px", borderRadius: "4px" }}>Рівень: {user.level}</p>
        <p style={{ margin: 0, background: "#e0f7fa", padding: "4px 8px", borderRadius: "4px" }}>XP: {user.xp}</p>
      </div>
    </header>
  );
};