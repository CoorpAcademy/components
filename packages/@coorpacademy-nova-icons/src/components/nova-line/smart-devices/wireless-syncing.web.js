import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M10.001 20.001H2v-1h8.001v-2H2v-10h14.001v-3c0-1.104-.897-2-2-2H2c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h8.001v-2zM2 4.001h12.001v1H2v-1z"
      fill="currentColor"
    />
    <path
      d="M8.883 12.853l-1.53-1.289a9.988 9.988 0 0 1 7.654-3.563 9.991 9.991 0 0 1 7.64 3.547l-1.527 1.291a7.992 7.992 0 0 0-6.112-2.838 7.988 7.988 0 0 0-6.125 2.852z"
      fill="currentColor"
    />
    <path
      d="M18.209 15.603a3.97 3.97 0 0 0-3.202-1.602c-1.27 0-2.437.584-3.2 1.601l-1.6-1.201a5.956 5.956 0 0 1 4.8-2.399 5.95 5.95 0 0 1 4.802 2.402l-1.6 1.199zM18.001 22.001h-6v-5h6v5zm-4-2h2v-1h-2v1z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
