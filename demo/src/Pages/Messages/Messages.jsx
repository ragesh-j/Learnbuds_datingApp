import React from "react";
import { FaHeart } from "react-icons/fa";
import "./Messages.css";

const contacts = [
    {
        name: "Team Align",
        date: "Today, 09:30 AM",
        imgSrc: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: 120,
    },
    {
        name: "Jhon Abraham",
        date: "03/07/22, 07:30 AM",
        imgSrc: "https://plus.unsplash.com/premium_photo-1679865371012-92b8ce5e6d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWVufGVufDB8fDB8fHww",
        likes: 200,
    },
    {
        name: "Jhon Abraham",
        date: "Today, 07:30 AM",
        imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
        likes: 150,
    },
    {
        name: "Alex Linderson",
        date: "Monday, 09:30 AM",
        imgSrc: "https://plus.unsplash.com/premium_photo-1682096186855-3f32647abe68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW58ZW58MHx8MHx8fDA%3D",
        likes: 180,
    },
    {
        name: "Sabila Sayma",
        date: "Yesterday, 07:35 PM",
        imgSrc: "https://plus.unsplash.com/premium_photo-1677553954020-68ac75b4e1b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
        likes: 220,
    },
    {
        name: "Binoj varghes",
        date: "Today, 09:30 AM",
        imgSrc: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: 95,
    },
    {
        name: "John Borino",
        date: "Monday, 09:30 AM",
        imgSrc: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
        likes: 175,
    },
];

const Messages = () => {
    return (
        <div>
            <div className="recent-matches">
                <h2>Recent Matches</h2>
                <div className="recent-matches-list">
                    {contacts.slice(0, 6).map((contact, index) => (
                        <div key={index} className="recent-match-item">
                            <div className="contact-img-container">
                                <img src={contact.imgSrc} alt={contact.name} className="recent-match-img" />
                                <div className="overlay-container">
                                    <div className="heart-icon">
                                        <FaHeart />
                                    </div>
                                    <div className="like-count">{contact.likes}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="app-container">
                <div className="contact-list">
                    {contacts.map((contact, index) => (
                        <div key={index} className="contact-item">
                            <img src={contact.imgSrc} alt={contact.name} className="contact-img" />
                            <div className="contact-info">
                                <p className="contact-name">{contact.name}</p>
                                <p className="contact-message">Last message preview...</p>
                            </div>
                            <div className="contact-time">09:30</div>
                            <div className="contact-dot"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Messages;
