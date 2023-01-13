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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 12" {...props}>
      <path
        d="M14.2.2c-.6.4-1.2.6-1.9.8-.5-.6-1.3-1-2.2-1-1.7 0-3 1.4-3 3 0 .2 0 .5.1.7C4.7 3.6 2.5 2.4 1 .6c-.2.4-.4.9-.4 1.5 0 1.1.5 2 1.3 2.5-.5 0-1-.2-1.4-.4 0 1.5 1 2.7 2.4 3-.2.1-.4.1-.7.1-.2 0-.4 0-.6-.1.4 1.3 1.5 2.2 2.8 2.2-1 .8-2.3 1.3-3.7 1.3H0c1.3.8 2.9 1.3 4.6 1.3 5.5 0 8.5-4.6 8.5-8.6V3c.6-.4 1.1-1 1.5-1.6-.5.2-1.1.4-1.7.5.6-.4 1.1-1 1.3-1.7"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      />
    </svg>
  );
};

export default SvgComponent;
