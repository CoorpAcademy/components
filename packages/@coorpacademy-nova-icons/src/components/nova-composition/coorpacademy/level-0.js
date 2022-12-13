import * as React from 'react';

const SvgComponent = _props => {
  const {'aria-label': ariaLabel, alt} = _props;
  const props = {
    ..._props,
    ...(!ariaLabel &&
      !alt && {
        'aria-hidden': 'true'
      })
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 12" {...props}>
      <g fillRule="evenodd" clipRule="evenodd" fill="currentColor">
        <path
          d="M1.2 5c.7 0 1.2.6 1.2 1.2V10c0 .7-.6 1.2-1.2 1.2S0 10.7 0 10V6.2C0 5.6.6 5 1.2 5zM5 2.5c.7 0 1.2.6 1.2 1.2V10c0 .7-.6 1.2-1.2 1.2-.7 0-1.2-.6-1.2-1.2V3.7c0-.6.5-1.2 1.2-1.2zM8.8 0c.6 0 1.2.6 1.2 1.2V10c0 .7-.6 1.2-1.2 1.2-.7 0-1.2-.6-1.2-1.2V1.2C7.5.6 8.1 0 8.8 0z"
          opacity={0.4}
        />
      </g>
    </svg>
  );
};

export default SvgComponent;
