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
    <svg viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16.066.175a1 1 0 01.421.975l-2 13a.998.998 0 01-1.375.769l-3.737-1.553-2.14 2.315a1 1 0 01-1.735-.68v-2.613a.49.49 0 01.131-.335l5.238-5.715a.5.5 0 00-.7-.71l-6.357 5.647-2.759-1.381A.996.996 0 01.5 9.028c-.01-.369.184-.712.503-.897l14-8c.334-.19.747-.172 1.063.044z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SvgComponent;
