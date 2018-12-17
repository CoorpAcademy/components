import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M15 4c0-1.654-1.346-3-3-3S9 2.346 9 4s1.346 3 3 3 3-1.346 3-3zm-3 1c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zM18.95 19.684l-1-3A1.001 1.001 0 0 0 17 16h-.279l-.771-2.316A1.001 1.001 0 0 0 15 13V9h1V7H8v2h1v4a1 1 0 0 0-.949.684L7.28 16H7a1 1 0 0 0-.949.684l-1 3a.994.994 0 0 0 .139.9A.994.994 0 0 0 6 21h12a.998.998 0 0 0 .811-.416.997.997 0 0 0 .139-.9zM11 9h2v4h-2V9zm-1.279 6h4.559l.334 1H9.387l.334-1zm-2.334 4l.334-1h8.559l.334 1H7.387z" />
    </g>
  </svg>
);

export default SvgComponent;
