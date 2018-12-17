import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M18.071 16.07C19.96 14.182 21 11.671 21 9s-1.04-5.182-2.929-7.071l-1.414 1.414A7.946 7.946 0 0 1 19 9a7.944 7.944 0 0 1-2.343 5.656C15.146 16.168 13.137 17 11 17s-4.146-.832-5.656-2.344L3.929 16.07A9.922 9.922 0 0 0 10 18.95V20H5v2h12v-2h-5v-1.049a9.926 9.926 0 0 0 6.071-2.881z" />
      <circle cx={11} cy={9} r={6} />
    </g>
  </svg>
);

export default SvgComponent;
