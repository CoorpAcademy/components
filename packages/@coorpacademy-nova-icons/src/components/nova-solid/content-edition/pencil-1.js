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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <g fill="currentColor">
        <path d="M4.428 13.88l8.569-8.571L18.689 11l-8.568 8.57zM20.104 9.59l.72-.719a4.031 4.031 0 000-5.693 4.031 4.031 0 00-5.693 0l-.719.72 5.692 5.692zM8.4 20.68l-5.156 1.288a1 1 0 01-1.213-1.212L3.32 15.6l5.08 5.08z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
