import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 9V7h-3.42L12.868.503l-1.736.993L14.277 7H5.723l3.145-5.504L7.132.503 3.42 7H0v2zM18.58 10H1.42l1.604 7.217A.998.998 0 0 0 4 18h11.422a5.006 5.006 0 0 1 1.867-2.192L18.58 10zM17 19h6v2h-6z" />
    </g>
  </svg>
);

export default SvgComponent;
