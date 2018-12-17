import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M20.759 3.349A.998.998 0 0 0 20 3H4a1.002 1.002 0 0 0-.988 1.152l2 13a.994.994 0 0 0 .541.741l6 3a.98.98 0 0 0 .894.001l6-3a.994.994 0 0 0 .541-.741l2-13a1 1 0 0 0-.229-.804zm-4.311 4.545L12.236 10H15a1 1 0 0 1 .97 1.243l-1 4A.998.998 0 0 1 14 16h-4a1 1 0 0 1-.97-.757L8.47 13h2.062l.25 1h2.438l.5-2h-5.5l-.495-1.981L11.765 8H7.22l-.5-2H16a1 1 0 0 1 .448 1.894z"
    />
  </svg>
);

export default SvgComponent;
