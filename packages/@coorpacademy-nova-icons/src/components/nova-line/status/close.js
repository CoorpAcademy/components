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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill="currentColor"
        d="M20.749 4.707l-1.415-1.414-7.292 7.293-7.293-7.293-1.415 1.414L10.627 12l-7.293 7.293 1.415 1.414 7.293-7.293 7.292 7.293 1.415-1.414L13.456 12z"
      />
    </svg>
  );
};

export default SvgComponent;
