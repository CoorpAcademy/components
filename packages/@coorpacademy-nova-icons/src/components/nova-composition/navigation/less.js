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
    <svg viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="currentColor" d="M0 7h17v4H0z" fillRule="evenodd" />
    </svg>
  );
};

export default SvgComponent;
