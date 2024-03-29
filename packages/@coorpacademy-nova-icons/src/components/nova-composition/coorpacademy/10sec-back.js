import * as React from 'react';

const SvgComponent = _props => {
  const {'aria-label': ariaLabel, role, alt, ...rest} = _props;
  const props = {
    ...rest,
    ...(ariaLabel || alt
      ? {
          role: role || 'img',
          'aria-label': ariaLabel,
          alt
        }
      : {
          'aria-hidden': 'true'
        })
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M10.8 1.7c-2.3 0-4.4.9-5.9 2.4l-.7-.7c-.3-.4-.9-.1-.9.3V7c0 .3.2.5.5.5h3.3c.4 0 .7-.5.4-.9L6.1 5.3c1.2-1.2 2.9-2 4.7-2 3.7 0 6.7 3 6.7 6.7 0 3.5-2.7 6.4-6.2 6.6-.3 0-.5.2-.5.5v.7c0 .3.2.5.5.5 4.4-.3 7.8-3.9 7.8-8.3.1-4.6-3.7-8.3-8.3-8.3zM2.8 8.8l-1.9.7.3 1.2 1.3-.4v5.5H4v-7H2.8z" />
        <path d="M7.9 16c1.8 0 2.8-1.5 2.8-3.6s-1-3.6-2.8-3.6c-1.8 0-2.8 1.5-2.8 3.6s1 3.6 2.8 3.6zm0-1.4c-.9 0-1.4-.8-1.4-2.3S6.9 10 7.9 10s1.4.8 1.4 2.3-.5 2.3-1.4 2.3z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
