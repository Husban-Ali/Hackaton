import React from 'react'
import img from "../assets/logo.png";

function StudentPortal() {
  return (
    <div className="container">
    <div className="logo">
      <img src={img} alt="SMIT Logo" className="logo-image" />
    </div>
    <h2 className="title">Student Portal</h2>
   
    <form className="form">
        <div className="input-group">
          <label htmlFor="cnic" className="label">
            CNIC *
          </label>
          <input
            type="text"
            id="cnic"
            placeholder="Kindly provide the CNIC number used during SMIT course registration."
            className="input"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password" className="label">
            Password *
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="input"
          />
        </div>
        <button type="submit" className="login-button">
          LOGIN
        </button>
      </form>
  </div>
  )
}

export default StudentPortal