import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './viewedMyProfile.module.css';
import Footer from '../../Components/Footer/Footer';
import {  useNavigate } from 'react-router-dom';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';
import matches from '../../../SampleData.js';

function ViewedMyProfile() {
    const navigate = useNavigate();

    const handleLeftArrowClick = () => {
        navigate('/userhome');
      }
  return (
    <Container fluid className={styles.userPages}>
    <div className={styles.header}>
      <FontAwesomeIcon icon={faChevronLeft} transform="shrink-8" className={styles.roundButton} onClick={handleLeftArrowClick}  />  
      <div className={styles.pageTitle}>Viewed my Profile</div>    
      <FontAwesomeIcon icon={faSlidersH} transform="shrink-8" className={styles.roundButton}  />
    </div>

    <div className={styles.matchCount}>
    <span className={styles.matchCountNumber}>47</span> new profile views 
      </div>

      <Row className={styles.matchContainer}>
        {matches.map((match, index) => (
          <Col xs={6} md={4} lg={2} key={index} className="mb-4">
            <ProfileCard
              matchPercentage={match.match}
              imageUrl={match.img}
              distance={match.distance}
              name={match.name}
              age={match.age}
              location={match.location}
            />
          </Col>
        ))}
      </Row>
      <Footer />
    </Container>
  )
}

export default ViewedMyProfile