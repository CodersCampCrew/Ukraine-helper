import React, { useEffect, useState } from 'react';
import { categories } from '../../assets/categories';
import styles from './SingleAnnouncement.module.css';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMessage, faXmark } from '@fortawesome/free-solid-svg-icons';
import announcementService from '../../services/announcementService';

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
          <h2>{announcement.category}</h2>
          {
            categories.find(
              (category) => category.category === announcement.category
            )?.icon
          }
        </div>
        <div className={styles.xmark}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
      <div className={styles.signs}>
        <ul>
          <li className={styles.sign} key={announcement.for}>
            For: {announcement.for} people
          </li>
          <li className={styles.sign} key={announcement.from}>
            From: {announcement.from}
          </li>
          <li className={styles.sign} key={announcement.to}>
            To: {announcement.to}
          </li>
          <li className={styles.sign} key={announcement.time}>
            When: {announcement.time}
          </li>
        </ul>
      </div>
      <div className={styles.description}>{announcement.desc}</div>
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
