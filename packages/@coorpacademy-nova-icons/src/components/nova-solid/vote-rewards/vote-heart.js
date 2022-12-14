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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="none" d="M0 .001h24v24H0z" />
      <path
        fill="currentColor"
        d="M16 4.001c-1.594 0-3.07.837-4 2.08-.93-1.243-2.406-2.08-4-2.08-2.757 0-5 2.243-5 5 0 5.491 8.124 10.632 8.471 10.848a1 1 0 001.058 0C12.876 19.633 21 14.492 21 9.001c0-2.757-2.243-5-5-5z"
      />
    </svg>
  );
};

export default SvgComponent;
