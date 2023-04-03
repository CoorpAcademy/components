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
      <path fill="none" d="M0-.001h24v24H0z" />
      <g fill="currentColor">
        <path d="M12 10.823l8.965-5.563A1.977 1.977 0 0020 5H4c-.352 0-.678.1-.965.26L12 10.823z" />
        <path d="M12.527 12.849a1 1 0 01-1.054.001l-9.47-5.877c0 .009-.003.018-.003.026v9c0 1.102.897 2 2 2h16c1.103 0 2-.898 2-2v-9l-.003-.027-9.47 5.877z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
