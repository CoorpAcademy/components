import * as React from 'react';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M7.001 18a7.495 7.495 0 01-.074-1c0-4.418 3.837-8 8.571-8 2.071 0 3.97.686 5.452 1.827.032-.272.048-.548.048-.827 0-4.411-4.038-8-9-8s-9 3.589-9 8c0 1.515.468 2.959 1.36 4.225L.584 18h6.417z" />
      <path d="M21.459 19.389A5.602 5.602 0 0021.997 17c0-3.309-2.916-6-6.5-6s-6.5 2.691-6.5 6 2.916 6 6.5 6h8.368l-2.406-3.611z" />
    </g>
  </svg>
);

export default SvgComponent;
