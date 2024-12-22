import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const LinkButton = ({ url, text }) => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 1000 }
  });

  return (
    <animated.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-button"
      style={props}
    >
      {text}
    </animated.a>
  );
};

export default LinkButton;