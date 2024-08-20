import React from 'react';
import './ChangePassword.css';
import { MdOutlineArrowBackIos } from "react-icons/md";

const ChangePassword = () => {
  return (
    <div className="change-password-container">
      <div className="header">
        {/* <button className="back-button">&larr;</button> */}
        <button className="back-button"><MdOutlineArrowBackIos/></button>   
        <h2>Change Password</h2>
      </div>
      <p className="info-text">
        Feeling worried about your account been easily preyed on? Then change that password now!
      </p>
      <form className="password-form">
       <div className="change-password-input-container">
            <label htmlFor="currentPassword">Current Password</label>
            <input type="password" id="currentPassword" name="currentPassword" />

            <label htmlFor="newPassword">New Password</label>
            <input type="password" id="newPassword" name="newPassword" />

            <label htmlFor="confirmPassword">Comfirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" />

           
        </div>
        <button type="submit" className="update-button">Update</button>
      </form>
    </div>
  );
}

export default ChangePassword;
