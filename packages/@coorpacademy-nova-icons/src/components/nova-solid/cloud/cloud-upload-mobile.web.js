import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .003h24v24H0z" />
    <g fill="currentColor">
      <path d="M7 11c0-1 1-2 1-2l2.848-2.848C9.488 4.407 8.289 4 7 4 4.243 4 2 6.243 2 9s2.243 5 5 5v-3zM15 0c-2.51 0-4.74 1.31-5.979 3.357.861.408 1.772 1.118 2.651 2.244C12.404 5.414 13 6 13 6l3.001 3.001S17 9.999 17 11v2.705c2.888-.862 5-3.54 5-6.705 0-3.859-3.141-7-7-7z" />
      <g>
        <path d="M15 13H9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1zm-1 8h-4v-6h4v6zM11 12.001h2V10h2l-3-3-3 3h2z" />
      </g>
    </g>
  </svg>
);

export default SvgComponent;
