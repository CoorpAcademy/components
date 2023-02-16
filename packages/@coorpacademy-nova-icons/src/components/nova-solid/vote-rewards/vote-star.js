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
      <path fill="none" d="M0 .001h24v24H0z" />
      <path
        fill="currentColor"
        d="M21.924 8.618A1 1 0 0021 8.001h-5.382l-2.724-5.447c-.339-.677-1.45-.677-1.789 0L8.382 8.001H3a1 1 0 00-.707 1.707l4.584 4.584-1.838 6.435a1 1 0 001.515 1.106L12 18.203l5.445 3.63a.998.998 0 001.516-1.106l-1.838-6.435 4.584-4.584c.286-.285.371-.717.217-1.09z"
      />
    </svg>
  );
};

export default SvgComponent;
