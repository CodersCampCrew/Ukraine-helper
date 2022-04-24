import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../assets/categories';
import styles from './AnnouncementComponent.module.css';

export const AnnouncementComponent = ({ params }: any) => {
  console.log(params);
  return (
    <Link to={`/announcements/${params._id}`}>
      <div className={styles.sign}>
        <h2 className={styles.signHeader}>{params.category}</h2>
        <div className={styles.icon}>
          {
            categories.find((category) => category.category === params.category)
              ?.icon
          }
        </div>
        {params.properties.for ? (
          <div className={styles.signElement}>for: {params.properties.for}</div>
        ) : null}
        {params.properties.to ? (
          <div className={styles.signElement}>to: {params.properties.to}</div>
        ) : null}
        {params.properties.time ? (
          <div className={styles.signElement}>
            time: {params.properties.time}
          </div>
        ) : null}
        {params.properties.closeTo ? (
          <div className={styles.signElement}>
            closeTo: {params.properties.closeTo}
          </div>
        ) : null}
        {params.properties.available ? (
          <div className={styles.signElement}>
            available: {params.properties.available}
          </div>
        ) : null}
        {params.properties.availableFrom ? (
          <div className={styles.signElement}>
            availableFrom: {params.properties.availableFrom}
          </div>
        ) : null}
      </div>
    </Link>
  );
};
