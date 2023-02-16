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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor">
        <path d="M12.5 19c3.4 0 6.2-2.6 6.5-6H6c.3 3.4 3.1 6 6.5 6zM19 11h-4.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5H19V9h-4.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5H19V7h-4.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5H19c-.2-2.5-1.8-4.6-4-5.5v3c0 .3-.2.5-.5.5s-.5-.2-.5-.5V.2c-.3-.1-.7-.1-1-.2v3.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5V0c-.3 0-.7.1-1 .2v3.3c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-3c-2.2.9-3.8 3-4 5.5h4.5c.3 0 .5.2.5.5s-.2.5-.5.5H6v1h4.5c.3 0 .5.2.5.5s-.2.5-.5.5H6v1h4.5c.3 0 .5.2.5.5s-.2.5-.5.5H6v1h13v-1zM5 10.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5V12h1v-1.5zM20.5 10c-.3 0-.5.2-.5.5V12h1v-1.5c0-.3-.2-.5-.5-.5z" />
        <path d="M12.5 20c-4 0-7.2-3-7.5-7H4c.2 4.4 3.6 7.7 8 8v3h1v-3c4.4-.2 7.7-3.6 8-8h-1c-.3 4-3.5 7-7.5 7z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
