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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 21.37" {...props}>
      <path
        d="M17.35.02c-2.13 0-4.1 1.11-5.34 2.78C10.77 1.13 8.8.02 6.67.02 2.99.02 0 3.01 0 6.7c0 7.33 10.84 14.19 11.31 14.47.21.13.45.2.69.2s.48-.08.69-.21C13.14 20.87 24 14.01 24 6.68 24 3 21 .01 17.33.01l.02.02z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SvgComponent;
