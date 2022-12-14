import * as React from 'react';

const SvgComponent = _props => {
  const {'aria-label': ariaLabel, alt} = _props;
  const props = {
    ..._props,
    ...(!ariaLabel &&
      !alt && {
        'aria-hidden': 'true'
      })
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 35" {...props}>
      <g fill="currentColor">
        <path d="M12.1 0C5.4 0 0 5.4 0 12.1c0 6.4 5 11.7 11.4 12V18l-.9 1c-.3.3-.7.3-1 0l-2.1-2.1c-.3-.3-.3-.7 0-1 .3-.3.7-.3 1 0l1.6 1.6 1.6-1.6.2-.2c.2-.1.4-.1.5 0 .1 0 .2.1.2.2l1.6 1.6 1.6-1.6c.3-.3.7-.3 1 0 .3.3.3.7 0 1l-2 2.1c-.1.1-.3.2-.5.2s-.4-.1-.5-.2l-.9-.9v6.1c6.3-.4 11.4-5.6 11.4-12C24.2 5.4 18.7 0 12.1 0zM15.6 25.6H8.5c-.4 0-.7.3-.7.7s.3.7.7.7h7.1c.4 0 .7-.3.7-.7s-.3-.7-.7-.7zM15.6 28.4H8.5c-.4 0-.7.3-.7.7s.3.7.7.7h7.1c.4 0 .7-.3.7-.7s-.3-.7-.7-.7zM15.6 31.3H8.5c-.4 0-.7.3-.7.7s.3.7.7.7h2.8v.7c0 .4.3.7.7.7.4 0 .7-.3.7-.7v-.7h2.8c.4 0 .7-.3.7-.7s-.2-.7-.6-.7z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
