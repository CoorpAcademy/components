import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21.293 6.286L19 8.579V2.993h-2v5.586l-2.293-2.293L13.293 7.7 18 12.407 22.707 7.7zM9 18.5a1.5 1.5 0 0 0 3 0v-5.306a.753.753 0 0 0-.983-.712l-5 1.63a.75.75 0 0 0-.517.713V18A1.5 1.5 0 1 0 7 19.5v-4.131l3.5-1.141V17A1.5 1.5 0 0 0 9 18.5z" />
      <path d="M14 22H2V11h10V9H2c-1.103 0-2 .898-2 2v11c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8h-2v8z" />
    </g>
  </svg>
);

export default SvgComponent;
