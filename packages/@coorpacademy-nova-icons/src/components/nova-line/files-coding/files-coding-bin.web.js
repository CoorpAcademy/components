import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16.414 1.003H5c-1.103 0-2 .896-2 2v5h2v-5h10v4h4v1h2V5.59l-4.586-4.587zM19 21.003H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM6.5 18.003c1.378 0 2.5-1.121 2.5-2.5 0-.565-.195-1.081-.513-1.5.318-.419.513-.935.513-1.5 0-1.378-1.122-2.5-2.5-2.5H3v8h3.5zm-1.5-6h1.5a.5.5 0 0 1 0 1H5v-1zm0 3h1.5a.5.5 0 0 1 0 1H5v-1zM19 13.701l-2.168-3.252a.999.999 0 0 0-1.832.554v7h2v-3.697l2.168 3.251A1 1 0 0 0 21 17.002v-7h-2v3.699zM10 16.003v2h4v-2h-1v-4h1v-2h-4v2h1v4z" />
    </g>
  </svg>
);

export default SvgComponent;
