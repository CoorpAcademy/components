import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24.001v24H.001z" />
    <g fill="currentColor">
      <path d="M15.894 6.553C15.096 4.954 13.64 4 12 4c-1.639 0-3.095.954-3.894 2.553-.332.664-2.1 4.771-2.1 5.448h11.988c0-.677-1.767-4.785-2.1-5.448zM23 13H1a1 1 0 0 0-1 1c0 .567.082 1.274.277 2h23.445A7.886 7.886 0 0 0 24 14a1 1 0 0 0-1-1zM5 20h14c2.377 0 3.697-1.419 4.377-3H.623c.68 1.581 2 3 4.377 3z" />
    </g>
  </svg>
);

export default SvgComponent;
