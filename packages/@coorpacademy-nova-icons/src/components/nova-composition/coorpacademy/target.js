import * as React from 'react';

const SvgComponent = _props => {
  const {'aria-label': ariaLabel, role, alt, ...rest} = _props;
  const props = {
    ...rest,
    ...(ariaLabel || alt
      ? {
          role: role ?? 'img',
          'aria-label': ariaLabel,
          alt
        }
      : {
          'aria-hidden': 'true'
        })
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" {...props}>
      <path
        fill="currentColor"
        d="M15 0C6.7 0 0 6.7 0 15s6.7 15 15 15 15-6.7 15-15S23.3 0 15 0zm0 27C8.4 27 3 21.6 3 15S8.4 3 15 3s12 5.4 12 12-5.4 12-12 12z"
      />
      <g fill="currentColor">
        <path d="M12 12h1.5v-1.5h-2.2c-.5 0-.8.3-.8.7v2.3H12V12zM18.7 10.5h-2.2V12H18v1.5h1.5v-2.3c0-.4-.3-.7-.8-.7zM12 16.5h-1.5v2.2c0 .5.3.8.8.8h2.2V18H12v-1.5zM18 18h-1.5v1.5h2.2c.5 0 .8-.3.8-.8v-2.2H18V18z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
