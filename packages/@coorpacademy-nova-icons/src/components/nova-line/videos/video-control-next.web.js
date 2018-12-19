import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12.599 10.422L6.228 5.466a2.044 2.044 0 0 0-2.107-.217A2.012 2.012 0 0 0 3 7.045v9.91c0 .758.44 1.463 1.121 1.797.692.338 1.506.25 2.107-.217l6.372-4.957c.49-.382.771-.957.771-1.578s-.281-1.196-.772-1.578zM5 16.955v-9.91L11.372 12 5 16.955zM20 3h-2c-1.103 0-2 .896-2 2v14c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2V5c0-1.104-.897-2-2-2zm-2 16V5h2l.001 14H18z" />
    </g>
  </svg>
);

export default SvgComponent;
