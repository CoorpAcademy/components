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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.1 18" {...props}>
      <path stroke="currentColor" d="M1 9h10.9M9 6.1L11.9 9 9 11.9" />
      <path
        stroke="currentColor"
        d="M1.7 5.7C3 2.9 5.8 1 9 1c4.4 0 8 3.6 8 8s-3.6 8-8 8c-3.3 0-6.1-1.9-7.3-4.7"
      />
    </svg>
  );
};

export default SvgComponent;
