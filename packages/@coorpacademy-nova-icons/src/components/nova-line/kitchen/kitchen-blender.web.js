import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M17 5h-1.279l-.771-2.316A1.001 1.001 0 0 0 14 2H6a1 1 0 0 0-.949.684l-1 3a1.006 1.006 0 0 0-.028.533l1.908 8.584-1.764 2.645A1.01 1.01 0 0 0 4 18v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3c0-.197-.059-.39-.168-.555L14.068 14.8 15.802 7H17c.551 0 1 .449 1 1v7h2V8c0-1.654-1.346-3-3-3zm-3.721-1l.334 1H6.387l.334-1h6.558zM14 20H6v-1.697L7.535 16h4.93L14 18.303V20zm-1.803-6H11v-3H9v3H7.803L6.246 7h7.508l-1.557 7z" />
      <circle cx={10} cy={18} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
