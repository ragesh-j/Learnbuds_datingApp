import React from 'react';
import './PrivacySettings.css';

const PrivacySettings = () => {
    return (
        <div className='privacySettings-container'>
            <div className="header">
                <div className="search-icon">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
                <h1>Privacy & Settings</h1>
            </div>
            <div className="content">
                <div className="section">
                    <div className="item">
                        <span className="label">Sign-in Email</span>
                        <span className="value">johnsmith@gmail.com</span>
                    </div>
                    <div className="item">
                        <span className="label">Password</span>
                        <a href="/" className="change-password">Change password</a>
                    </div>
                </div>
                <div className="section">
                    <div className="item">
                        <span className="label">2-FA authentication</span>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="item">
                        <span className="label">Phone number</span>
                        <span className="value">+380 93 123 45 67</span>
                    </div>
                </div>
                <div className="section">
                    <div className="item">
                        <span className="label">Partner Preference</span>
                        <span className="value"></span>
                    </div>
                    <div className="item">
                        <span className="label">Last sign in</span>
                        <span className="value">today at 18:34, Safari 198.123.23.23</span>
                    </div>
                </div>
    
                <div className="section">
                    <div className="item">
                        <span className="label">Total active sessions (5)</span>
                    </div>
                    <div className="item">
                        <span className="value">DESKTOP-6TIG6EC • Kyiv, Ukraine<br />Chrome • Used right now</span>
                    </div>
                    <div className="item">
                        <span className="value">Iphone 11 • Kyiv, Ukraine<br />Chrome • 04/19/2022</span>
                    </div>
                </div>
                <div className="section">
                    <button className="reset-button">
                        <i className="fa fa-plus" aria-hidden="true"></i>Reset all active sessions
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PrivacySettings;

