import React from "react";
import { Link } from "react-router-dom";

function ProfessionalLogin() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Professional Login</h1>
      <form>
        <input
          type="email"
          placeholder="Email"
          style={{ display: "block", margin: "10px auto", padding: "10px" }}
        />
        <input
          type="password"
          placeholder="Password"
          style={{ display: "block", margin: "10px auto", padding: "10px" }}
        />
        <button style={{ padding: "10px 20px" }}>Sign In</button>
      </form>
      <div style={{ marginTop: "20px" }}>
        <p>Don’t have an account?</p>
        <Link to="/create-professional-account">
          <button style={{ padding: "10px 20px" }}>Create Professional Account</button>
        </Link>
      </div>
    </div>
  );
}

export default ProfessionalLogin;
