import * as React from 'react';

const SvgComponent = _props => {
  const {'aria-label': ariaLabel, role, alt, ...rest} = _props;
  const props = {
    ...rest,
    ...(ariaLabel || alt
      ? {
          role: role ?? 'img',
          'aria-label': ariaLabel,
          alt
        }
      : {
          'aria-hidden': 'true'
        })
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 14" {...props}>
      <path fill="currentColor" d="M16.6 14H.6C3.7 11.4 5.2 6.9 5 .6L16.3.5" />
    </svg>
  );
};

export default SvgComponent;
