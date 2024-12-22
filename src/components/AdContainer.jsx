// src/components/AdContainer.jsx
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './AdContainer.css'; // Import file CSS

const AdContainer = ({ adType, adContent, adSrc, adScript, hidden }) => {
  useEffect(() => {
    if (adScript) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      script.src = adScript;

      const container = document.getElementById(`container-${adScript}`);
      if (container) {
        container.appendChild(script);
      } else {
        document.body.appendChild(script);
      }
    }
  }, [adScript]);

  return (
    <div className={`ad-container ${adType}`} style={{ display: hidden ? 'none' : 'block' }}>
      {adType === 'native' && (
        <div className="native-ad">
          <div id={`container-${adScript}`}></div>
          {adContent}
        </div>
      )}
      {adType === 'pop-under' && !adScript && (
        <iframe
          src={adSrc}
          style={{ width: '100%', height: '100%', border: 'none', display: hidden ? 'none' : 'block' }}
          title="pop-under-ad"
        ></iframe>
      )}
    </div>
  );
};

AdContainer.propTypes = {
  adType: PropTypes.string.isRequired,
  adContent: PropTypes.node,
  adSrc: PropTypes.string,
  adScript: PropTypes.string,
  hidden: PropTypes.bool,
};

AdContainer.defaultProps = {
  hidden: false,
};

export default AdContainer;