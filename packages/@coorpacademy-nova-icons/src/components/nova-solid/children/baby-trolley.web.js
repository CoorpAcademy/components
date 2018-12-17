import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <circle fill="currentColor" cx={6.998} cy={19.998} r={2} />
    <circle fill="currentColor" cx={12.998} cy={19.998} r={2} />
    <g fill="currentColor">
      <path d="M10.705 7.998h.293v-5a1 1 0 0 0-1-1h-1a5.956 5.956 0 0 0-3.299.995l5.006 5.005zM4.911 3.619a5.972 5.972 0 0 0-1.913 4.378h6.293l-4.38-4.378z" />
      <path d="M16.998 4.998a1 1 0 0 0-.958.713l-.985 3.287H2.998c0 .317-.002.713.006 1.029a.989.989 0 0 0 .045.288l2 6a1 1 0 0 0 .949.683h8a1 1 0 0 0 .958-.712l2.786-9.288h3.256v-2h-4z" />
    </g>
  </svg>
);

export default SvgComponent;
