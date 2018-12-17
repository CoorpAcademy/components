import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM9 20H7.168L6 18.335V20H4.5v-6H6v1.665L7.168 14H9l-2.104 3L9 20zm5-4.5h-3v.75h2.25v1.5H11v.75h3V20h-3.75a.749.749 0 0 1-.75-.75v-4.5c0-.415.335-.75.75-.75H14v1.5zm4.012 2.221V20h-1.5v-2.25H16.5L15 14h1.5l.75 1.875L18 14h1.5l-1.488 3.721zM15 7V2l5 5h-5z"
    />
  </svg>
);

export default SvgComponent;
