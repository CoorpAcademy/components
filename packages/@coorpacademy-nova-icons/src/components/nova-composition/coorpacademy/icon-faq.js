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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 163.8 163.8" {...props}>
      <path
        fill="currentColor"
        d="M81.9 0C36.7 0 0 36.7 0 81.9s36.7 81.9 81.9 81.9 81.9-36.7 81.9-81.9S127.1 0 81.9 0zm0 140.8c-6.1 0-11.1-5-11.1-11.1s5-11.1 11.1-11.1 11.1 5 11.1 11.1-5 11.1-11.1 11.1zm10.2-43.5v8.5H71v-8.5c0-18.8 28-26.2 28-41C99 47.2 94.8 41 81.9 41s-17.1 8.2-17.1 15.4v1.7H46.9c0-.8 0-3.7.1-4.7C48.4 34.5 63.1 23 81.9 23c19.7 0 34.8 11.4 34.8 33.3 0 18.6-24.6 28-24.6 41z"
      />
    </svg>
  );
};

export default SvgComponent;
