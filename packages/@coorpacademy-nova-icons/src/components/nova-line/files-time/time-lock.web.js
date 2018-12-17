import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8 4v5.535l3.446 2.297 1.109-1.664L10 8.465V4z" />
      <path d="M18 9c0-4.962-4.037-9-9-9S0 4.038 0 9s4.038 9 9 9a8.96 8.96 0 0 0 3-.524v-2.161A6.938 6.938 0 0 1 9 16c-3.86 0-7-3.14-7-7s3.14-7 7-7c3.859 0 7 3.14 7 7h2z" />
      <path d="M23 15c0-2.206-1.795-4-4-4s-4 1.794-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-4-2a2 2 0 0 1 2 2h-4a2 2 0 0 1 2-2zm3 9h-6v-5h6v5z" />
      <circle cx={19} cy={19} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
