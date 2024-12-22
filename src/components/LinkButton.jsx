// src/components/LinkButton.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './LinkButton.css'; // Import file CSS

const LinkButton = ({ url, text }) => {
  return (
    <a href={url} className="link-button" target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
};

LinkButton.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default LinkButton;