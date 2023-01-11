import * as React from 'react';

const SvgComponent = _props => {
  const {'aria-label': ariaLabel, alt, ...rest} = _props;
  const props = {
    ...rest,
    ...(ariaLabel || alt
      ? {
          role: 'img',
          'aria-label': ariaLabel,
          alt
        }
      : {
          'aria-hidden': 'true'
        })
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <g fill="currentColor">
        <path d="M0 12c0 5.515 4.486 10 10 10v-2a7.968 7.968 0 01-3-.588V16h3v-2H7v-4h3V8H7V4.59A7.95 7.95 0 0110 4V2C4.486 2 0 6.486 0 12zm2.264 2A7.947 7.947 0 012 12c0-.691.098-1.359.264-2H5v4H2.264zm.818 2H5v2.235A8.04 8.04 0 013.082 16zM5 5.766V8H3.082A8.064 8.064 0 015 5.766zM21 2h-8c-1.104 0-2 .898-2 2v16a2 2 0 002 2h8a2 2 0 002-2V4c0-1.102-.896-2-2-2zm0 2v2h-8V4h8zm0 4l.001 8H13V8h8zm-8 12v-2h8.002v2H13z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
