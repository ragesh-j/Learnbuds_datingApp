import React from 'react';
import './UpgradeView.css';

const UpgradeView = () => {
    return (
        <div className="overlay">
            <div className="popup">
                <p>Upgrade to view Profile</p>
                <button className="upgrade-btn">Upgrade</button>
            </div>
        </div>
    );
}

export default UpgradeView;
