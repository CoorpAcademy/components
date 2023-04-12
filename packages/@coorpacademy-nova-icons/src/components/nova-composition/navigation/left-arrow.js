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
    <svg viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M.44 6.94a1.502 1.502 0 000 2.124l6 6a1.502 1.502 0 002.124-2.124L5.124 9.5H22.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5H5.123l3.44-3.441A1.502 1.502 0 006.44.936l-6 6v.004z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SvgComponent;
