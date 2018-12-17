import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 19.999h-4v2h4c1.103 0 2-.897 2-2v-4h-2v4zM20 1.999h-4v2h4v4h2v-4c0-1.103-.897-2-2-2zM4 3.999h4v-2H4c-1.103 0-2 .897-2 2v4h2v-4zM4 15.999H2v4c0 1.103.897 2 2 2h4v-2H4v-4zM18 11.999c0-3.308-2.691-6-6-6s-6 2.692-6 6c0 3.309 2.691 6 6 6s6-2.691 6-6zm-6-4a3.96 3.96 0 0 1 2.019.567l-5.452 5.452A3.95 3.95 0 0 1 8 11.999c0-2.206 1.794-4 4-4zm0 8a3.95 3.95 0 0 1-2.019-.567l5.452-5.452c.352.595.567 1.279.567 2.019 0 2.205-1.794 4-4 4z" />
    </g>
  </svg>
);

export default SvgComponent;
