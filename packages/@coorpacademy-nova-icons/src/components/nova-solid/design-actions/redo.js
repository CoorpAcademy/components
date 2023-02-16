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
        <path d="M18.968 13a6.945 6.945 0 01-1.369 3.554l1.427 1.427a8.944 8.944 0 001.942-4.98h-2zM13 19.29v2.02a8.928 8.928 0 004.611-1.917l-1.426-1.424A6.964 6.964 0 0113 19.29zM20.888 11a8.986 8.986 0 00-2.138-4.584l-1.5 1.324A6.981 6.981 0 0118.86 11h2.028zM7.473 4.603C4.803 6.167 3 9.059 3 12.37c0 4.624 3.507 8.441 8 8.941v-2.02c-3.387-.488-6-3.401-6-6.92 0-2.745 1.592-5.12 3.898-6.266L12 9.37V2H5l2.473 2.603z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
