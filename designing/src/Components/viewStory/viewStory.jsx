import React from 'react'
import './viewStory.css'
import ladyImage from '../../assets/ladyImage1.jpg'

//  use this if not upgraded
import UpgradeView from '../UpgradeView/UpgradeView'



const viewStory = () => {
    return (
        <div className='chatview-container'>
            <img src={ladyImage} alt="Background" />
            <i class="fas fa-arrow-left back-arrow"></i>

            <div className="profile-info">
                <div className="storyProfile-image">
                    <img src={ladyImage} alt="Profile" />
                </div>
                <p className="online-dot"></p>

                <div className='profile-name-status'>
                    <div className="profile-name">Stone Stellar</div>
                    <div className="profile-status">Online</div>
                </div>
            </div>



            <div className="volume-slider-bg"></div>
            <div className="volume-slider">
                <input type="range" min="0" max="100" id='volumeRange' />
                <div className="sound-icon">🔊</div>
            </div>
            <div className="hashtag"># Tea Time</div>

            <div className="action-buttons">
                <div className='new-button'>
                    NEW
                    <p className="action-button-message">💬</p>
                </div>
                <div className="action-button-close">
                    <i class="fas fa-times"></i>
                </div>
            </div>

        </div>
    )
}

export default viewStory
