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
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="currentColor">
        <path d="M22.817 11.303C22.633 11.04 18.222 4.878 12 4.878S1.367 11.04 1.183 11.303a.996.996 0 000 1.151c.184.262 4.595 6.424 10.817 6.424s10.633-6.162 10.817-6.424a.996.996 0 000-1.151zM12 16.878c-4.166 0-7.549-3.575-8.731-5.001C4.448 10.451 7.82 6.878 12 6.878c4.166 0 7.549 3.576 8.731 5.001-1.179 1.427-4.551 4.999-8.731 4.999z" />
        <path d="M12 7.878c-2.206 0-4 1.795-4 4 0 2.206 1.794 4 4 4s4-1.794 4-4c0-2.205-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2 0-1.102.897-2 2-2s2 .898 2 2c0 1.103-.897 2-2 2z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
