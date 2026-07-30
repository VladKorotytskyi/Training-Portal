import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/selectors.jsx";
import { Title, Button } from "./Header.styled.jsx";

export const Header = ({ onToggleSidebar }) => {
  const user = useSelector(selectUser);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #ccc",
        padding: "10px 20px",
      }}
    >
      <div>
        <Title>Training Portal</Title>
        <Button onClick={onToggleSidebar}>Toggle Menu</Button>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <p style={{ margin: 0 }}>
          Привіт, <strong>{user?.name}</strong>!
        </p>
        <p
          style={{
            margin: 0,
            background: "#eee",
            padding: "4px 8px",
            borderRadius: "4px",
          }}
        >
          Рівень: {user?.level}
        </p>
        <p
          style={{
            margin: 0,
            background: "#e0f7fa",
            padding: "4px 8px",
            borderRadius: "4px",
          }}
        >
          XP: {user?.xp}
        </p>
      </div>
    </header>
  );
};