import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <g fill="currentColor">
      <path d="M17 2c-3.309 0-6 2.693-6 6 0 3.309 2.691 6 6 6 3.308 0 6-2.691 6-6 0-3.307-2.692-6-6-6zm1 10.001h-2v-4h2v4zm0-6a1 1 0 1 1-2 0c0-.554.447-1 1-1s1 .446 1 1zM8 16.771l3.791-2.707A7.993 7.993 0 0 1 10.079 12H2c-.194 0-.378.037-.556.088L8 16.771z" />
      <path d="M13.596 15.231l-5.015 3.582a.995.995 0 0 1-1.162 0l-7.364-5.26A1.996 1.996 0 0 0 0 14v8c0 1.103.896 2 2 2h12c1.104 0 2-.897 2-2v-6.069a7.89 7.89 0 0 1-2.404-.7z" />
    </g>
  </svg>
);

export default SvgComponent;
