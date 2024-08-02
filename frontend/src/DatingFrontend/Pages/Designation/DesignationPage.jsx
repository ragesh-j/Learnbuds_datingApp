import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './designationPage.module.css';
import Footer from '../../Components/Footer/Footer';
import LikeAndConnect from '../../Components/LikeAndConnect/LikeAndConnect';
import { Link, useNavigate } from 'react-router-dom';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';
import matches from '../../../SampleData.js';


const DesignationPage = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  const navigate = useNavigate();

  const handleSliderClick = () => {
    setShowNavigation(!showNavigation);
  };
  const handleLeftArrowClick = () => {
    navigate('/userhome');
  }

  return (
    <Container fluid className={styles.userPages}>
      <div className={styles.header}>
        <FontAwesomeIcon icon={faChevronLeft} className={styles.roundButton} onClick={handleLeftArrowClick} />
        <div className={styles.pageTitle}>Designation</div>
        <FontAwesomeIcon icon={faSlidersH} className={styles.roundButton} onClick={handleSliderClick} />
      </div>

      {showNavigation && (
        <div className={styles.navigationList}>
          <div className={styles.navigationItem}><Link to='/location' className={styles.navigationLink}>Location</Link></div>
          <div className={styles.navigationItem}><Link to='/qualification' className={styles.navigationLink}>Qualification</Link></div>
        </div>
      )}

      <LikeAndConnect />
      <div className={styles.matchCount}>Your Matches <span className={styles.matchCountNumber}>47</span></div>

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
  );
};

export default DesignationPage;
