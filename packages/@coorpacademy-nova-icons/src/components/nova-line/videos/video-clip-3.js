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
        <path d="M10 15l6-3-6-3z" />
        <path d="M21 2H3c-1.103 0-2 .896-2 2v16c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V4c0-1.104-.897-2-2-2zM3 20V4h18l.001 16H3z" />
        <path d="M5 5h2v2H5zM9 5h2v2H9zM13 5h2v2h-2zM17 5h2v2h-2zM5 17h2v2H5zM9 17h2v2H9zM13 17h2v2h-2zM17 17h2v2h-2z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
