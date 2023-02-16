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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...props}>
      <path
        d="M20 0C9 0 0 9 0 20s9 20 20 20c4.1 0 8-1.2 11.3-3.5.8-.5 1-1.6.4-2.3-.5-.8-1.6-1-2.3-.4-2.8 1.9-6 2.9-9.4 2.9-9.2 0-16.7-7.5-16.7-16.7S10.8 3.3 20 3.3 36.7 10.8 36.7 20v1.6c0 2.2-1.8 3.9-3.9 3.9-2.2 0-3.9-1.8-3.9-3.9V20c0-4.9-4-8.8-8.8-8.8s-8.8 4-8.8 8.8 4 8.8 8.8 8.8c2.7 0 5.1-1.2 6.8-3.2 1.3 1.9 3.5 3.2 6 3.2 4 0 7.2-3.3 7.2-7.2V20C40 9 31 0 20 0zm0 25.5c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SvgComponent;
