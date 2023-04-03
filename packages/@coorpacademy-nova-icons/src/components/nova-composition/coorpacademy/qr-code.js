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
    <svg viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M.5 1.5A1.5 1.5 0 012 0h3a1.5 1.5 0 011.5 1.5v3A1.5 1.5 0 015 6H2A1.5 1.5 0 01.5 4.5v-3zm2 .5v2h2V2h-2zm-2 7.5A1.5 1.5 0 012 8h3a1.5 1.5 0 011.5 1.5v3A1.5 1.5 0 015 14H2a1.5 1.5 0 01-1.5-1.5v-3zm2 .5v2h2v-2h-2zM10 0h3a1.5 1.5 0 011.5 1.5v3A1.5 1.5 0 0113 6h-3a1.5 1.5 0 01-1.5-1.5v-3A1.5 1.5 0 0110 0zm2.5 2h-2v2h2V2zm-4 6.5c0-.275.225-.5.5-.5h2c.275 0 .5.225.5.5s.225.5.5.5h1c.275 0 .5-.225.5-.5s.225-.5.5-.5.5.225.5.5v3c0 .275-.225.5-.5.5h-2a.501.501 0 01-.5-.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v2c0 .275-.225.5-.5.5H9a.501.501 0 01-.5-.5v-5zM12 14a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SvgComponent;
