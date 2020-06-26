import React from "react";
import "./styles.css";

import NavBar from "./components/NavBar";
import TestApp from "./components/TestApp";

export default function App() {
  return (
    <div className="container">
      <NavBar />
      <TestApp />
    </div>
  );
}
