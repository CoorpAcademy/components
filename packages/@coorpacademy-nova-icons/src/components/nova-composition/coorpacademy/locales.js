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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 29" {...props}>
      <g className="prefix__nc-icon-wrapper">
        <path
          className="prefix__st0"
          d="M26.8 16.8c-1.2 5.2-5.8 9-11.3 9-5.2 0-9.7-3.5-11.1-8.3l3.4-3.4H0V22l2.4-2.4c2.1 5.2 7.2 8.8 13.1 8.8 7 0 12.7-5 14-11.6h-2.7zM28.6 8.8C26.5 3.7 21.4 0 15.5 0c-7 0-12.7 5-14 11.6h2.6c1.2-5.2 5.8-9 11.3-9 5.2 0 9.7 3.5 11.1 8.3l-3.4 3.4H31V6.5l-2.4 2.3z"
          fill="currentColor"
        />
        <g>
          <path
            className="prefix__st1"
            d="M21.7 14.5c0 3.5-2.8 6.3-6.2 6.3-3.4 0-6.2-2.9-6.2-6.4 0-3.4 2.6-6 6-6.1h.3c3.4 0 6.1 2.7 6.1 6.2zM15.2 8.3c-3.2 3.5-3.2 8.1 0 12.4M15.8 8.3c3.2 3.5 3.2 8.1 0 12.4M10.3 11h10.4M9.3 14.2h12.4M10.1 17.5H21"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};

export default SvgComponent;
