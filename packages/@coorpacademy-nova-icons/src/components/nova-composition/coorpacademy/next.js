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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 32" {...props}>
      <path
        fill="currentColor"
        d="M.2 5c0-.4.5-.6.8-.4L14.8 14V5c0-.4.5-.6.8-.4l16.1 11c.3.2.3.6 0 .8l-16.1 11c-.3.2-.8 0-.8-.4v-9L1 27.5c-.3.2-.8 0-.8-.4V5z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgComponent;
