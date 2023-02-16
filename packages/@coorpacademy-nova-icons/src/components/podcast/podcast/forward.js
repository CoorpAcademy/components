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
        d="M0 .5C0 .1.45-.14.78.09l10.13 6.96V.5c0-.4.45-.64.78-.41L23.4 8.14c.29.2.29.63 0 .82l-11.71 8.05c-.33.23-.78 0-.78-.41v-6.55L.78 17.01c-.33.23-.78 0-.78-.41V.5z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SvgComponent;
