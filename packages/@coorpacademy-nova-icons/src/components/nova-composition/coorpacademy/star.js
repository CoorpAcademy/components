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
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M8 0l1.888 6.111H16L11.056 9.89 12.944 16 8 12.223 3.056 16l1.888-6.111L0 6.11h6.112z"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default SvgComponent;
