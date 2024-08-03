import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Stories from '../../Components/Stories/Stories';
import Filters from '../../Components/Filters/Filters';
import Profiles from '../../Components/Profiles/Profiles';
import Footer from '../../Components/Footer/Footer';
import InterestModal from '../../Components/InterestModal/InterestModal';
import styles from './userHomePage.module.css';

function UserHomePage() {
  const [modalShow, setModalShow] = useState(true);

  const handleModalClose = (interest) => {
    if (interest) {
      localStorage.setItem('userInterest', interest);
      console.log('User is interested in:', interest);
    }
    setModalShow(false);
  };

  useEffect(() => {
    
    const userInterest = localStorage.getItem('userInterest');
    if (!userInterest) {
      setModalShow(true);
    } else {
      setModalShow(false);
    }
  }, []);

  return (
    <Container fluid className={`${styles.appContainer} ${modalShow ? styles.blurBackground : ''}`}>
      <Header />
      <Stories />
      <Filters />
      <Profiles />
      <Footer />
      <InterestModal show={modalShow} handleClose={handleModalClose} />
    </Container>
  );
}

export default UserHomePage;
