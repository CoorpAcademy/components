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
      <g fill="none" fillRule="evenodd">
        <defs>
          <path id="prefix__a" d="M0 0h24v24H0z" />
        </defs>
        <g className="prefix__st0" fill="currentColor">
          <path d="M10.7 13.1v2.2h7.6v-2.2c0-.6-.5-1.1-1.1-1.1h-5.5c-.5 0-1 .5-1 1.1zM20.5 16.4H3.1c-.6 0-1.1.5-1.1 1.1V23c0 .5.5 1 1.1 1h17.5c.6 0 1.1-.5 1.1-1.1v-5.5c-.1-.5-.6-1-1.2-1zM6.4 8.6v6.7h2.2V8.6c1.9-.5 3.3-2.2 3.3-4.2C11.8 2 9.9 0 7.5 0S3.1 2 3.1 4.4c0 2 1.4 3.7 3.3 4.2z" />
        </g>
      </g>
    </svg>
  );
};

export default SvgComponent;
