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
    <svg viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M10.6 15.3h2.5V11l9.2 6.4-9.2 6.5v-4.4h-2.8-.1c-3.3.2-5.8 2.9-5.8 6.1 0 3.5 2.5 6.1 5.9 6.1 3.9 0 7.1-3.4 9.8-6.1l2.8-2.8c3.5-3.5 7.2-7.4 12.8-7.4 5.9 0 10 4.3 10 10.3 0 5.5-4.4 10.3-10.5 10.3-2.8 0-5.2-1.2-7.3-2.8-.1-.1-.3-.2-.4-.3-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2 .4 0 .8.1 1.1.3.1 0 .1.1.2.1 1.5 1.1 3.1 1.9 5 1.9 3.5 0 6.1-2.8 6.1-6.1 0-3.5-2.5-6.1-5.9-6.1-3.9 0-7.1 3.4-9.8 6.1l-2.8 2.8c-3.5 3.5-7.2 7.4-12.8 7.4-5.8 0-10-4.3-10-10.3 0-2.6 1-5 2.7-6.9 1-1.1 2.2-1.9 3.6-2.5.1 0 .1-.1.2-.1 1.1-.5 2.4-.7 3.7-.8h.4z"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default SvgComponent;
