import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M21.414 18.586l-2.804-2.803A8.942 8.942 0 0 0 20 11c0-4.963-4.038-9-9-9s-9 4.037-9 9 4.038 9 9 9a8.925 8.925 0 0 0 4.782-1.39l2.804 2.804c.378.378.88.586 1.414.586s1.036-.208 1.414-.586c.78-.779.78-2.049 0-2.828zM4 11c0-3.859 3.14-7 7-7s7 3.141 7 7-3.14 7-7 7-7-3.141-7-7z" />
      <circle cx={11} cy={13} r={2} />
      <path d="M9 9a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0V9zM11 10a1 1 0 0 0 1-1V8a1 1 0 1 0-2 0v1a1 1 0 0 0 1 1zM14 8a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
