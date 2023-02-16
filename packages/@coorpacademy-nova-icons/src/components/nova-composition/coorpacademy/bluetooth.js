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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
      <path
        fill="currentColor"
        d="M10.4 20c-.1 0-.2 0-.3-.1-.3-.1-.6-.5-.6-.8v-6.9L4.6 17l-1.3-1.3L9.1 10 3.3 4.3 4.6 3l4.8 4.8V.9c0-.4.2-.7.6-.8.3-.1.7-.1 1 .2l4.6 4.5c.4.4.4.9 0 1.3L11.7 10l3.9 3.9c.4.4.4.9 0 1.3L11 19.7c-.2.2-.4.3-.6.3zm.9-7.8v4.7l2.4-2.4-2.4-2.3zm0-9.1v4.7l2.4-2.4-2.4-2.3z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgComponent;
