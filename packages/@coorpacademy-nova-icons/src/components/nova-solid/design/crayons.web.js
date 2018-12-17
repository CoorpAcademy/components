import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M6 2H5L4 7h3zM3 11h5v8H3zM3 8h5v2H3zM3 20h5v2H3zM13 2h-1l-1 5h3zM10 20h5v2h-5zM10 8h5v2h-5zM10 11h5v8h-5zM20 2h-1l-1 5h3zM17 8h5v2h-5zM17 20h5v2h-5zM17 11h5v8h-5z" />
    </g>
  </svg>
);

export default SvgComponent;
