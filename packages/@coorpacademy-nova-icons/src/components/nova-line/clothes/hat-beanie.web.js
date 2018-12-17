import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24.001v24H.001z" />
    <g fill="currentColor">
      <path d="M16 5h-1.586l1.293-1.293-1.414-1.414L13 3.586V2h-2v1.586L9.707 2.293 8.293 3.707 9.586 5H8v2h8zM20 16h-.039c-.39-5.121-3.746-9-7.961-9s-7.571 3.879-7.961 9H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-8-7c3.109 0 5.592 3.004 5.951 7H6.049C6.408 12.004 8.891 9 12 9zm7 11H5v-2h14v2z" />
    </g>
  </svg>
);

export default SvgComponent;
