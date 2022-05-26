import * as React from 'react';

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <g fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M9 23h2v1h2v-1h2v-2H9z" />
      <path d="M12 5c3.9 0 7 3.1 7 7 0 2.7-1.6 5.2-4 6.3v.7c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-.7c-2.4-1.1-4-3.6-4-6.3 0-3.9 3.1-7 7-7z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 0h2v4h-2zM0 11h4v2H0zM20 11h4v2h-4zM17.308 5.277l2.97-2.97 1.414 1.414-2.97 2.97zM2.308 3.722l1.414-1.414 2.97 2.97-1.414 1.414z"
      />
    </g>
  </svg>
);

export default SvgComponent;
