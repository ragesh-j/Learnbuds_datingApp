import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import styles from './profiles.module.css';
import profile1 from '../../../assets/profile1.jpg';
import profile2 from '../../../assets/profile2.jpg';
import profile3 from '../../../assets/profile3.jpg';

const Profiles = () => {
  const profiles = [
    { name: 'Sithara Nair', role: 'Developer, Hyderabad', sex: 'F', age: 26, img: profile1 },
    { name: 'Sithara Nair', role: 'Designer, Mumbai', sex: 'F', age: 26, img: profile2 },
    { name: 'Sithara Nair', role: 'Manager, Delhi', sex: 'F', age: 26, img: profile3 },
    { name: 'Sithara Nair', role: 'Developer, Hyderabad', sex: 'F', age: 26, img: profile1 },
    { name: 'Sithara Nair', role: 'Designer, Mumbai', sex: 'F', age: 26, img: profile2 },
    { name: 'Sithara Nair', role: 'Manager, Delhi', sex: 'F', age: 26, img: profile3 },
  ];

  return (
    <section className={styles.profiles}>
      <Row>
        {profiles.map((profile, index) => (
          <Col xs={12} sm={6} md={4} lg={2} className="mb-4" key={index}>
            <div className={styles.profileCard}>
              <Image src={profile.img} rounded />
              <div className={styles.status}>Online</div>
              <div className={styles.profileInfo}>
                <p className={styles.name}>{profile.name}   <span className={styles.ageRole}>{profile.sex}{profile.age}YRS</span></p>
                <p className={styles.role}>{profile.role}</p>
              </div>
              <div className={styles.actionButtons}>
                <button className={styles.iconButton}><FontAwesomeIcon icon={faHeart} /></button>
                <button className={styles.iconButton}><FontAwesomeIcon icon={faComment} /></button>
                <button className={styles.iconButton}><FontAwesomeIcon icon={faEllipsisH} /></button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Profiles;
