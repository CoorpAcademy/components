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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <path
        fill="currentColor"
        d="M21.5 20.5V22h5v-1.5c0-1.37-1.12-2.5-2.5-2.5-1.41 0-2.5 1.13-2.5 2.5zm-2 1.5v-1.5c0-2.47 2-4.5 4.5-4.5 2.47 0 4.5 2.03 4.5 4.5V22h.5c1.09 0 2 .91 2 2v6c0 1.13-.91 2-2 2H19c-1.12 0-2-.87-2-2v-6a2 2 0 012-2h.5z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgComponent;
