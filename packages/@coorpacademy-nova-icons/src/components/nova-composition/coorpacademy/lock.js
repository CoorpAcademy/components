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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 25" {...props}>
      <path
        fill="#8D8D8D"
        d="M1.27 7.231l.903 5.121 1.477-.26-.903-5.121a4.481 4.481 0 013.65-5.213L6.137.28C2.887.854.697 3.98 1.27 7.23"
      />
      <path
        fill="#D0D0D0"
        d="M13.406 7.528l-1.477.26-.417-2.363c-.434-2.462-2.751-4.084-5.115-3.667L6.137.28c3.25-.574 6.378 1.617 6.95 4.866l.319 2.381z"
      />
      <path fill="#F6CD5B" d="M8.3 11.4H1.6c-.6 0-1.2.5-1.2 1.2v10.8c0 .6.5 1.2 1.2 1.2h6.7V11.4" />
      <path fill="#F5AF3F" d="M8.2 11.4h6.6c.6 0 1.1.5 1.1 1.2v10.8c0 .6-.5 1.2-1.1 1.2H8.2V11.4" />
      <path fill="#F5AF3F" d="M1.5 23.4h6.9V12.5H1.5z" />
      <path fill="#F6CD5B" d="M8.2 23.4h6.6V12.5H8.2z" />
      <path
        fill="#034158"
        d="M9.8 16.7c0-.9-.7-1.6-1.6-1.6-.9 0-1.6.7-1.6 1.6s.7 1.6 1.6 1.6c.8.1 1.6-.7 1.6-1.6"
      />
      <path
        fill="#034158"
        d="M8.9 16.7c0-.4-.4-.8-.8-.8s-.8.4-.8.8V20c0 .4.4.8.8.8s.8-.4.8-.8v-3.3"
      />
    </svg>
  );
};

export default SvgComponent;
