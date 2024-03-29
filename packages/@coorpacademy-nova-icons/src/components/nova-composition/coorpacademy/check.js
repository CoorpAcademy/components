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
    <svg viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M11.728 2.123a.397.397 0 00-.575 0L5.097 8.308a.396.396 0 01-.575 0L1.868 5.536a.394.394 0 00-.575 0L.12 6.617A.423.423 0 000 6.91c0 .107.042.22.12.302l2.677 2.881c.158.165.417.431.575.595l1.15 1.19a.4.4 0 00.576 0l7.781-7.97a.432.432 0 000-.596l-1.15-1.189z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgComponent;
