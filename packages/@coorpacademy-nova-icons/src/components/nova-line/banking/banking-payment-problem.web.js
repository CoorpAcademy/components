import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9.021 15v-1.05a2.503 2.503 0 0 0 2-2.45c0-1.378-1.121-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1h3.5V6h-2V5h-2v1.05a2.505 2.505 0 0 0-2 2.45c0 1.378 1.122 2.5 2.5 2.5h1a.5.5 0 0 1 0 1h-3.5v2h2v1h2z" />
      <path d="M5 16c-.152 0-.307.035-.447.105L2 17.382V2.619l2.553 1.274a1 1 0 0 0 1.002-.062L8 2.202l2.445 1.63a1 1 0 0 0 1.002.062L14 2.619V6h2V1a1 1 0 0 0-1.448-.895l-3.48 1.742L8.555.168a1 1 0 0 0-1.109 0L4.928 1.847 1.448.105A1 1 0 0 0 0 1v18c0 .347.18.668.475.852a1.005 1.005 0 0 0 .972.042l3.48-1.74 1.094.729v-2.404l-.467-.312A1.005 1.005 0 0 0 5 16zM15.021 15h2v3h-2z" />
      <circle cx={16.021} cy={20} r={1} />
      <path d="M23.881 22.526l-7-13c-.35-.648-1.412-.648-1.762 0l-7 13A1.002 1.002 0 0 0 9 24h14a.999.999 0 0 0 .881-1.474zM10.674 22L16 12.11 21.326 22H10.674z" />
    </g>
  </svg>
);

export default SvgComponent;
