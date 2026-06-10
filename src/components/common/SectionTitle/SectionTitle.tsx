import React from 'react';
import './SectionTitle.scss';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  description,
  centered = false,
  light = false,
}) => {
  return (
    <div className={`section-title ${centered ? 'section-title--centered' : ''} ${light ? 'section-title--light' : ''}`}>
      {subtitle && <span className="section-title__subtitle">{subtitle}</span>}
      <h2 className="section-title__heading">{title}</h2>
      <div className="section-title__divider" />
      {description && <p className="section-title__desc">{description}</p>}
    </div>
  );
};

export default SectionTitle;
