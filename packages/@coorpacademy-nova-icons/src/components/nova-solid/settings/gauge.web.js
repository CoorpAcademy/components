import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 4C5.935 4 1 8.934 1 15v5h7c0-1.858 1.279-3.41 3-3.858V11h2v5.142c1.721.448 3 2 3 3.858h7v-5c0-6.066-4.935-11-11-11zM5 16a1 1 0 1 1-.002-1.998A1 1 0 0 1 5 16zm2-5a1 1 0 1 1-.002-1.998A1 1 0 0 1 7 11zm5-2a1 1 0 1 1-.002-1.998A1 1 0 0 1 12 9zm5 2a1 1 0 1 1-.002-1.998A1 1 0 0 1 17 11zm2 5a1 1 0 1 1-.002-1.998A1 1 0 0 1 19 16z"
    />
  </svg>
);

export default SvgComponent;
