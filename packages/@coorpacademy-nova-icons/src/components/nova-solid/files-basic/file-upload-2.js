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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <g fill="currentColor">
        <path d="M18 12.08V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h10.683A6.962 6.962 0 0112 19c0-3.526 2.609-6.434 6-6.92zM9 15H3v-2h6v2zm3-4H3V9h9v2zm0-10l5 5h-5V1zM19 14.585l-4.707 4.707 1.414 1.414L18 18.413V24h2v-5.587l2.293 2.293 1.414-1.414z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
