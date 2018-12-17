import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M7.011 4.124L3.105 5.86 12 9.902l3.439-1.562zM17.781 7.274l3.113-1.414-8.488-3.773a.99.99 0 0 0-.812 0l-2.216.986 8.403 4.201zM13 11.644V21.65l8.406-3.736a.996.996 0 0 0 .594-.913V7.554l-9 4.09zM11 11.644l-9-4.09v9.447c0 .396.232.754.594.914L11 21.65V11.644zm-7 2.357v-3l5 2v3l-5-2z" />
    </g>
  </svg>
);

export default SvgComponent;
