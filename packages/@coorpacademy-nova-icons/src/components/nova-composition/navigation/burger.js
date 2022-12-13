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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12" {...props}>
      <path
        fill="currentColor"
        d="M15 10H1c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1zM15 5H1c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1zM15 0H1C.4 0 0 .4 0 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1z"
      />
    </svg>
  );
};

export default SvgComponent;
