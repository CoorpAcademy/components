import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001 0H24v24.001H-.001z" />
    <path
      d="M21.721 14l-2.333-7H22V5h-9V3h-2v2H2v2h2.612l-2.333 7H1v1c0 2.757 2.243 5 5 5s5-2.243 5-5v-1H9.721L7.388 7H11v1h2V7h3.612l-2.333 7H13v1c0 2.757 2.243 5 5 5s5-2.243 5-5v-1h-1.279zM6 18a3.004 3.004 0 0 1-2.828-2h5.656A3.004 3.004 0 0 1 6 18zm-1.612-4L6 9.162 7.612 14H4.388zM18 9.162L19.612 14h-3.225L18 9.162zM18 18a3.004 3.004 0 0 1-2.828-2h5.656A3.004 3.004 0 0 1 18 18z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
