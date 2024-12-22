import React from 'react';
import './ProfileImage.css'; // Import file CSS untuk gaya

const ProfileImage = ({ src, alt }) => {
  return (
    <div className="profile-image-container">
      <img src={src} alt={alt} className="profile-image" />
    </div>
  );
};

export default ProfileImage;