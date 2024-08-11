import React from 'react';
import styles from './Subscription.module.css';

const Subscription = () => {
    return (
        <div className={styles.subscriptionContainer}>
            <div className={styles.subscriptionHeader}>
                <h2>Subscription Plan</h2>
            </div>
            <div className={styles.subscriptionDetails}>
                <h3>Prime Member</h3>
                <p className={styles.price}>₹49/-month</p>

                <div className={styles.subscriptionLimits}>
                    <div className={styles.limitItem}>
                        <ul className={styles.limitsHeading}>
                            <li>
                                <span className={styles.checkmark}>✔</span>
                                <p><strong>Daily Limits</strong></p>
                            </li>
                        </ul>

                        <ul className={`${styles.limitsPoints} ${styles.day}`}>
                            <li>View up to 15 profiles per day</li>
                            <li>Send up to 15 requests per day</li>
                        </ul>
                        <hr />
                    </div>

                    <div className={styles.limitItem}>
                        <ul className={styles.limitsHeading}>
                            <li>
                                <span className={styles.checkmark}>✔</span>
                                <p><strong>Weekly Limits</strong></p>
                            </li>
                        </ul>

                        <ul className={`${styles.limitsPoints} ${styles.weekly}`}>
                            <li>View up to 90 profiles per week</li>
                            <li>Send up to 90 requests per week</li>
                        </ul>
                        <hr />
                    </div>

                    <div className={styles.limitItem}>
                        <ul className={styles.limitsHeading}>
                            <li>
                                <span className={styles.checkmark}>✔</span>
                                <p><strong>Monthly Limits</strong></p>
                            </li>
                        </ul>

                        <ul className={`${styles.limitsPoints} ${styles.monthly}`}>
                            <li>View up to 300 profiles per month</li>
                            <li>Send up to 300 requests per month</li>
                        </ul>
                        <hr />
                    </div>

                    <div className={styles.limitItem}>
                        <ul className={styles.limitsHeading}>
                            <li>
                                <span className={styles.checkmark}>✔</span>
                                <p><strong>Premium Features</strong></p>
                            </li>
                        </ul>

                        <ul className={`${styles.limitsPoints} ${styles.premium}`}>
                            <li>Unlock Unlimited Messages</li>
                            <li>Unlock Shortlist Page</li>
                            <li>View Profiles Who Shortlisted You</li>
                            <li>Sort & filter Profiles</li>
                        </ul>
                    </div>
                </div>

                <button className={styles.subscribeBtn}>Subscribe</button>
            </div>
        </div>
    );
}

export default Subscription;
