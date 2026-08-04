import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/selectors.jsx";
import { Title, Button } from "./Header.styled.jsx";
import { IoCloseSharp } from "react-icons/io5";
import { updateName } from "../redux/userSlice.jsx";

export const Header = ({ onToggleSidebar }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [changeName, setChangeName] = useState("");

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (changeName.trim()) {
      dispatch(updateName(changeName.trim()));
      setChangeName("");
      handleClose();
    }
  };

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
      <button onClick={() => {setIsOpen(true)}}>Sign up</button>

      {/* Modal -------------------------*/}

      {isOpen && (
        <div>
          <h2>Sign up</h2>
          <button onClick={handleClose}>
            <IoCloseSharp />
          </button>
          <form onSubmit={handleSubmit}>
            <p>Your name:</p>
            <label>
              <input
                type="text"
                placeholder="Type your name..."
                required
                value={changeName}
                onChange={(e) => setChangeName(e.target.value)}
              />
            </label>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      )}

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
