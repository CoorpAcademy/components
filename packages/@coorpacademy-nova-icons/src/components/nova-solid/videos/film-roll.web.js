import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17 19.003l-3 2h9v-2zM17 13.003a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-5.219-5.252l-1.525 2.584a2.54 2.54 0 0 0-2.525-.008L6.219 7.735c1.683-.982 3.885-.975 5.562.016zM10 13.003a1 1 0 1 1-1.998.002A1 1 0 0 1 10 13.003zm-6.252-2.781l2.583 1.526a2.545 2.545 0 0 0-.008 2.525l-2.591 1.512c-.982-1.684-.975-3.886.016-5.563zm2.471 8.033l1.525-2.584a2.542 2.542 0 0 0 2.525.009l1.512 2.591c-1.683.982-3.884.975-5.562-.016zm5.45-3.996c.45-.761.452-1.766.008-2.525l2.591-1.512c.982 1.684.976 3.885-.016 5.562l-2.583-1.525z" />
    </g>
  </svg>
);

export default SvgComponent;
