import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import "./Header.css";
import { MdArrowBackIos } from "react-icons/md";

const Header = ({ pageName, toggleModal }) => {
    return (
        <header className="headerContainer">
            <div className="container">
                {pageName !== "Message" && (
                    <div className="menu-icon">
                        <FaSearch className="humburge-icon" onClick={toggleModal} />
                    </div>
                )}
                <div className="header-name">
                    <h2>
                        {pageName === "Message" && <MdArrowBackIos className="icon" />}
                        {pageName}
                    </h2>{" "}
                </div>
                {pageName !== "Message" && (
                    <div className="menu-icon">
                        <FaBars className="humburge-icon" onClick={toggleModal} />
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
