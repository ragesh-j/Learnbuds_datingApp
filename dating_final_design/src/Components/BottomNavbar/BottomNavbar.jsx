import React from "react";
import { FaHome, FaUserFriends, FaCommentDots, FaCompass, FaPlus } from "react-icons/fa";
import styles from "./BottomNavbar.module.css";

const BottomNavbar = ({ pageName }) => {
    return (
        <div className={styles.bottomNavbar}>
            <div className={styles.navItem}>
                <FaHome className={styles.navIcon} />
            </div>
            <div className={styles.navItem}>
                <FaCompass className={styles.navIcon} />
            </div>
            {pageName !== "Message" ? (
                <div className={styles.navItem}>
                    <div className={styles.rainbowIcon}></div>
                </div>
            ) : (
                <div className={styles.navItem}>
                    <FaPlus className={styles.navIcon} />
                </div>
            )}
            <div className={styles.navItem}>
                <FaUserFriends className={styles.navIcon} />
            </div>
            <div className={styles.navItem}>
                <FaCommentDots className={styles.navIcon} />
            </div>
        </div>
    );
};

export default BottomNavbar;
