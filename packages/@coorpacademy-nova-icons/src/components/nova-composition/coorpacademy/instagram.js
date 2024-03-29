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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" {...props}>
      <path
        d="M3.9 0c-1 0-2 .4-2.7 1.1C.4 1.9 0 2.9 0 3.9v6.2c0 1 .4 2 1.1 2.7.8.8 1.8 1.2 2.8 1.2h6.2c1 0 2-.4 2.7-1.1.7-.7 1.1-1.7 1.1-2.7V3.9c0-1-.4-2-1.1-2.7C12.1.4 11.1 0 10.1 0H3.9zm7.8 1.6c.4 0 .8.4.8.8s-.3.8-.8.8c-.4 0-.8-.3-.8-.8s.3-.8.8-.8zM7 3.1c1 0 2 .4 2.7 1.1.8.8 1.2 1.8 1.2 2.8s-.4 2-1.1 2.7C9 10.5 8 10.9 7 10.9s-2-.4-2.7-1.1C3.5 9 3.1 8 3.1 7s.4-2 1.1-2.7S6 3.1 7 3.1zm0 1.6c-.3 0-.6.1-.9.2-.3.1-.5.2-.8.5-.2.2-.3.4-.5.7-.1.3-.1.6-.1.9 0 .3.1.6.2.9.1.3.2.5.5.8.2.2.4.3.7.5.3.1.6.1.9.1.6 0 1.2-.2 1.7-.7.4-.4.7-1 .7-1.7 0-.6-.2-1.2-.7-1.7-.5-.3-1.1-.5-1.7-.5z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SvgComponent;
