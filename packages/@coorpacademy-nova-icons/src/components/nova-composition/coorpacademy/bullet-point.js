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
    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.556 8.361a1.556 1.556 0 100-3.111 1.556 1.556 0 000 3.111zm5.444 0A1.556 1.556 0 107 5.25a1.556 1.556 0 000 3.111zm5.444 0a1.556 1.556 0 100-3.111 1.556 1.556 0 000 3.111z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SvgComponent;
