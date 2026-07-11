import React from 'react';
import { ANNOUNCEMENT_TEXT } from '@/utils/constants';
import './AnnouncementBar.scss';

const AnnouncementBar: React.FC = () => {
  return (
    <div className="announcement-bar">
      <p className="announcement-bar__text">{ANNOUNCEMENT_TEXT}</p>
    </div>
  );
};

export default AnnouncementBar;
