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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 44" {...props}>
      <path
        fill="currentColor"
        d="M41.9 22.9c.7-.4.7-1.4 0-1.8L4.8 2.6c-.7-.4-1.5.1-1.5.9v37.1c0 .7.8 1.2 1.4.9l37.2-18.6z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgComponent;
