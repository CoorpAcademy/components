import * as React from 'react';

const SvgComponent = _props => {
  const {'aria-label': ariaLabel, alt, ...rest} = _props;
  const props = {
    ...rest,
    ...(ariaLabel || alt
      ? {
          role: 'img',
          'aria-label': ariaLabel,
          alt
        }
      : {
          'aria-hidden': 'true'
        })
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27" {...props}>
      <g fill="currentColor">
        <path d="M13.502 12.506c1.8 0 3.2-1.5 3.2-3.2s-1.4-3.3-3.2-3.3-3.3 1.5-3.3 3.2 1.5 3.3 3.3 3.3zM13.502 13.306c-3.8 0-6.5 2-6.5 4.9v.8h13v-.8c0-2.9-2.7-4.9-6.5-4.9z" />
      </g>
      <circle fill="none" stroke="currentColor" strokeWidth={2} cx={13.5} cy={13.5} r={12.5} />
    </svg>
  );
};

export default SvgComponent;
