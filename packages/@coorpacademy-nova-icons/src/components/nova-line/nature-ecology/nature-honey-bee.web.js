import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24V24H0z" />
    <g fill="currentColor">
      <path d="M20.941 14A3.48 3.48 0 0 0 22 11.5C22 9.57 20.43 8 18.5 8H17v2h1.5a1.501 1.501 0 0 1 0 3H17v2h1.5a1.501 1.501 0 0 1 0 3H17v2h1.5c1.93 0 3.5-1.57 3.5-3.5 0-.979-.407-1.863-1.059-2.5zM2 11.5c0 .98.407 1.865 1.059 2.5A3.485 3.485 0 0 0 2 16.5C2 18.43 3.57 20 5.5 20H7v-2H5.5a1.501 1.501 0 0 1 0-3H7v-2H5.5a1.501 1.501 0 0 1 0-3H7V8H5.5C3.57 8 2 9.57 2 11.5zM15.168 3.445l-1.861 2.792C12.895 6.095 12.46 6 12 6s-.895.095-1.307.237L8.832 3.445a1 1 0 0 0-1.664 1.11l1.861 2.793A3.964 3.964 0 0 0 8 10v8c0 2.206 1.794 4 4 4s4-1.794 4-4v-8a3.964 3.964 0 0 0-1.029-2.652l1.861-2.793a1.001 1.001 0 0 0-1.664-1.11zM14 10v1h-4v-1c0-1.102.897-2 2-2s2 .898 2 2zm0 3v2h-4v-2h4zm-2 7c-1.103 0-2-.896-2-2v-1h4v1c0 1.104-.897 2-2 2z" />
    </g>
  </svg>
);

export default SvgComponent;
