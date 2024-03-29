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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.62 17.1" {...props}>
      <path
        d="M23.62.5c0-.4-.45-.64-.78-.41L12.71 7.05V.5c0-.4-.45-.64-.78-.41L.22 8.14c-.29.2-.29.63 0 .82l11.71 8.05c.33.23.78 0 .78-.41v-6.55l10.13 6.96c.33.23.78 0 .78-.41V.5z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SvgComponent;
