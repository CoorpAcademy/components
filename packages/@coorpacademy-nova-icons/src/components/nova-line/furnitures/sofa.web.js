import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M22 14c0-1.654-1.346-3-3-3V9c0-3.86-3.141-7-7-7S5 5.14 5 9v2c-1.654 0-3 1.346-3 3 0 1.302.838 2.402 2 2.815V19c0 1.103.896 2 2 2v1h2v-1h8v1h2v-1c1.104 0 2-.897 2-2v-2.184A2.995 2.995 0 0 0 22 14zM7 9c0-2.757 2.243-5 5-5s5 2.243 5 5v2.58c-1.004.665-1.557 1.802-1.812 2.874C14.453 14.206 13.418 14 12 14s-2.453.206-3.188.454C8.557 13.382 8.004 12.245 7 11.58V9zm12 6a1 1 0 0 0-1 1v3H6v-3a1 1 0 0 0-1-1 1.001 1.001 0 0 1 0-2c1.959 0 1.999 2.88 2 3 0 .392.242.734.598.897s.789.09 1.084-.166C8.689 16.724 9.555 16 12 16c2.416 0 3.289.708 3.293.708v-.001A1 1 0 0 0 17 16.004c.001-.124.041-3.004 2-3.004a1.001 1.001 0 0 1 0 2z" />
      <path d="M10.707 11.707L12 10.414l1.293 1.293 1.414-1.414L13.414 9l1.293-1.293-1.414-1.414L12 7.586l-1.293-1.293-1.414 1.414L10.586 9l-1.293 1.293z" />
    </g>
  </svg>
);

export default SvgComponent;
