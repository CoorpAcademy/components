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
      <path
        fill="currentColor"
        d="M15 9V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v5H4a1 1 0 00-1 1v4a1 1 0 001 1h5v5a1 1 0 001 1h4a1 1 0 001-1v-5h5a1 1 0 001-1v-4a1 1 0 00-1-1h-5z"
      />
    </svg>
  );
};

export default SvgComponent;
