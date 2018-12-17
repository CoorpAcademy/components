import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <circle cx={19} cy={19.001} r={3} />
      <path d="M20 6.415l2.707-2.707-1.414-1.414-3 3a1 1 0 0 0-.293.707v9h2V6.415zM2 20.001h1a2 2 0 1 0 4 0h8v-2H2v2zM13 4.001h-2v2H9v-2H7v6h6zM9 11.001H7v2H5v-2H3v6h6zM17 15.556v-4.555h-2v2h-2v-2h-2v6h4.555c.349-.6.845-1.096 1.445-1.445z" />
    </g>
  </svg>
);

export default SvgComponent;
