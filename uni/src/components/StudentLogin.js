import React from "react";
import { Link } from "react-router-dom";

function StudentLogin() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Student Login</h1>
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
        <Link to="/create-student-account">
          <button style={{ padding: "10px 20px" }}>Create Student Account</button>
        </Link>
      </div>
    </div>
  );
}

export default StudentLogin;
