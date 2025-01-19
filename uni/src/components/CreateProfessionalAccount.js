import React from "react";
import "../FormStyles.css";

function CreateProfessionalAccount() {
  return (
    <div className="form-container">
      <h1>Create Professional Account</h1>
      <form>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Full Name" />
        </div>
        <div className="form-group">
          <label>Address Line 1</label>
          <input type="text" placeholder="Address Line 1" />
        </div>
        <div className="form-group">
          <label>Address Line 2</label>
          <input type="text" placeholder="Address Line 2" />
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

export default CreateProfessionalAccount;
