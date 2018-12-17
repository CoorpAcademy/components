import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M22 16h-2c0-1.654-1.346-3-3-3a2.95 2.95 0 0 0-.9.142C15.18 11.814 13.664 11 12 11s-3.18.814-4.1 2.142A2.95 2.95 0 0 0 7 13c-1.654 0-3 1.346-3 3H2v2h2.382l1.724 3.447A.998.998 0 0 0 7 22h10c.379 0 .725-.214.895-.553L19.618 18H22v-2zM7 15c.296 0 .516.135.647.249a.999.999 0 0 0 1.578-.379C9.689 13.734 10.777 13 12 13s2.311.734 2.774 1.869a1 1 0 0 0 1.578.379A.995.995 0 0 1 17 15c.551 0 1 .449 1 1H6c0-.551.449-1 1-1zm9.382 5H7.618l-1-2h10.764l-1 2zM7.707 8.293c-1.684-1.684-.291-3.286.004-3.59L7 4l-.707-.707c-1.289 1.289-2.354 4.061 0 6.414l1.414-1.414zM11.293 6.293l1.414 1.414c1.986-1.986 1.088-4.326 0-5.414l-1.42 1.408c.3.31 1.186 1.412.006 2.592zM17.404 8.293l1.414 1.414c2.041-2.04.975-4.988.125-6.261l-1.664 1.109c.016.023 1.53 2.334.125 3.738z" />
    </g>
  </svg>
);

export default SvgComponent;
