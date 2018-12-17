import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <path
      d="M23 13.999h-6.18l-.603-3.011A2.004 2.004 0 0 0 18 8.999v-6h-2v2h-3v-2h-2v2H8v-2H6v6c0 1.03.782 1.88 1.783 1.989l-.603 3.011H1v2h1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V20a1.002 1.002 0 0 1 2.001.002l-.001.996a1 1 0 0 0 1 1.001h7a1 1 0 0 0 1-1v-5h1v-2zM9.773 9.366A.997.997 0 0 0 9 8.999H8v-2h8v2h-1a.999.999 0 0 0-.98 1.197l.761 3.803H9.219l.761-3.803a.998.998 0 0 0-.207-.83zM20 19.999h-5c0-1.653-1.346-3-3-3s-3 1.346-3.001 3H4v-4h16v4z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
