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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M24 22.3l-6.6-6.6c1.3-1.7 2.1-3.8 2.1-6 0-2.6-1-5-2.9-6.9C14.8 1 12.3 0 9.7 0c-2.6 0-5 1-6.9 2.9C1 4.7 0 7.1 0 9.7c0 2.6 1 5 2.9 6.9 1.8 1.8 4.3 2.9 6.9 2.9 2.2 0 4.3-.7 6-2.1l6.6 6.6 1.6-1.7zM9.7 17c-2 0-3.8-.8-5.2-2.1-1.4-1.4-2.1-3.2-2.1-5.2s.8-3.8 2.1-5.2C6 3.2 7.8 2.4 9.7 2.4c2 0 3.8.8 5.2 2.1C16.3 6 17 7.8 17 9.7c0 2-.8 3.8-2.1 5.2-1.4 1.4-3.2 2.1-5.2 2.1z"
      />
    </svg>
  );
};

export default SvgComponent;
