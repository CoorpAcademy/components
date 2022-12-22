import * as React from 'react';

const SvgComponent = _props => {
  const {'aria-label': ariaLabel, alt} = _props;
  const props = {
    ..._props,
    ...(ariaLabel || alt
      ? {
          role: 'img'
        }
      : {
          'aria-hidden': 'true'
        })
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.2 12L12 10.7l.6-1.9c.1-.3-.2-.5-.4-.4l-1.9.6L9 7.8c-.2-.3-.6-.1-.5.2l.2 1.9L6.8 11c-.3.1-.2.5.1.6l1.3.3-8 8c-.3.3-.3.7 0 .9.3.3.7.3.9 0l8-8 .3 1.3c.1.3.5.3.6.1l1.1-1.9 1.9.2c.3.1.5-.3.2-.5"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.3 11H20M15.8 5.2l1.7-1.7M10 2.7V1M5.8 6L4.3 4.5M2.5 11H.8M10 17.7v2.5M15.8 15.2l1.7 1.7"
      />
    </svg>
  );
};

export default SvgComponent;
