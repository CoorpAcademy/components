import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M23.8 3.6l-1.6-1.2-3 4a.997.997 0 0 0-.2.6v9.5l-1 .75v2.5l2.6-1.95a1 1 0 0 0 .4-.8V9.388l1.684.561.633-1.898-2.284-.761L23.8 3.6zM17 4c0-1.654-1.346-3-3-3H6C4.346 1 3 2.346 3 4v18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4zm-4 9h-3c-.551 0-1 .449-1 1h3v2H9c0 .551.449 1 1 1h3v2h-3c-1.654 0-3-1.346-3-3v-2c0-1.654 1.346-3 3-3h3v2zm2-6H5V4c0-.551.449-1 1-1h8c.551 0 1 .449 1 1v3z" />
    </g>
  </svg>
);

export default SvgComponent;
