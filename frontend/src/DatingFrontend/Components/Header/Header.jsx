import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell as faBellRegular } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={`d-flex justify-content-between align-items-center p-3 ${styles.header}`}>
      <div className="d-flex align-items-center">
        <FontAwesomeIcon icon={faBars} size="lg" className={styles.menuIcon} />
        <h1 className={styles.title}>BuddyPair</h1>
      </div>
      <div className="d-flex align-items-center">
        <div className={styles.notificationIcon}>
          <div className={styles.iconCircle}>
            <FontAwesomeIcon icon={faBellRegular} size="lg" />
          </div>
        </div>
        <img src="/path/to/user-avatar.jpg" alt="User Avatar" className={styles.avatar} />
      </div>
    </header>
  );
};

export default Header;
