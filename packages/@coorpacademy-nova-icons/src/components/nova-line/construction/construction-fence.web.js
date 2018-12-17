import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path
      d="M21 6h-1V3h-2v3H6V3H4v3H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v9h2v-3h12v3h2v-9h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-6.5 2l-1 4h-4l1-4h4zM4 8h3.5l-1 4H4V8zm14 10H6v-4h12v4zm2-6h-3.5l1-4H20v4z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
