import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 14c2.757 0 5-2.243 5-5s-2.243-5-5-5-5 2.243-5 5 2.243 5 5 5zm0-8c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zM12 16c-4.711 0-8 2.467-8 6v2h16v-2c0-3.533-3.289-6-8-6zm-.338 2.01L10.332 22H6c0-2.278 2.313-3.888 5.662-3.99zM13.666 22l-1.33-3.99C15.687 18.111 18 19.721 18 22h-4.334z" />
    </g>
  </svg>
);

export default SvgComponent;
