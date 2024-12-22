// src/components/VideoPlayerAd.jsx
import React from 'react';
import './VideoPlayerAd.css'; // Import file CSS

const VideoPlayerAd = ({ thumbnail, directLink }) => {
  const handlePlayClick = () => {
    window.location.href = directLink;
  };

  return (
    <div className="video-player-ad">
      <div className="video-thumbnail" onClick={handlePlayClick}>
        <img src={thumbnail} alt="Video Thumbnail" />
        <div className="play-button"></div>
      </div>
      <div className="cta-container">
        <h2>Jangan Lewatkan!</h2>
        <p>Klik tombol di bawah ini untuk menonton video viral secara lengkap yang telah kami siapkan untuk Anda!</p>
        <button className="play-video-button" onClick={handlePlayClick}>Putar Video</button>
      </div>
    </div>
  );
};

export default VideoPlayerAd;