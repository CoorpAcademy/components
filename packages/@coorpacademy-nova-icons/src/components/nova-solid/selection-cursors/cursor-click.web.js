import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M20.414 19.001l-2.707-2.707 1.939-1.94c.194-.194.135-.408-.131-.475l-7.031-1.758c-.266-.066-.43.098-.363.364l1.758 7.03c.066.267.28.326.475.131l1.939-1.94L19 20.416l1.414-1.415z" />
      <path d="M10 6.002c2.205 0 4 1.794 4 4h2c0-3.309-2.691-6-6-6s-6 2.691-6 6 2.691 6 6 6v-2c-2.205 0-4-1.794-4-4s1.795-4 4-4z" />
    </g>
  </svg>
);

export default SvgComponent;
