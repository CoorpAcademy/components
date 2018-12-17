import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <path
      d="M22 8.999v-2h-2v-1c0-2.755-2.243-5-5-5H9c-2.757 0-5 2.245-5 5v1H2v2h3v7H4a1 1 0 0 0-.949.684l-1 3A.999.999 0 0 0 3 20.999h18a1 1 0 0 0 .949-1.316l-1-3a1 1 0 0 0-.949-.684h-1v-7h3zm-16-3c0-1.654 1.346-3 3-3h6c1.654 0 3 1.346 3 3v1H6v-1zm5 10v-7h2v7h-2zm-4-7h2v7H7v-7zm12.612 10H4.387l.333-1h14.559l.333 1zm-2.612-3h-2v-7h2v7z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
