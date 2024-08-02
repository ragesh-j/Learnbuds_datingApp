import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Stories from '../../Components/Stories/Stories';
import Filters from '../../Components/Filters/Filters';
import Profiles from '../../Components/Profiles/Profiles';
import Footer from '../../Components/Footer/Footer';
import styles from './userHomePage.module.css';

function UserHomePage() {
  return (
    <Container fluid className={styles.appContainer}>
       <Header/>
       <Stories/>
       <Filters/>
       <Profiles/>
       <Footer/>
    </Container>
  )
}

export default UserHomePage