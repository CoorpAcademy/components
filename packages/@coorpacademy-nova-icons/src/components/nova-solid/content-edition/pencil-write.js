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
      <g fill="currentColor">
        <path d="M13.622 15.035l-7.07 1.414 1.414-7.071L13.344 4H4c-1.103 0-2 .898-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V8.656l-6.378 6.379z" />
        <path d="M9.808 10.365l2.828 2.827-3.535.707zM20.414 5.414a2 2 0 10-2.828-2.828L11.222 8.95l2.829 2.829 6.363-6.365z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
