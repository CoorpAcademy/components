import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .003h24v24H0z" />
    <path
      d="M8 12.006H5c-1.654 0-3-1.346-3-3s1.346-3 3-3c.571 0 1.131.166 1.617.48a1 1 0 0 0 1.518-.613A4.973 4.973 0 0 1 13 2.006 5.006 5.006 0 0 1 17.899 8h2.021a6.79 6.79 0 0 0 .08-.994c0-3.859-3.141-7-7-7a6.964 6.964 0 0 0-6.438 4.253A4.942 4.942 0 0 0 5 4.006c-2.757 0-5 2.243-5 5s2.243 5 5 5h3v-2z"
      fill="currentColor"
    />
    <path
      d="M17 24c-3.859 0-7-3.14-7-7 0-3.859 3.141-7 7-7s7 3.141 7 7c0 3.86-3.141 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
      fill="currentColor"
    />
    <path fill="currentColor" d="M16 17h2v4h-2z" />
    <circle cx={17} cy={15} r={1} fill="currentColor" />
  </svg>
);

export default SvgComponent;
