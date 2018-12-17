import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 10.001H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1l2 2v-8l-2 2zM14.416 14.358l-.773-1.285a1.24 1.24 0 0 0 .607-1.072c0-.441-.226-.84-.604-1.07l.781-1.281a2.735 2.735 0 0 1 1.322 2.352 2.761 2.761 0 0 1-1.333 2.356z" />
      <path d="M16.318 5.273L15 .001H9L7.682 5.273a7.987 7.987 0 0 0 0 13.455L9 24.001h6l1.318-5.272a7.987 7.987 0 0 0 0-13.456zM12 18.001a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
    </g>
  </svg>
);

export default SvgComponent;
