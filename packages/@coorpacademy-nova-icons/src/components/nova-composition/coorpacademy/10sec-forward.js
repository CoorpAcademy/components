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
      <g fill="currentColor" fillRule="evenodd">
        <path d="M9.2 1.7c2.3 0 4.4.9 5.9 2.4l.8-.8c.3-.3.9-.1.9.4V7c0 .3-.2.5-.5.5H13c-.4 0-.7-.5-.4-.9L14 5.2c-1.2-1.2-2.9-2-4.7-2-3.7 0-6.7 3-6.7 6.7 0 3.5 2.7 6.4 6.2 6.6.3 0 .5.2.5.5v.7c0 .3-.2.5-.5.5C4.4 17.9 1 14.3 1 9.9.8 5.4 4.6 1.7 9.2 1.7z" />
        <path d="M10.3 8.8l-1.9.7.3 1.2 1.3-.4v5.5h1.4v-7h-1.1zM15.4 16c1.8 0 2.8-1.5 2.8-3.6s-1-3.6-2.8-3.6c-1.8 0-2.8 1.5-2.8 3.6s1 3.6 2.8 3.6zm0-1.4c-.9 0-1.4-.8-1.4-2.3s.5-2.3 1.4-2.3 1.4.8 1.4 2.3-.5 2.3-1.4 2.3z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
