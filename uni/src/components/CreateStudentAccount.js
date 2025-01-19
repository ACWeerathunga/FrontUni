import React from "react";
import "../FormStyles.css";

function CreateStudentAccount() {
  return (
    <div className="form-container">
      <h1>Create Student Account</h1>
      <form>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Full Name" />
        </div>
        <div className="form-group">
          <label>Register Number</label>
          <input type="text" placeholder="Eg/xxxx/xxxx" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Email Address" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <button type="submit" className="btn">Sign Up</button>
      </form>
    </div>
  );
}

export default CreateStudentAccount;
