import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 6h17.999v1H22V2c0-1.103-.897-2-2-2H2C.897 0 0 .896 0 2v16c0 1.103.897 2 2 2h8v-2H2V6zm5-2V2h3v2H7zm13 0h-8V2h8v2zM5 2v2H2V2h3z" />
      <path d="M23.924 13.617A1 1 0 0 0 23 13h-1.382l1.276-2.553A1 1 0 0 0 22 9h-6c-.379 0-.725.215-.895.553l-3 6c-.155.31-.138.678.044.974.183.293.504.473.851.473h1.674l-1.636 5.726a1 1 0 0 0 1.67.981l9-9c.285-.287.371-.716.216-1.09zm-7.903 5.946l.94-3.289A.999.999 0 0 0 16 15h-1.382l2-4h3.764l-1.276 2.553A1.001 1.001 0 0 0 20 15h.586l-4.565 4.563z" />
    </g>
  </svg>
);

export default SvgComponent;
