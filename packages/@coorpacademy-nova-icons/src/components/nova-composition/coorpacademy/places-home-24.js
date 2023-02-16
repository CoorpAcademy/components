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
    <svg viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4.694 10.525V7.437h2.609v3.088c0 .34.293.618.652.618h1.957c.358 0 .652-.278.652-.618V6.202h1.108c.3 0 .444-.352.216-.537l-5.452-4.65a.685.685 0 00-.874 0L.109 5.665c-.221.185-.084.537.216.537h1.108v4.323c0 .34.294.618.653.618h1.956c.359 0 .652-.278.652-.618z" />
    </svg>
  );
};

export default SvgComponent;
