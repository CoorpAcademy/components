import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <circle cx={12} cy={10.001} r={1.556} />
      <path d="M12 3.001a7 7 0 0 0-6.706 9h4.341a3.088 3.088 0 0 1-.746-2 3.111 3.111 0 0 1 6.222 0c0 .766-.288 1.458-.746 2h4.341a7 7 0 0 0-6.706-9zM20 14.001H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm-14 4H4v-2h2v2zm14 0h-5v-2h5v2z" />
    </g>
  </svg>
);

export default SvgComponent;
