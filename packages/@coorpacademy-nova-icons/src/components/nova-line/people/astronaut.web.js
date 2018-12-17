import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M16 15H8c-1.104 0-2-.897-2-2V9c0-3.309 2.691-6 6-6s6 2.691 6 6v4c0 1.103-.896 2-2 2zM12 5C9.795 5 8 6.795 8 9v4h8.002L16 9c0-2.205-1.795-4-4-4z"
      fill="currentColor"
    />
    <path
      fill="currentColor"
      d="M9 8h6v4H9zM20 24H4v-2c0-3.533 3.289-6 8-6s8 2.467 8 6v2zM6 22h12c0-2.355-2.467-4-6-4s-6 1.645-6 4z"
    />
    <circle cx={11} cy={20} r={1} fill="currentColor" />
    <circle cx={14} cy={20} r={1} fill="currentColor" />
  </svg>
);

export default SvgComponent;
