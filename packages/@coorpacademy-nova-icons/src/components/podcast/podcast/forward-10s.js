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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.78 19.99" {...props}>
      <path
        d="M9.99 0c2.71 0 5.23 1.1 7.07 2.94l1.09-1.09a.5.5 0 01.85.35v4.3c0 .28-.22.5-.5.5h-4.29c-.45 0-.67-.54-.35-.85l1.8-1.8A7.921 7.921 0 0010.01 2C5.59 2 2 5.58 2 10s3.32 7.73 7.5 7.98c.28.02.5.24.5.52v1c0 .28-.22.5-.5.49C4.22 19.73 0 15.34 0 10S4.49 0 10 0h-.01z"
        fill="currentColor"
      />
      <path
        d="M11.34 8.61l-2.21.78.41 1.42 1.58-.44v6.65h1.66V8.61h-1.44zM17.42 17.18c2.15 0 3.36-1.78 3.36-4.37s-1.21-4.37-3.36-4.37-3.36 1.78-3.36 4.37 1.22 4.37 3.36 4.37zm0-1.62c-1.13 0-1.7-.97-1.7-2.75s.58-2.76 1.7-2.76 1.72.98 1.72 2.76-.59 2.75-1.72 2.75z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SvgComponent;
