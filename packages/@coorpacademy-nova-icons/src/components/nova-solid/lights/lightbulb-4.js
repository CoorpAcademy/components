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
      <path fill="none" d="M.001.002h24v24h-24z" />
      <g fill="currentColor">
        <path d="M9 23h2v1h2v-1h2v-2H9zM12 5c-3.859 0-7 3.14-7 7a7.011 7.011 0 004 6.319V19a1 1 0 001 1h4a1 1 0 001-1v-.681A7.01 7.01 0 0019 12c0-3.86-3.141-7-7-7zm1.666 11.709a1.001 1.001 0 00-.666.942V18h-2v-.349a1 1 0 00-.666-.942A5.008 5.008 0 017 12c0-2.757 2.243-5 5-5s5 2.243 5 5c0 2.11-1.34 4.003-3.334 4.709zM11 0h2v4h-2zM0 11h4v2H0zM20 11h4v2h-4zM20.292 2.292l1.414 1.414-3 3-1.414-1.413zM3.707 2.293l3 3-1.413 1.414-3-3z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
