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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <g fill="currentColor">
        <circle cx={5} cy={5} r={3} />
        <circle cx={5} cy={12} r={3} />
        <circle cx={5} cy={19} r={3} />
        <path d="M10 4h12v2H10zM10 11h12v2H10zM10 18h12v2H10z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
