import React from 'react';
import './Settings.css';
import Profile from '../../assets/Profile.jpeg'

const Settings = () => {
    return (
        <div className="settings-container">

            <div className="settings-header">
                <h2 className='settings-heading'>Settings</h2>
                <div className="settings-icon">
                    <i className="fas fa-search"></i>
                </div>
            </div>
            <div className="profile-section">
                <img src={Profile} alt="Profile" className="profile-pic" />
                <div className="profile-info">
                    <h3>Nazrul Islam</h3>
                    <p>Never give up 💪</p>
                </div>
                <i className="fas fa-qrcode qr-icon"></i>
            </div>
            <div className="settings-list">
                <div className="settings-item">
                    <i className="fas fa-lock"></i>
                    <div>
                        <h4>Account</h4>
                        <p>Privacy, security, change number</p>
                    </div>
                </div>
                <div className="settings-item">
                    <i className="fas fa-comment-dots"></i>
                    <div>
                        <h4>Chat</h4>
                        <p>Chat history, theme, wallpapers</p>
                    </div>
                </div>
                <div className="settings-item">
                    <i className="fas fa-bell"></i>
                    <div>
                        <h4>Notifications</h4>
                        <p>Messages, group and others</p>
                    </div>
                </div>
                <div className="settings-item">
                    <i className="fas fa-question-circle"></i>
                    <div>
                        <h4>Help</h4>
                        <p>Help center, contact us, privacy policy</p>
                    </div>
                </div>
                <div className="settings-item">
                    <i className="fas fa-database"></i>
                    <div>
                        <h4>Storage and data</h4>
                        <p>Network usage, storage usage</p>
                    </div>
                </div>
                <div className="settings-item">
                    <i className="fas fa-user-friends"></i>
                    <div>
                        <h4>Invite a friend</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;


