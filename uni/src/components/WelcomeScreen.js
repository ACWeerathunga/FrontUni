import React from "react";
import { Link } from "react-router-dom";


function WelcomeScreen() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to Unitune</h1>
      <div>
        <Link to="/student-login">
          <button style={{ margin: "10px", padding: "10px 20px" }}>Student</button>
        </Link>
        <Link to="/professional-login">
          <button style={{ margin: "10px", padding: "10px 20px" }}>Professional</button>
        </Link>
      </div>
    </div>
  );
}

export default WelcomeScreen;
