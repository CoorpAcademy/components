import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11.461 17h1.289v-1.5h-.914z" />
      <path d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM9 20H7.5v-2.772l-.126.188c-.278.418-.97.418-1.248 0L6 17.228V20H4.5v-5.25a.75.75 0 1 1 1.374-.416l.876 1.314.876-1.314A.75.75 0 0 1 9 14.75V20zm6-1.5h-.75V20h-1.5v-1.5H10.5a.75.75 0 0 1-.728-.932l.75-3A.75.75 0 0 1 11.25 14h2.25a.75.75 0 0 1 .75.75V17H15v1.5zm3 1.44l.016.06H16.472L15 14h1.5l.739 2.927.718-2.927H19.5L18 19.94zM15 7V2l5 5h-5z" />
    </g>
  </svg>
);

export default SvgComponent;
