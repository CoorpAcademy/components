import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24.001v24.001H0z" />
    <g fill="currentColor">
      <path d="M21.708 9.294l-.001-.001L18 5.586V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2.586L2.293 9.293l-.001.001C2.103 9.484 2 9.793 2 10v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-3c0-.207-.103-.516-.292-.706zM7.707 6.707A.996.996 0 0 0 8 6V4h8v2c0 .266.105.52.293.707L18.586 9H5.414l2.293-2.293zM20 12H4v-1h16v1zM7 17l-.707-.707c-1.289 1.289-2.354 4.061 0 6.414l1.414-1.414c-1.684-1.684-.291-3.286.004-3.59L7 17zM11.287 16.701c.3.31 1.186 1.412.006 2.592l1.414 1.414c1.986-1.986 1.088-4.326 0-5.414l-1.42 1.408zM17.279 17.555c.016.023 1.529 2.334.125 3.738l1.414 1.414c2.041-2.04.975-4.988.125-6.261l-1.664 1.109z" />
    </g>
  </svg>
);

export default SvgComponent;
