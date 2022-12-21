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
        <path d="M22.447 7.11l-10-5a1 1 0 00-.895 0l-10 5a.992.992 0 00-.445.463A1.215 1.215 0 001 8.005v5.765a1 1 0 002 0V9.172l9.015 3.755 10.357-3.994a1 1 0 00.075-1.823z" />
        <path d="M12 15.005c-.131 0-.262-.026-.385-.077L5 12.172v3.013c0 .379.214.725.553.895 1.715.857 3.483 1.918 6.447 1.918 2.963 0 4.735-1.062 6.447-1.918a1 1 0 00.553-.894v-2.801l-6.641 2.554a1.032 1.032 0 01-.359.066zM2 16.005a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
