import * as React from 'react';

const SvgComponent = _props => {
  const {'aria-label': ariaLabel, role, alt, ...rest} = _props;
  const props = {
    ...rest,
    ...(ariaLabel || alt
      ? {
          role: role || 'img',
          'aria-label': ariaLabel,
          alt
        }
      : {
          'aria-hidden': 'true'
        })
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="none" d="M0-.001h24v24H0z" />
      <path
        fill="currentColor"
        d="M21.487 5.126l-9-5a1 1 0 00-.972 0l-9 5a.999.999 0 00-.514.873c0 .694.114 17 10 17s10-16.306 10-17a.999.999 0 00-.514-.873zm-9.486.873a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM8.251 16c0-2.301 1.449-3.75 3.75-3.75s3.75 1.449 3.75 3.75h-7.5z"
      />
    </svg>
  );
};

export default SvgComponent;
