import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24.001v24.002H.001z" />
    <g fill="currentColor">
      <path d="M14.979 3.791A1.002 1.002 0 0 0 14 3h-4c-.471 0-.878.33-.978.791L6.407 16h11.188L14.979 3.791zM12.25 6a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM10 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm2.625 4a1.376 1.376 0 1 1 .001-2.751A1.376 1.376 0 0 1 12.625 14zM17 21c-.345 0-.5-.585-.5-1 0-.415.155-1 .5-1a1 1 0 1 0 0-2H7a1 1 0 1 0 0 2c.345 0 .5.585.5 1 0 .415-.155 1-.5 1a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z" />
    </g>
  </svg>
);

export default SvgComponent;
