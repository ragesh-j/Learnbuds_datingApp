import React from "react";
import "./RightSideModal.css";
import { FaSignOutAlt, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const RightSideModal = ({ isOpen, onClose, onPageNameChange }) => {
    const handleLinkClick = (name) => {
        onPageNameChange(name);
    };

    return (
        <>
            {isOpen && <div className="overlay" onClick={onClose}></div>}
            <div className={`right-side-modal ${isOpen ? "open" : ""}`}>
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="profile-section">
                            <div className="profile-image-container">
                                <img
                                    src={
                                        "https://images.unsplash.com/photo-1706943262459-3ef6ce03305c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZGlhbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
                                    }
                                    alt="Profile"
                                    className="profile-pic"
                                />
                                <span className="online-status"></span>
                            </div>
                            <div className="profile-info">
                                <h3>Stone Stellar</h3>
                                <h4>Prime Member</h4>
                                <p>Online</p>
                            </div>
                        </div>
                        <FaTimes className="close-icon" onClick={onClose} />
                    </div>
                    <div className="modal-body">
                        <ul>
                            <Link><li>My Profile</li></Link>
                            <Link to={"/sent"}>
                                <li onClick={() => handleLinkClick("Sent ")}>Sent Request</li>
                            </Link>
                            <Link to={"/viewed-my-profile"}>
                                <li onClick={() => handleLinkClick("Viewed My Profile")}>Viewed My Profile</li>
                            </Link>
                            <Link to={"/accepted"}>
                                <li onClick={() => handleLinkClick("Accept")}>Accept Request</li>
                            </Link>
                            <Link to={"/rejected"}>
                                <li onClick={() => handleLinkClick("Reject")}>Reject</li>
                            </Link>
                            <Link to={"/received"}>
                                <li onClick={() => handleLinkClick("Received")}>Received</li>
                            </Link>
                            <Link to={"/shortlistedBy"}>
                                <li onClick={() => handleLinkClick("Shortlisted By")}>Shortlisted By</li>
                            </Link>
                            <Link to={"/shortlisted"}>
                                <li onClick={() => handleLinkClick("Shortlisted")}>Shortlisted</li>
                            </Link>
                            <Link to={"/contacted"}>
                                <li onClick={() => handleLinkClick("Contacted")}>Contacted</li>
                            </Link>
                            <Link to={"/messages"}>
                                <li onClick={() => handleLinkClick("Message")}>Message</li>
                            </Link>
                            <Link to={"/setting"}>
                                <li onClick={() => handleLinkClick("Settings")}>Settings</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button className="logout-button"><FaSignOutAlt/>&nbsp; Logout</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RightSideModal;
