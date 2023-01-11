import * as React from 'react';

const SvgComponent = _props => {
  const {'aria-label': ariaLabel, alt, ...rest} = _props;
  const props = {
    ...rest,
    ...(ariaLabel || alt
      ? {
          role: 'img',
          'aria-label': ariaLabel,
          alt
        }
      : {
          'aria-hidden': 'true'
        })
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 40" {...props}>
      <path
        fill="currentColor"
        d="M6.1 36.7c-1.3 0-2.5-1.2-2.5-2.5V6.7H1.1c-.5 0-.9.3-.9.8v31.7c0 .5.3.8.8.8h31.7c.5 0 .8-.3.8-.8v-2.5H6.1z"
      />
      <path
        fill="currentColor"
        d="M6.1 0h33.3c.5 0 .8.3.8.8v33.3c0 .5-.3.8-.8.8H6.1c-.5 0-.8-.3-.8-.8V.8c-.1-.5.3-.8.8-.8zm12.1 24.8l11.7-7.2c.5-.3.5-1.2-.2-1.3L18 10.1c-.5-.3-1.2 0-1.2.7v13.3c.1.7.9 1.1 1.4.7z"
      />
    </svg>
  );
};

export default SvgComponent;
