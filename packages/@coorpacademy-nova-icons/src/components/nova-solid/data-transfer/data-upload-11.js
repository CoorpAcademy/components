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
      <path fill="none" d="M0 .006h24v24H0z" />
      <g fill="currentColor">
        <path d="M11 6.416v9.586h2V6.416l2.293 2.293 1.414-1.414L12 2.588 7.293 7.295l1.414 1.414z" />
        <path d="M17 10.002h-1v2h1v8H7v-8h1v-2H7c-1.103 0-2 .897-2 2v8c0 1.102.897 2 2 2h10c1.104 0 2-.898 2-2v-8c0-1.103-.896-2-2-2z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
