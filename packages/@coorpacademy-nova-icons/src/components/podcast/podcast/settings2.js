import * as React from 'react';

const SvgComponent = _props => {
  const {'aria-label': ariaLabel, alt} = _props;
  const props = {
    ..._props,
    ...(ariaLabel || alt
      ? {
          role: 'img'
        }
      : {
          'aria-hidden': 'true'
        })
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M24 14.11V10.1h-2.21c-.26-1.28-.77-2.47-1.47-3.53l1.55-1.59-2.82-2.85-1.57 1.57c-1.05-.7-2.23-1.22-3.5-1.46V0h-3.97v2.21c-1.27.26-2.44.76-3.5 1.46L4.94 2.08 2.12 4.91l1.55 1.57A9.774 9.774 0 002.2 9.99H0V14h2.19c.26 1.26.75 2.45 1.45 3.51l-1.57 1.57 2.8 2.83 1.55-1.59c1.03.68 2.21 1.2 3.48 1.46v2.21h3.97v-2.23c1.25-.26 2.42-.78 3.48-1.49l1.55 1.57 2.8-2.85-1.57-1.59a10.37 10.37 0 001.45-3.53h2.19l.24.22zm-11.94 2.01c-2.21 0-3.97-1.81-3.97-4.01S9.86 8.1 12.06 8.1s3.97 1.79 3.97 4.01-1.79 4.01-3.97 4.01z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SvgComponent;
