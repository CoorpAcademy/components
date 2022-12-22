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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14" {...props}>
      <path
        d="M23.9 6.2l-3.5-6c-.1-.1-.2-.2-.4-.2H4c-.2 0-.3.1-.4.2l-3.5 6c-.1.1-.1.2-.1.3v7c0 .3.2.5.5.5h23c.3 0 .5-.2.5-.5v-7c0-.1 0-.2-.1-.3zm-7.9.3v1c0 .8-.7 1.5-1.5 1.5H10c-.8 0-1.5-.7-1.5-1.5v-1c0-.3-.2-.5-.5-.5H1.4l2.9-5h15.4l2.9 5h-6.1c-.3 0-.5.2-.5.5z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SvgComponent;
