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
      <path fill="none" d="M.001 0h24v24.002h-24z" />
      <g fill="currentColor">
        <path d="M19.326 2.558a2.013 2.013 0 00-.781.483l-1.067 1.068c-.27-.082-2.185-.644-2.842.013l4.243 4.244c.707-.708 0-2.83 0-2.83l1.08-1.08c.22-.219.385-.487.483-.782L21 2l-1.674.558zM16.758 7.657l-1.415-1.414s-1.414 1.414-.707 2.122c.707.706 2.122-.708 2.122-.708z" />
        <path d="M13.658 9.342c-1.511-1.51-1.62-3.951-.485-6.066A8.947 8.947 0 0011 3a8.962 8.962 0 00-4.344 1.119A1.994 1.994 0 016 8c-.999 0-1.82-.735-1.969-1.692A9 9 0 1020 12c0-.75-.102-1.476-.275-2.172-2.115 1.134-4.557 1.024-6.067-.486zM8 18a3 3 0 110-6 3 3 0 010 6zm7-1a2 2 0 11.001-4.001A2 2 0 0115 17z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
