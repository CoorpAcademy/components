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
    <svg
      id="prefix__Calque_1"
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 50 42"
      xmlSpace="preserve"
      {...props}
    >
      <style>{'.prefix__st0{fill:#f73f52}'}</style>
      <path
        className="prefix__st0"
        d="M27.1 10.6c0-1.2-.9-2.1-2.1-2.1-1.2 0-2.1.9-2.1 2.1v14.5c0 1.2.9 2.1 2.1 2.1 1.2 0 2.1-.9 2.1-2.1V10.6zM25 32.5c1.2 0 2.1-.9 2.1-2.1 0-1.2-.9-2.1-2.1-2.1-1.2 0-2.1.9-2.1 2.1 0 1.1 1 2.1 2.1 2.1z"
      />
      <path
        className="prefix__st0"
        d="M40.4 6.8C36.6 2.6 31.2.1 25.6.1 15.2.2 6.7 8.2 5.9 18.4l-2.1-3.1c-.6-1-1.9-1.2-2.9-.6s-1.2 1.9-.6 2.9l6.1 9c.8.8 2.1.8 2.9 0l6.8-8.1c.7-.9.6-2.2-.3-2.9-.9-.7-2.2-.6-2.9.3l-3 3.6c.4-8.5 7.3-15.2 15.7-15.2 4.5 0 8.7 1.9 11.7 5.3.8.9 2.1.9 2.9.2.9-.8 1-2.1.2-3zM49.6 24.3l-6.1-9c-.8-.8-2.1-.8-2.9 0l-6.8 8.1c-.7.9-.6 2.2.3 2.9.9.7 2.2.6 2.9-.3l3-3.6c-.3 8.4-7.2 15.1-15.6 15.1-4.5 0-8.7-1.9-11.7-5.3-.8-.9-2.1-.9-2.9-.2-.9.8-.9 2.1-.2 2.9 3.8 4.2 9.2 6.7 14.8 6.7 10.4 0 18.9-8.1 19.7-18.3l2.1 3.1c.6 1 1.9 1.2 2.9.6.9-.4 1.2-1.7.5-2.7z"
      />
    </svg>
  );
};

export default SvgComponent;
