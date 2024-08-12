import React from 'react';
import styles from './addCards.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import Visa from '../../../assets/visa.png';
import Master from '../../../assets/master.png';
import AmericanExp from '../../../assets/americanexp.png';
import Discover from '../../../assets/discovercard.png';

const AddCards = () => {
  return (
    <div className={styles.pagecontainer}>
      <div className={styles.addcardcontainer}>
        <div className={styles.cardheader}>
          <FontAwesomeIcon icon={faArrowLeft} className={styles.backIcon} />
          <h2 className={styles.cardheading}>Add credit card</h2>
        </div>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter name" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="cardNumber">Credit card number</label>
            <input type="text" id="cardNumber" placeholder="**** **** **** 67" />
          </div>
          <button type="button" className={styles.scanButton}>
            <FontAwesomeIcon icon={faCreditCard} className={styles.scanIcon} /> Scan card
          </button>
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label htmlFor="expDate">Express</label>
              <input type="text" id="expDate" placeholder="MM/YY" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" placeholder="***" />
            </div>
          </div>
          <div className={styles.footerText}>
            Debit cards are accepted at some locations and for some categories.
          </div>
          <div className={styles.cardLogos}>
            <img src={Visa} alt="Visa" />
            <img src={AmericanExp} alt="Amex" />
            <img src={Discover} alt="Discover" />
            <img src={Master} alt="MasterCard" />
          </div>
          <button type="submit" className={styles.addButton}>ADD PAYMENT METHOD</button>
        </form>
      </div>
    </div>
  );
};

export default AddCards;
