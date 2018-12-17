import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={12} cy={4.999} r={2} />
      <path d="M21.754 18.422A2.993 2.993 0 0 0 23 15.999c0-1.654-1.346-3-3-3s-3 1.346-3 3c0 .998.495 1.877 1.246 2.423-1.325.652-2.246 2.003-2.246 3.577 0-1.574-.921-2.925-2.246-3.577A2.993 2.993 0 0 0 15 15.999c0-1.654-1.346-3-3-3s-3 1.346-3 3c0 .998.495 1.877 1.246 2.423C8.921 19.074 8 20.425 8 21.999c0-1.574-.921-2.925-2.246-3.577A2.993 2.993 0 0 0 7 15.999c0-1.654-1.346-3-3-3s-3 1.346-3 3c0 .998.495 1.877 1.246 2.423C.921 19.074 0 20.425 0 21.999v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1 1 1 0 0 0 1 1h6a1 1 0 0 0 1-1 1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1c0-1.574-.921-2.925-2.246-3.577zM4 14.999c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1zm-2 7c0-1.104.897-2 2-2s2 .896 2 2H2zm10-7c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1zm-2 7c0-1.104.897-2 2-2s2 .896 2 2h-4zm10-7c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1zm-2 7c0-1.104.897-2 2-2s2 .896 2 2h-4zM23-.001H1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1zm-1 10h-7.145c-.353-1.245-1.379-2-2.855-2s-2.502.755-2.855 2H2v-8h20v8z" />
    </g>
  </svg>
);

export default SvgComponent;
