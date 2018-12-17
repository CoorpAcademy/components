import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.002H0z" />
    <circle fill="currentColor" cx={12} cy={12} r={2} />
    <g fill="currentColor">
      <path d="M7 13.161v-2.538l-5-1.85v6.711zM10.885 7h2.538l1.899-5H8.613zM7.712 9.29l1.765-1.763-2.186-4.81-4.688 4.681zM16.509 9.509l4.845-2.155-4.683-4.683-1.926 5.074zM17 10.932v2.539l5 1.946V8.71zM9.372 16.179l-1.783-1.637-4.767 2.213 4.763 4.375zM16.223 14.777l-1.732 1.732 2.155 4.845 4.616-4.616zM13.068 17H10.67l-1.804 5h6.424z" />
    </g>
  </svg>
);

export default SvgComponent;
