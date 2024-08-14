import React from 'react';
import styles from './ProfileView.module.css';
import backgroundImage from '../../assets/ladyImage1.jpg';
import upgradeView from '../UpgradeView/UpgradeView'

const ProfileView = () => {
    return (
        <div
            className={styles.profileViewContainer}
            style={{
                background: `url(${backgroundImage}) no-repeat center center`,
                backgroundSize: 'cover'
            }}
        >
            <div className={`${styles.topContainer} ${styles.torchEffect}`}>
                <div className={styles.topLeftArrow}>
                    <i className="fas fa-less-than"></i>
                </div>

                <div className={styles.topRightLocation}>
                    <i className="fa-solid fa-location-arrow"></i>
                    <p>2.5 km</p>
                </div>

                <div className={styles.userDetails}>
                    <p className={styles.username}>Alfredo Calzoni, <span>20</span></p>
                    <p className={styles.userPlace}>HAMBURG, GERMANY</p>
                </div>

                <div className={styles.matchingContainer}>
                    <div className={styles.matchingPercentage}>
                        <div className={styles.circle}>
                            <div className={styles.innerCircle}>
                                <p className={styles.percentageNumber}>80</p>
                                <p className={styles.percentageIcon}>%</p>
                            </div>
                        </div>
                    </div>
                    <p className={styles.matchText}>Match</p>
                </div>
            </div>

            <div className={styles.bottomContainer}>
                <div className={styles.about}>
                    <p className={styles.aboutHeading}>About</p>
                    <p className={styles.aboutContent}>A good listener. I love having a good talk to know each other's side 😍.</p>
                </div>

                <div className={styles.interests}>
                    <p className={styles.interestHeading}>Interest</p>
                    <div className={styles.interestTags}>
                        <span className={styles.interestTag}>🌿 Nature</span>
                        <span className={styles.interestTag}>🏝️ Travel</span>
                        <span className={styles.interestTag}>✍️ Writing</span>
                    </div>
                </div>

                <div className={styles.footerContainer}>
                    <button className={`${styles.footerButton} ${styles.dislikeButton}`}>X</button>
                    <button className={`${styles.footerButton} ${styles.starButton}`}>★</button>
                    <button className={`${styles.footerButton} ${styles.likeButton}`}>
                        <i className="fas fa-heart"></i>
                    </button>
                    <button className={`${styles.footerButton} ${styles.chatButton}`}>💬</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileView;

// import React from 'react';
// import styles from './ProfileView.module.css';

// const ProfileView = () => {
//     return (
//         <div className={styles.container}>
//             <div className={styles.header}>
//                 <button className={styles.backButton}>{'<'}</button>
//                 <div className={styles.distance}>
//                     <span>{'⌄'} 2.5 km</span>
//                 </div>
//             </div>

//             <div className={styles.profileInfo}>
//                 <h1 className={styles.name}>Alfredo Calzoni, 20</h1>
//                 <p className={styles.location}>HAMBURG, GERMANY</p>
//                 <div className={styles.matchButton}>
//                     <span className={styles.matchPercentage}>80%</span>
//                     <span className={styles.matchText}>Match</span>
//                 </div>
//             </div>

//             <div className={styles.content}>
//                 <h2 className={styles.sectionTitle}>About</h2>
//                 <p className={styles.aboutText}>
//                     A good listener. I love having a good talk to know each other's side 😍.
//                 </p>

//                 <h2 className={styles.sectionTitle}>Interest</h2>
//                 <div className={styles.interests}>
//                     <span className={styles.interestTag}>🌿 Nature</span>
//                     <span className={styles.interestTag}>🏝️ Travel</span>
//                     <span className={styles.interestTag}>✍️ Writing</span>
//                 </div>

//                 <div className={styles.actionButtons}>
//                     <button className={`${styles.actionButton} ${styles.dislikeButton}`}>✕</button>
//                     <button className={`${styles.actionButton} ${styles.starButton}`}>★</button>
//                     <button className={`${styles.actionButton} ${styles.likeButton}`}>♥</button>
//                     <button className={`${styles.actionButton} ${styles.chatButton}`}>💬</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProfileView;