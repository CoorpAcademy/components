import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11 15.5h1.5V17H11zM6.75 15.5H6V17h.75a.75.75 0 0 0 0-1.5zM17.25 15.5h-.75V17h.75a.75.75 0 0 0 0-1.5z" />
      <path d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM9 20H7.263l-.875-1.5H6V20H4.5v-6h2.25A2.252 2.252 0 0 1 9 16.25c0 .809-.432 1.513-1.074 1.91L9 20zm5 0h-1.5v-1.5H11V20H9.5v-5.25c0-.415.335-.75.75-.75h3c.415 0 .75.335.75.75V20zm5.5 0h-1.737l-.876-1.5H16.5V20H15v-6h2.25a2.252 2.252 0 0 1 2.25 2.25c0 .809-.432 1.513-1.074 1.91L19.5 20zM15 7V2l5 5h-5z" />
    </g>
  </svg>
);

export default SvgComponent;
