import * as React from 'react';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" aria-hidden="true" {...props}>
    <g fill="currentColor">
      <path d="M0 27.5c0 .5.4.8.8.8h16.3L6.9 38.6c-.3.3-.3.9 0 1.2.3.3.9.3 1.2 0l10.2-10.2v9.7c0 .5.4.8.8.8.5 0 .8-.4.8-.8v-9.7l10.2 10.2c.3.3.9.3 1.2 0 .3-.3.3-.9 0-1.2L21.2 28.3h18c.5 0 .8-.4.8-.8V8.3H0v19.2zM39.2 0H.8C.4 0 0 .4 0 .8v5.8h40V.8c0-.4-.4-.8-.8-.8z" />
    </g>
  </svg>
);

export default SvgComponent;
