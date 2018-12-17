import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M10 18c-4.411 0-8-3.589-8-8 0-2.021.759-3.864 2-5.274V10h2.279l2.211 6.633L14 12.5V6h-3V2.069c3.94.495 7 3.859 7 7.931 0 .589-.064 1.177-.191 1.745l1.952.435A10.07 10.07 0 0 0 20 10c0-5.514-4.486-10-10-10S0 4.486 0 10s4.486 10 10 10c.75 0 1.497-.083 2.22-.248l-.442-1.95A8.009 8.009 0 0 1 10 18zm2-10v3.5l-2.49 1.867L7.721 8H6V3.083A7.933 7.933 0 0 1 9 2.07V8h3z" />
      <path d="M22 17h-3v-3h-2v3h-3v2h3v3h2v-3h3z" />
    </g>
  </svg>
);

export default SvgComponent;
