import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .006h24v24H0z" />
    <g fill="currentColor">
      <path d="M7.293 11.295l1.414 1.414L11 10.416v6.586h2v-6.586l2.293 2.293 1.414-1.414L12 6.588zM3 5.002v1h2v-1h1v-2H5c-1.103 0-2 .896-2 2zM8 3.002h3v2H8zM13 3.002h3v2h-3zM19 3.002h-1v2h1v1h2v-1a2 2 0 0 0-2-2zM5 18.002H3v1c0 1.102.897 2 2 2h1v-2H5v-1zM8 19.002h3v2H8zM13 19.002h3v2h-3zM19 19.002h-1v2h1c1.104 0 2-.898 2-2v-1h-2v1zM3 13.002h2v3H3zM3 8.002h2v3H3zM19 13.002h2v3h-2zM19 8.002h2v3h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
