import React from 'react';
import { FiX } from 'react-icons/fi';
import { ANNOUNCEMENT_TEXT } from '@/utils/constants';
import './AnnouncementBar.scss';

const AnnouncementBar: React.FC = () => {
  const [visible, setVisible] = React.useState(true);

  if (!visible) return null;

  return (
    <div className="announcement-bar">
      <p className="announcement-bar__text">{ANNOUNCEMENT_TEXT}</p>
      <button
        className="announcement-bar__close"
        onClick={() => setVisible(false)}
        aria-label="Close announcement"
      >
        <FiX />
      </button>
    </div>
  );
};

export default AnnouncementBar;
