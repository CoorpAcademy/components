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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M15 .8H.5C.2.8 0 1 0 1.3v.9c0 .3.2.5.5.5H15c.3 0 .5-.2.5-.5v-.9c0-.3-.2-.5-.5-.5zM15 4.5H.5c-.3 0-.5.2-.5.5v.9c0 .3.2.5.5.5H15c.3 0 .5-.2.5-.5V5c0-.3-.2-.5-.5-.5zM7.7 8.2H.5c-.3 0-.5.2-.5.4v.9c0 .3.2.5.5.5h7.3c.2 0 .4-.2.4-.5v-.9c0-.2-.2-.4-.5-.4zM7.7 11.8H.5c-.3 0-.5.2-.5.5v.9c0 .3.2.5.5.5h7.3c.3 0 .5-.2.5-.5v-.9c-.1-.3-.3-.5-.6-.5zM14.5 8.2c-3 0-5.5 2.5-5.5 5.5v4.4c0 .6.5 1.1 1.1 1.1h1.1c.6 0 1.1-.5 1.1-1.1v-1.7c0-.6-.5-1.1-1.1-1.1h-1.1v-1.7c0-2.4 2-4.4 4.4-4.4s4.4 2 4.4 4.4v1.7h-1.1c-.6 0-1.1.5-1.1 1.1v1.7c0 .6.5 1.1 1.1 1.1h1.1c.6 0 1.1-.5 1.1-1.1v-4.4c0-3.1-2.4-5.5-5.5-5.5z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
