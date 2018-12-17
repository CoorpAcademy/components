import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M17.793 11.407A3.02 3.02 0 0 0 19 9V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2c0 .942.451 1.842 1.208 2.407.503.376.792.956.792 1.593 0 .639-.288 1.219-.793 1.594A3.019 3.019 0 0 0 6 17v3c0 1.654 1.346 3 3 3h7c1.654 0 3-1.346 3-3v-3c0-.942-.451-1.841-1.209-2.407A1.962 1.962 0 0 1 17 13c0-.637.289-1.217.793-1.593zM17 3h-3V1h-3v2H8v2h9z" />
    </g>
  </svg>
);

export default SvgComponent;
