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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
      <path
        d="M15.5 3.1c-.4-1.3.4-2.7 1.8-2.9 3.3-.5 6.7-.1 9.9 1.1 3.9 1.5 7.3 4.2 9.6 7.8S40.2 16.8 40 21c-.2 3.4-1.2 6.6-3 9.5-.7 1.2-2.3 1.3-3.4.5-1.1-.9-1.2-2.4-.5-3.6 1.1-2 1.8-4.3 1.9-6.6.2-3.2-.7-6.3-2.4-9S28.4 7.1 25.4 6c-2.2-.8-4.5-1.1-6.8-.9-1.4.1-2.8-.7-3.1-2z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SvgComponent;
