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
    <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13.813.844l3.046 6.234 6.703.984a1.528 1.528 0 011.22 1.032 1.391 1.391 0 01-.376 1.5l-4.875 4.828 1.172 6.844a1.473 1.473 0 01-.61 1.453c-.468.375-1.077.375-1.593.14l-6-3.234-6.047 3.234c-.469.235-1.078.235-1.547-.14a1.473 1.473 0 01-.61-1.453l1.126-6.844-4.875-4.828c-.375-.375-.516-.985-.375-1.5A1.528 1.528 0 011.39 8.063l6.75-.985 3-6.234C11.375.328 11.89 0 12.5 0c.563 0 1.078.328 1.313.844z"
        fill="#1D1D2B"
      />
    </svg>
  );
};

export default SvgComponent;
