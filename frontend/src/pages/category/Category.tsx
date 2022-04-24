import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../assets/categories';
import styles from './category.module.css';

export const Category = () => {
  const list = categories.map((e) => {
    return (
      <Link to="/announcements" state={e.category}>
        <div className={styles.singleCategory}>
          <div className={styles.contentContainer}>{e.name}</div>
          <div className={styles.iconContainer}>{e.icon}</div>
        </div>
      </Link>
    );
  });

  return <div className={styles.listContainer}>{list}</div>;
};
