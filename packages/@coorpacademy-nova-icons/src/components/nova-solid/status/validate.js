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
    <svg data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 21.45" {...props}>
      <path fill="currentColor" d="M0 13.79l10.21 7.66L24 3.06 19.91 0 9.19 14.3 3.06 9.7z" />
    </svg>
  );
};

export default SvgComponent;
