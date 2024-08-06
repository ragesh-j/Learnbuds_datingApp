import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './viewedMyProfile.module.css';
import Footer from '../../Components/Footer/Footer';
import { Link,  useNavigate } from 'react-router-dom';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';
import matches from '../../../SampleData.js';

function ViewedMyProfile() {
  const [showNavigation, setShowNavigation] = useState(false);
  const navigate = useNavigate();

    const handleLeftArrowClick = () => {
        navigate('/userhome');
      }
    const handleSliderClick = () => {
        setShowNavigation(!showNavigation);
      };
  return (
    <Container fluid className={styles.userPages}>
    <div className={styles.header}>
      <FontAwesomeIcon icon={faChevronLeft} transform="shrink-8" className={styles.roundButton} onClick={handleLeftArrowClick}  />  
      <div className={styles.pageTitle}>Viewed my Profile</div>    
      <FontAwesomeIcon icon={faSlidersH} transform="shrink-8" className={styles.roundButton} onClick={handleSliderClick} />
    </div>
    {showNavigation && (
        <div className={styles.navigationList}>
          <div className={styles.navigationItem}><Link to='/qualification' className={styles.navigationLink}>Qualification</Link></div>
          <div className={styles.navigationItem}><Link to='/location' className={styles.navigationLink}>Location</Link></div>
          <div className={styles.navigationItem}><Link to='/designation' className={styles.navigationLink}>Designation</Link></div>
        </div>
      )}

    <div className={styles.matchCount}>
    <span className={styles.matchCountNumber}>47</span> new profile views 
      </div>

      <Row className={styles.matchContainer}>
        {matches.map((match, index) => (
           <div key={index} className={`${styles.col} ${styles['col-xs-6']} ${styles['col-md-4']} ${styles['col-lg-2']} ${styles.marginBottom4}`}>
           <ProfileCard
             matchPercentage={match.match}
             imageUrl={match.img}
             distance={match.distance}
             name={match.name}
             age={match.age}
             location={match.location}
           />
         </div>
        ))}
      </Row>
      <Footer />
    </Container>
  )
}

export default ViewedMyProfile