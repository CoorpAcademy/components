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
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill="currentColor"
        d="M21.456 5.414l-2.829-2.828-6.585 6.586-6.586-6.586-2.829 2.828L9.213 12l-6.586 6.586 2.829 2.828 6.586-6.586 6.585 6.586 2.829-2.828L14.87 12z"
      />
    </svg>
  );
};

export default SvgComponent;
