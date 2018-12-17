import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3 6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.96 4.96 0 0 0-.833-2.752l1.54-1.54L12.293.294l-1.54 1.54a4.956 4.956 0 0 0-5.505 0L3.708.294 2.293 1.707l1.54 1.54A4.974 4.974 0 0 0 3 6zM14 11.102a7.023 7.023 0 0 1 2-1.422V9c0-.551-.448-1-1-1H1c-.552 0-1 .449-1 1v7h2v-6h1v6a1 1 0 0 0 1 1h1v3h2v-3h2v3h2v-3h1v-1.002c0-1.316.369-2.541 1-3.593V10h1v1.102zM23 14.998c0-2.206-1.794-4-4-4s-4 1.794-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-4-2c1.103 0 2 .896 2 2h-4c0-1.104.897-2 2-2zm3 9h-6v-5h6v5z" />
      <circle cx={19} cy={18.998} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
