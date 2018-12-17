import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M4.882 5.851L3.353 4.562A9.995 9.995 0 0 1 11.007.999a9.991 9.991 0 0 1 7.64 3.547L17.12 5.837a7.992 7.992 0 0 0-6.112-2.838 7.995 7.995 0 0 0-6.126 2.852z"
      fill="currentColor"
    />
    <path
      d="M14.209 8.601c-.764-1.018-1.931-1.602-3.202-1.602s-2.438.583-3.2 1.6L6.207 7.4a6.024 6.024 0 0 1 4.8-2.4 5.95 5.95 0 0 1 4.802 2.402l-1.6 1.199zM16 24.001l-2-4h2v-4h2v3l3 1v4z"
      fill="currentColor"
    />
    <path
      d="M17 10.001H5c-1.103 0-2 .896-2 2v12h10v-2H5v-7h14v-3c0-1.104-.897-2-2-2zm-12 3v-1h12v1H5z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
