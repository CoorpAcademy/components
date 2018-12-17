import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M22 .001h-4v6l-3-2-3 2v-6H8c-1.103 0-2 .897-2 2v12l4-1 3 3h9c1.104 0 2-.897 2-2v-12c0-1.103-.896-2-2-2zM19 18.001h-8.586l.293-.293a.999.999 0 0 0 0-1.414l-1-1a1 1 0 0 0-1.078-.221L5 16.523v6.478h11c.266 0 .52-.105.707-.293l3-3A1 1 0 0 0 19 18.001zM3 15.001H1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
