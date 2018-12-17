import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20.759 3.349A.998.998 0 0 0 20 3H4a.998.998 0 0 0-.988 1.152l2 13a.994.994 0 0 0 .541.741l6 3a.99.99 0 0 0 .894.001l6-3a.994.994 0 0 0 .541-.741l2-13a1 1 0 0 0-.229-.804zM17.09 16.337L12 18.882l-5.09-2.545L5.166 5h13.669L17.09 16.337z" />
      <path d="M7.219 8h4.545l-4.04 2.02.495 1.98h5.5l-.5 2h-2.438l-.25-1H8.469l.561 2.243A1 1 0 0 0 10 16h4a1 1 0 0 0 .97-.757l1-4A1 1 0 0 0 15 10h-2.764l4.211-2.106A1 1 0 0 0 16 6H6.719l.5 2z" />
    </g>
  </svg>
);

export default SvgComponent;
