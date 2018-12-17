import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="#767676"
      d="M20 2.001H4c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2v-16c0-1.103-.896-2-2-2zm-4 2.586l3.707 3.707-1.414 1.414L17 8.415v7.586h-2V8.415l-1.293 1.293-1.414-1.414L16 4.587zm-8 0l3.707 3.707-1.414 1.414L9 8.415v7.586H7V8.415L5.707 9.708 4.293 8.294 8 4.587zm12 14.414H4v-2h16v2z"
    />
  </svg>
);

export default SvgComponent;
