import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M23.5 16H19v1.5h1.5V22H22v-4.5h1.5zM16 18.774l-1.626-2.44A.751.751 0 0 0 13 16.75V22h1.5v-2.773l1.626 2.439a.75.75 0 0 0 1.374-.416V16H16v2.774zM5.5 18.25A2.252 2.252 0 0 0 3.25 16H1v6h1.5v-1.5h.388l.876 1.5H5.5l-1.074-1.841A2.242 2.242 0 0 0 5.5 18.25zm-3-.75h.75a.75.75 0 0 1 0 1.5H2.5v-1.5zM5 9h2v5h3v-4h4v4h3V9h2a.999.999 0 0 0 .707-1.707l-7-6a.999.999 0 0 0-1.414 0l-7 6A1 1 0 0 0 5 9zM7 16.75v4.5c0 .414.336.75.75.75h3.75v-1.5h-3v-.75h2.25v-1.5H8.5v-.75h3V16H7.75a.75.75 0 0 0-.75.75z" />
    </g>
  </svg>
);

export default SvgComponent;
