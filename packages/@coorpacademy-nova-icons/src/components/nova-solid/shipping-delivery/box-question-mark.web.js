import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M9 .001H5a1 1 0 0 0-.832.446L.465 6.001H9v-6zM15.832.446A1 1 0 0 0 15 .001h-4v6h8.535L15.832.446zM20 9.998V8H0v11a1 1 0 0 0 1 1h14.54A5.969 5.969 0 0 1 14 15.998a6 6 0 0 1 6-6z" />
      <path d="M20 11.998c-2.206 0-4 1.794-4 4h2c0-1.103.897-2 2-2s2 .897 2 2c0 1.102-.897 2-2 2h-1v3h2v-1.127a4.004 4.004 0 0 0 3-3.873c0-2.206-1.794-4-4-4z" />
      <circle cx={20} cy={22.998} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
