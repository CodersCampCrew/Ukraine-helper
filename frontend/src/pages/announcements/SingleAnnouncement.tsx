import React from 'react';
import { dummyData } from './dummyData';
import { category } from '../../assets/category';
import styles from './SingleAnnouncement.module.css';

export const SingleAnnouncement = () => {
  //   const filter = category.filter((type) => type.name === dummyData.type);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.typeOfService}>
        <h2>{dummyData.type}</h2>
        {/* ikonka */}
      </div>
      <div className={styles.signs}>
        <ul>
          <li className={styles.sign} key={dummyData.howMany}>
            For: {dummyData.howMany} people
          </li>
          <li className={styles.sign} key={dummyData.from}>
            From: {dummyData.from}
          </li>
          <li className={styles.sign} key={dummyData.to}>
            To: {dummyData.to}
          </li>
          <li className={styles.sign} key={dummyData.when}>
            When: {dummyData.when}
          </li>
          <li className={styles.sign} key={dummyData.time}>
            Time: {dummyData.time}
          </li>
        </ul>
      </div>
      <div className={styles.buttons}>
        {/* przyciski 2 */}
        {/* przyciski 2 */}
      </div>
    </div>
  );
};
