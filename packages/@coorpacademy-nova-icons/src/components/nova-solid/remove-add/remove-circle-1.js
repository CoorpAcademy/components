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
        d="M12 2.001c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zm4.707 13.293l-1.414 1.414L12 13.415l-3.293 3.293-1.414-1.414 3.293-3.293-3.293-3.293 1.414-1.414L12 10.587l3.293-3.293 1.414 1.414-3.293 3.293 3.293 3.293z"
      />
    </svg>
  );
};

export default SvgComponent;
