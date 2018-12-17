import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17.618 3l-1-2H11v10h12V3h-5.382zM21 9h-8V3h2.382l1 2H21v4zM20 17h-7.586l.293-.293a1 1 0 0 0 .188-1.154l-1-2a.999.999 0 0 0-1.211-.501l-4.757 1.585A.997.997 0 0 0 5 14H1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h11a1 1 0 0 0 .8-.4l3-4A.999.999 0 0 0 20 17zM4 22H2v-6h2v6zm12.5-1H6v-4.279l4.494-1.498.29.58-1.49 1.49a.992.992 0 0 0-.285.707H9v1h9l-1.5 2z" />
    </g>
  </svg>
);

export default SvgComponent;
