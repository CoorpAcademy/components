import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 7.999a1 1 0 0 0 .534-1.846l-9.5-6a1.004 1.004 0 0 0-1.068 0l-9.5 6A1 1 0 1 0 1 7.999h19zM3 9h3v8H3zM9 9h3v8H9zM14.422 18H1v2h12.26a7.028 7.028 0 0 1 1.43-1.507c-.094-.163-.192-.321-.268-.493z" />
      <circle cx={19} cy={16} r={3} />
      <path d="M19 19a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5zM18 11.101V9h-3v4.029a4.984 4.984 0 0 1 3-1.928z" />
    </g>
  </svg>
);

export default SvgComponent;
