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
      <path fill="none" d="M0 .001h24v24H0z" />
      <path
        fill="currentColor"
        d="M12 2.002c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zm6 12h-4v4h-4v-4H6v-4h4v-4h4v4h4v4z"
      />
    </svg>
  );
};

export default SvgComponent;
