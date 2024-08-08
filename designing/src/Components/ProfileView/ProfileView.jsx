import React from 'react';
import './ProfileView.css';

//  use this if not upgraded
import UpgradeView from '../UpgradeView/UpgradeView';


const ProfileView = () => {
    return (
        <div className='profileView-container'>
            <div className="top-container torch-effect">
                <div className="topLeftArrow">
                    <i className="fas fa-less-than"></i>
                </div>

                <div className="topRightLocation">
                    <i className="fa-solid fa-location-arrow"></i>
                    <p>2.5 km</p>
                    {/* <p>Edit</p> */}

                </div>

                <div className="userDetails">
                    <p className="username">Alfredo Calzoni, <span>20</span></p>
                    <p className="userPlace">HAMBURG, GERMANY</p>
                </div>

                <div className="matching-container">
                    <div className="matching-percentage">
                        <div className="circle">
                            <div className="inner-circle">
                                <p className="percentage-number">80</p>
                                <p className="percentageIcon">%</p>
                            </div>
                        </div>
                    </div>
                    <p className="match-text">Match</p>
                    {/* <p className="match-text">Profile Complete</p> */}


                </div>
            </div>

            <div className="bottom-container">
                <div className="about">
                    <p className='about-heading'>About</p>
                    <p className='about-content'>A good listener. I love having a good talk to know each other’s side 😍.</p>
                </div>

                <div className="interests">
                    <p className='interest-heading'>Interest</p>
                    <div className="interest-tags">
                        <span className="interest-tag">🌿 Nature</span>
                        <span className="interest-tag">🏝️ Travel</span>
                        <span className="interest-tag">✍️ Writing</span>
                    </div>
                </div>
                {/* </div> */}

                <div className="footer-container">
                    <button className="footer-button dislike-button">X</button>
                    <button className="footer-button star-button">★</button>
                    <button className="footer-button like-button">
                        <i className="fas fa-heart"></i>
                    </button>
                    <button className="footer-button chat-button">💬</button>
                </div>
            </div>

        </div>
    );
};

export default ProfileView;
