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
      <g fill="currentColor">
        <path d="M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12zm0-21.6c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6z" />
        <path d="M7.4 14.1L8.5 13l-.2-.2c-.1-.1-.1-.1-.1-.2 0 0 0-.1.1-.2l4.2-4.2c.1-.1.1-.1.2-.1 0 0 .1 0 .2.1l.2.2 1.1-1.1-.2-.2c-.7-.7-1.8-.7-2.5 0l-4.2 4.2c-.3.3-.5.8-.5 1.2 0 .5.2.9.5 1.2l.1.4zM16.6 9.9L15.5 11l.2.2c.1.1.1.3 0 .4l-4.2 4.2c-.1.1-.1.1-.2.1 0 0-.1 0-.2-.1l-.2-.2-1.1 1.1.2.2c.3.3.8.5 1.2.5s.9-.2 1.2-.5l4.2-4.2c.7-.7.7-1.8 0-2.5v-.3zM15.7 7.2l1.1 1.1-3.6 3.5-1-1zM10.8 12.2l1 1-3.5 3.6-1.1-1.1z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
