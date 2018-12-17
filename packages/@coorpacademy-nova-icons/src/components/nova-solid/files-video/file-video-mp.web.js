import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 15.5h-.75V17H12a.75.75 0 0 0 0-1.5zM16.711 17h.539v-1.5h-.164z" />
      <path d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM9 20H7.5v-2.772l-.126.188c-.278.418-.97.418-1.248 0L6 17.228V20H4.5v-5.25a.75.75 0 0 1 1.374-.416l.876 1.314.876-1.314A.75.75 0 0 1 9 14.75V20zm3-1.5h-.75V20h-1.5v-6H12c1.24 0 2.25 1.01 2.25 2.25S13.24 18.5 12 18.5zm7.5 0h-.75V20h-1.5v-1.5h-1.5a.75.75 0 0 1-.728-.932l.75-3A.75.75 0 0 1 16.5 14H18a.75.75 0 0 1 .75.75V17h.75v1.5zM15 7V2l5 5h-5z" />
    </g>
  </svg>
);

export default SvgComponent;
