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
    <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M16.617 0L4 12.245h4.681l-3.6 9.293L18 9.29h-4.68L16.617 0l-4.052 5.516"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgComponent;
