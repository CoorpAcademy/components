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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill="currentColor"
        d="M22.708 11.294l-2.879-2.88a1.031 1.031 0 00-1.414 0A2.003 2.003 0 0115 7c0-.534.208-1.036.586-1.414a.998.998 0 000-1.413l-2.879-2.878a1.027 1.027 0 00-1.414 0L9.102 3.484A3.957 3.957 0 006.001 2 4.005 4.005 0 002 6c0 1.239.562 2.363 1.485 3.102l-2.192 2.192a1 1 0 000 1.414l2.879 2.878a.997.997 0 001.414 0A2.003 2.003 0 019.001 17c0 .534-.208 1.036-.586 1.414a1 1 0 000 1.414l2.879 2.879a.997.997 0 001.413.001l2.192-2.192A3.957 3.957 0 0018 22c2.206 0 4-1.794 4-4a3.959 3.959 0 00-1.484-3.102l2.191-2.191a.999.999 0 00.001-1.413z"
      />
    </svg>
  );
};

export default SvgComponent;
