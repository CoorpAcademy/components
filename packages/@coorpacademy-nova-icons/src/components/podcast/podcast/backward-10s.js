import * as React from 'react';

const SvgComponent = _props => {
  const {'aria-label': ariaLabel, alt} = _props;
  const props = {
    ..._props,
    ...(ariaLabel || alt
      ? {
          role: 'img'
        }
      : {
          'aria-hidden': 'true'
        })
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.87 19.99" {...props}>
      <path
        d="M11.88 0C9.16 0 6.65 1.1 4.81 2.94L3.72 1.85a.5.5 0 00-.85.35v4.3c0 .28.22.5.5.5h4.29c.45 0 .67-.54.35-.85l-1.8-1.8A7.921 7.921 0 0111.86 2c4.41 0 8 3.58 8 8s-3.32 7.73-7.5 7.98c-.28.02-.5.24-.5.52v1c0 .28.22.5.5.49 5.28-.26 9.5-4.65 9.5-9.99S17.38 0 11.87 0h.01zM2.21 8.6L0 9.38l.41 1.42 1.58-.44v6.65h1.66V8.6H2.21z"
        fill="currentColor"
      />
      <path
        d="M8.29 17.17c2.15 0 3.36-1.78 3.36-4.37s-1.21-4.37-3.36-4.37-3.36 1.78-3.36 4.37 1.22 4.37 3.36 4.37zm0-1.62c-1.13 0-1.7-.97-1.7-2.75s.58-2.76 1.7-2.76 1.72.98 1.72 2.76-.59 2.75-1.72 2.75z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SvgComponent;
