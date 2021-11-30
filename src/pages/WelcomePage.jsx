import React from "react";
import NavBar from "../components/NavBar";
import "./WelcomePage.css";

export default function WelcomePage() {
  return (
    <div className="welcome-page">
      <NavBar />
      <div className="welcome-page-content">
        <h1>WelcomePage content</h1>
      </div>
    </div>
  );
}
