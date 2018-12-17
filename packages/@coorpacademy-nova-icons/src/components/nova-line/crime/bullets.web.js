import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M6 11h10c1.592 0 4-1.196 4-3s-2.408-3-4-3H6V4H4v8h2v-1zm12-3.002C17.957 8.32 16.821 9 16 9h-1V7h1c.818 0 1.955.68 2 .998zM13 7v2H6V7h7zM18 13H8c-1.592 0-4 1.196-4 3s2.408 3 4 3h10v1h2v-8h-2v1zM6 16.003C6.045 15.68 7.182 15 8 15h1v2H8c-.821 0-1.957-.68-2-.997zM11 17v-2h7v2h-7z" />
    </g>
  </svg>
);

export default SvgComponent;
