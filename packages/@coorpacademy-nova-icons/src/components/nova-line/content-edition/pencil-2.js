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
        d="M20.821 3.18a4 4 0 00-2.847-1.178 3.997 3.997 0 00-2.846 1.179L3.72 14.59a.995.995 0 00-.263.464L2.03 20.759a1 1 0 001.213 1.212l5.705-1.427a.995.995 0 00.464-.263L20.82 8.872a4.005 4.005 0 001.179-2.846 3.996 3.996 0 00-1.179-2.847l.001.001zM9.077 16.338l7.471-7.471.727.725-7.955 7.955-.243-1.209zm-1.414-1.415l-1.209-.241 7.956-7.955.725.726-7.472 7.47zm-2.497 1.541l1.976.395.396 1.977-3.163.791.791-3.163zM15.823 5.313l.72-.718c.766-.764 2.1-.764 2.864 0l-.002-.001c.765.765.765 2.099 0 2.864l-.718.72-2.864-2.865z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SvgComponent;
