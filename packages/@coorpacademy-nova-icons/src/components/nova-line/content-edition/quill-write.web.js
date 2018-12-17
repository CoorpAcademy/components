import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M16 4.221v2.85l-1.756-1.757a8.695 8.695 0 0 0-.968.818c-2.754 2.754-2.392 4.954-1.377 5.969L9 15v2l4.209-4.209c1.163.238 2.781-.189 4.659-2.067C20.623 7.968 22 2 22 2s-3.203.743-6 2.221z"
      fill="currentColor"
    />
    <path
      d="M14 23H3c-1.103 0-2-.897-2-2V10c0-1.102.897-2 2-2h6v2H3v11h11v-6h2v6c0 1.102-.897 2-2 2z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
