import React, { useEffect, useState } from 'react';
import { categories } from '../../assets/categories';
import styles from './SingleAnnouncement.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMessage, faXmark } from '@fortawesome/free-solid-svg-icons';
import announcementService from '../../services/announcementService';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

export const SingleAnnouncement = () => {
  const { id } = useParams();
  const [announcement, setAnnouncement] = useState<any>(null);
  useEffect(() => {
    const getAnnouncement = async () => {
      const fetchedAnnouncement =
        await announcementService.getSingleAnnouncement(id as string);
      setAnnouncement(fetchedAnnouncement);
    };
    getAnnouncement();
  }, []);
  return announcement ? (
    <div className={styles.mainContainer}>
      <div className={styles.typeOfService}>
        <div>
          <h2>{announcement._doc.category}</h2>
          {
            categories.find(
              (category) => category.name === announcement.category
            )?.icon
          }
        </div>
        <div className={styles.xmark}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
      <div className={styles.signs}>
        <ul>
          <li className={styles.sign} key={announcement._doc.properties.for}>
            For: {announcement._doc.properties.for}
          </li>
          <li className={styles.sign} key={announcement._doc.properties.from}>
            From: {announcement._doc.properties.from}
          </li>
          <li className={styles.sign} key={announcement._doc.properties.to}>
            To: {announcement._doc.properties.to}
          </li>
          <li className={styles.sign} key={announcement._doc.properties.time}>
            When: {announcement._doc.properties.time}
          </li>
        </ul>
      </div>
      <div className={styles.description}>
        {announcement._doc.properties.desc}
      </div>
      <div className={styles.buttons}>
        <a href={`tel:${announcement.phone}`}>
          <span className={styles.button}>
            <FontAwesomeIcon icon={faPhone} />
            <h3>Call</h3>
          </span>
        </a>
        <a href={`sms:${announcement.phone}`}>
          <span className={styles.button}>
            <FontAwesomeIcon icon={faMessage} />
            <h3>Send a message</h3>
          </span>
        </a>
      </div>
    </div>
  ) : (
    <CircularProgress />
  );
};
