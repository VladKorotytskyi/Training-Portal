import React from "react";

export const Layout = ({ children }) => {
  return (
    <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px", fontFamily: "sans-serif" }}>
      {children}
    </main>
  );
};