import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M3 16h3v2H3zM3 13h3v2H3zM3 10h3v2H3zM3 19h9v3H3z" />
      <circle cx={10} cy={5} r={3} />
      <path d="M17.883 2.8l-1.2-1.6c-2.8 2.1-1.434 3.921-.7 4.9.745.993.9 1.2-.3 2.1l1.2 1.6c2.8-2.1 1.434-3.922.7-4.9-.745-.993-.9-1.2.3-2.1zM22.017 4.9c-.745-.993-.9-1.2.3-2.1l-1.2-1.6c-2.8 2.1-1.434 3.921-.7 4.9.745.993.9 1.2-.3 2.1l1.2 1.6c2.8-2.1 1.433-3.922.7-4.9zM13 12c0-1.654-1.346-3-3-3s-3 1.346-3 3v5h7v5h2v-7h-3v-3z" />
    </g>
  </svg>
);

export default SvgComponent;
