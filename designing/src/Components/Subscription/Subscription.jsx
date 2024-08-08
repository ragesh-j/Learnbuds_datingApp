import React from 'react';
import './Subscription.css';

const Subscription = () => {
    return (
        <div className="subscription-container">
            <div className="subscription-header">
                <h2>Subscription Plan</h2>
            </div>
            <div className="subscription-details">
                <h3>Prime Member</h3>
                <p className="price">₹49/-month</p>

                <div className="subscription-limits">

                    <div className="limit-item">
                        <ul className='limits-heading'>
                            <li>
                                <span className="checkmark">✔</span>
                                <p><strong>Daily Limits</strong></p>
                            </li>
                        </ul>

                        <ul className='limits-points day'>
                            <li>View up to 15 profiles per day</li>
                            <li>Send up to 15 requests per day</li>
                        </ul>
                        <hr />
                    </div>

                    <div className="limit-item">
                        <ul className='limits-heading'>
                            <li>
                                <span className="checkmark">✔</span>
                                <p><strong>Weekly Limits</strong></p>
                            </li>
                        </ul>

                        <ul className='limits-points weekly'>
                            <li>View up to 90 profiles per week</li>
                            <li>Send up to 90 requests per week</li>
                        </ul>
                        <hr />
                    </div>

                    <div className="limit-item">
                        <ul className='limits-heading'>
                            <li>
                                <span className="checkmark">✔</span>
                                <p><strong>Monthly Limits</strong></p>
                            </li>
                        </ul>

                        <ul className='limits-points monthly'>
                            <li>View up to 300 profiles per month</li>
                            <li>Send up to 300 requests per month</li>
                        </ul>
                        <hr />
                    </div>

                    <div className="limit-item">
                        <ul className='limits-heading'>
                            <li>
                                <span className="checkmark">✔</span>
                                <p><strong>Premium Features</strong></p>
                            </li>
                        </ul>

                        <ul className='limits-points premium'>
                            <li>Unlock Unlimited Messages</li>
                            <li>Unlock Shortlist Page</li>
                            <li>View Profiles Who Shortlisted You</li>
                            <li>Sort & filter Profiles</li>
                        </ul>
                    </div>
                </div>

                <button className="subscribe-btn">Subscribe</button>
            </div>
        </div>
    );
}

export default Subscription;


