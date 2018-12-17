import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17 7c0-2.757-2.243-5-5-5S7 4.243 7 7H3v2h4c0 2.757 2.243 5 5 5s5-2.243 5-5h4V7h-4zm-5-3c1.654 0 3 1.346 3 3H9c0-1.654 1.346-3 3-3zm0 8c-1.654 0-3-1.346-3-3h6c0 1.654-1.346 3-3 3zM12 15c-4.71 0-8 2.467-8 6v3h16v-3c0-3.533-3.29-6-8-6zm3 2.471V18H9v-.529c.863-.303 1.877-.471 3-.471s2.137.168 3 .471zM6 22v-1c0-.897.36-1.691 1-2.331V22H6zm3 0v-2h6v2H9zm9 0h-1v-3.331c.64.64 1 1.434 1 2.331v1z" />
    </g>
  </svg>
);

export default SvgComponent;
