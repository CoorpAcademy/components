import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17.646 17.354c.194-.194.135-.408-.132-.475l-7.029-1.758c-.267-.066-.431.098-.364.365l1.758 7.029c.066.267.28.326.475.132l1.939-1.94L17 23.414 18.414 22l-2.707-2.707 1.939-1.939z" />
      <path d="M22 8H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h3V10h10v10h3c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2z" />
      <path d="M12 6V2c0-1.103-.897-2-2-2H2C.897 0 0 .897 0 2v16c0 1.103.897 2 2 2V6h10z" />
    </g>
  </svg>
);

export default SvgComponent;
