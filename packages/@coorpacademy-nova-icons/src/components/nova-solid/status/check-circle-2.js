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
      <path fill="none" d="M0 .001h24v24H0z" />
      <path
        fill="currentColor"
        d="M12.042 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.478-10-10-10zm-.75 15.75l-5-3.75 1.5-2 3 2.25 5.25-7 2 1.5-6.75 9z"
      />
    </svg>
  );
};

export default SvgComponent;
