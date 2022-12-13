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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 12" {...props}>
      <path
        d="M14.6.2c1.1.2 1.7.7 2 2 .1.4.3 2.8.3 3.7v.2c0 .9-.1 3.3-.3 3.7-.3 1.3-.9 1.8-2 2-.6.1-3.7.2-6.1.2-2.4 0-5.5-.1-6.1-.2-1.1-.2-1.7-.7-2-2C.1 9.4 0 7 0 6.1v-.2c0-.9.1-3.3.3-3.7.3-1.3.9-1.8 2-2C2.9.1 6 0 8.4 0c2.4 0 5.5.1 6.2.2zm-3.5 5.7L6.7 3.6v4.8l4.4-2.5z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      />
    </svg>
  );
};

export default SvgComponent;
