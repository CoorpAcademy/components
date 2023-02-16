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
    <svg viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M19 11.081V7.915h-1.745a7.865 7.865 0 00-1.16-2.776l1.241-1.241-2.238-2.239-1.241 1.24a7.9 7.9 0 00-2.774-1.156V0H7.917v1.745a7.88 7.88 0 00-2.775 1.157l-1.24-1.24-2.238 2.24 1.24 1.24a7.834 7.834 0 00-1.16 2.773H0v3.166h1.745a7.862 7.862 0 001.158 2.777L1.663 15.1l2.24 2.237 1.24-1.24c.832.55 1.767.954 2.776 1.158v1.744h3.166v-1.744a7.886 7.886 0 002.775-1.16l1.24 1.239 2.238-2.238-1.241-1.24c.55-.83.953-1.765 1.158-2.774H19zm-9.502 1.584a3.166 3.166 0 110-6.333 3.166 3.166 0 010 6.333z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgComponent;
