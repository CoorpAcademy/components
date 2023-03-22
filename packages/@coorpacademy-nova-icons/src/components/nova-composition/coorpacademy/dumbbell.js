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
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect
        x={10.085}
        y={1.365}
        width={1.93}
        height={6.434}
        rx={0.5}
        transform="rotate(-45 10.085 1.365)"
        fill="currentColor"
      />
      <rect
        y={11.45}
        width={1.93}
        height={6.434}
        rx={0.5}
        transform="rotate(-45 0 11.45)"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.76 3.589a1 1 0 010-1.415l.48-.481a1 1 0 011.415 0l4.652 4.652a1 1 0 010 1.414l-.482.482a1 1 0 01-1.414 0l-1.567-1.568-4.17 4.17 1.567 1.568a1 1 0 010 1.415l-.482.481a1 1 0 01-1.414 0L1.693 9.655a1 1 0 010-1.414l.482-.482a1 1 0 011.414 0l1.567 1.568 4.17-4.17L7.76 3.588z"
        fill="currentColor"
      />
      <path
        d="M.96 14.23a.5.5 0 010-.707l1.163-1.163 1.517 1.517-1.163 1.163a.5.5 0 01-.707 0l-.81-.81zM14.23.96a.5.5 0 00-.707 0L12.36 2.123l1.517 1.517 1.163-1.163a.5.5 0 000-.707l-.81-.81z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SvgComponent;
