import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AnnouncementComponent } from '../../components/announcementComponent/AnnouncementComponent';
import announcementService from '../../services/announcementService';
import styles from './SelectedCategory.module.css';

export const SelectedCategory = () => {
  const { type } = useParams();
  const [announcements, setAnnouncements] = useState<any>(null);
  useEffect(() => {
    const getAnnouncements = async () => {
      const fetchedAnnouncements = await announcementService.getAnnouncements(
        type as string
      );
      setAnnouncements(fetchedAnnouncements);
    };
    getAnnouncements();
  }, []);

  const list = (
    <ul className={styles.list}>
      {announcements?.map((e: any) => (
        <li key={e._id} className={styles.listElement}>
          <AnnouncementComponent params={e} />
        </li>
      ))}
    </ul>
  );
  return <>{list}</>;
};
