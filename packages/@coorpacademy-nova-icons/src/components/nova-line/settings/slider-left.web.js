import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M24 11H12.898C12.434 8.72 10.414 7 8 7s-4.434 1.72-4.898 4H0v2h3.102c.464 2.279 2.484 4 4.898 4s4.434-1.721 4.898-4H24v-2zM8 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
