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
      <path fill="none" d="M0 .003h24v24H0z" />
      <g fill="currentColor">
        <path d="M6 2.001H4c-1.103 0-2 .898-2 2v2c0 1.102.897 2 2 2h2c1.103 0 2-.898 2-2v-2c0-1.102-.897-2-2-2zM6 9.001H4c-1.103 0-2 .898-2 2v2c0 1.102.897 2 2 2h2c1.103 0 2-.898 2-2v-2c0-1.102-.897-2-2-2zM6 16.001H4c-1.103 0-2 .898-2 2v2c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-2c0-1.102-.897-2-2-2zM13 2.001h-2c-1.104 0-2 .898-2 2v2c0 1.102.896 2 2 2h2c1.104 0 2-.898 2-2v-2c0-1.102-.896-2-2-2zM13 9.001h-2c-1.104 0-2 .898-2 2v2c0 1.102.896 2 2 2h2c1.104 0 2-.898 2-2v-2c0-1.102-.896-2-2-2zM13 16.001h-2c-1.104 0-2 .898-2 2v2c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-2c0-1.102-.896-2-2-2zM20 2.001h-2c-1.104 0-2 .898-2 2v2c0 1.102.896 2 2 2h2c1.104 0 2-.898 2-2v-2c0-1.102-.896-2-2-2zM20 9.001h-2c-1.104 0-2 .898-2 2v2c0 1.102.896 2 2 2h2c1.104 0 2-.898 2-2v-2c0-1.102-.896-2-2-2zM20 16.001h-2c-1.104 0-2 .898-2 2v2c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-2c0-1.102-.896-2-2-2z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
