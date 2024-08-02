import React from "react";
import { FaHome, FaUserFriends, FaCommentDots, FaCompass, FaPlus } from "react-icons/fa";
import "./BottomNavbar.css";

const BottomNavbar = ({ pageName }) => {
    return (
        <div className="bottom-navbar">
            <div className="nav-item">
                <FaHome className="nav-icon" />
            </div>
            <div className="nav-item">
                <FaCompass className="nav-icon" />
            </div>
            {pageName !== "Message" ? (
                <div className="nav-item">
                    <div className="rainbow-icon"></div>
                </div>
            ) : (
                <div className="nav-item">
                <FaPlus className="nav-icon" />
                </div>
            )}

            <div className="nav-item">
                <FaUserFriends className="nav-icon" />
            </div>
            <div className="nav-item">
                <FaCommentDots className="nav-icon" />
            </div>
        </div>
    );
};

export default BottomNavbar;
