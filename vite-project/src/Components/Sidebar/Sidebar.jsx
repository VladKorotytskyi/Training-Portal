import React from "react";
import { Link } from "react-router-dom";
import { SidebarBackground, SBLink } from "./Sidebar.styled.jsx";
import { CiLogout } from "react-icons/ci";
import { BiChalkboard } from "react-icons/bi";
import { FiHome } from "react-icons/fi";
import { GiAchievement } from "react-icons/gi";

const SBarray = [
  { name: "Dashboard", path: "/dashboard", icon: <FiHome /> },
  { name: "Lesson List", path: "/lesson-list", icon: <BiChalkboard /> },
  { name: "Achievements", path: "/achievements", icon: <GiAchievement /> },
];

export const Sidebar = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <SidebarBackground>
      <button
        style={{
          border: "none",
          background: "#450070",
          cursor: "pointer",
          borderRadius: "8px",
          marginLeft: "110px",
        }}
        onClick={onClose}
      >
        <CiLogout style={{ width: "24px", height: "24px" }} />
      </button>
      <nav>
        <ul style={{ listStyle: "none", padding: 0}}>
          {SBarray.map((item) => (
            <SBLink key={item.path} style={{ transition: "background-color 0.3s, padding 0.5s", borderRadius: "6px", marginBottom: "6px" }}>
              <Link
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  textDecoration: "none",
                  fontSize: "19px",
                }}
                to={item.path}
              >
                {item.icon} {item.name}
              </Link>
            </SBLink>
          ))}
        </ul>
      </nav>
    </SidebarBackground>
  );
};
