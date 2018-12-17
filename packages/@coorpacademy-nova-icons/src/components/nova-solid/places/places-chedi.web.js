import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M16.741 12.973c-.361-1.388-.819-2.429-1.89-2.808L14.275 7h-4.55l-.568 3.121C7.947 10.458 7.379 11.544 7 13c-1.589 6.096-3.31 8-5 8v2h20v-2c-1.693 0-3.673-1.934-5.259-8.027zM13.911 5L13.18.984a1.199 1.199 0 1 0-2.359 0L10.089 5h3.822z" />
    </g>
  </svg>
);

export default SvgComponent;
