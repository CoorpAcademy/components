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
    <svg viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fillRule="nonzero" fill="currentColor">
        <path d="M2 3v1c0 .256.098.512.293.707L8 10.415V18a1.002 1.002 0 001.707.707l2-2A1 1 0 0012 16v-5.586l5.707-5.707A.995.995 0 0018 4.001V3H2zM16 .001H4c-1.104 0-2 .898-2 2h16c0-1.103-.896-2-2-2z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
