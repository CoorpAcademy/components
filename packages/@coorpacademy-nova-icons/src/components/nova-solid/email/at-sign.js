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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill="currentColor"
        d="M12 1.5C6.211 1.5 1.5 6.21 1.5 12S6.211 22.5 12 22.5c2.141 0 4.193-.633 5.935-1.828l-1.697-2.475A7.453 7.453 0 0112 19.5c-4.136 0-7.5-3.364-7.5-7.5S7.864 4.5 12 4.5s7.5 3.364 7.5 7.5v.783c0 .641-.143 1.717-1.1 1.717h-.399c-.292-.011-.882-.582-.901-.869V12c0-2.812-2.288-5.1-5.1-5.1S6.9 9.187 6.9 12s2.287 5.1 5.1 5.1a5.05 5.05 0 003.101-1.079c.751.865 1.825 1.479 2.899 1.479h.4c2.414 0 4.1-1.939 4.1-4.717V12c0-5.79-4.711-10.5-10.5-10.5zm0 12.599c-1.158 0-2.1-.941-2.1-2.1 0-1.157.941-2.1 2.1-2.1s2.1.942 2.1 2.1c0 1.159-.942 2.1-2.1 2.1z"
      />
    </svg>
  );
};

export default SvgComponent;
