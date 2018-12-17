import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002.001h24v24.001h-24z" />
    <path
      d="M21.924 3.619A.999.999 0 0 0 21 3.001H8c-2.757 0-5 2.243-5 5s2.243 5 5 5h2v2.246l-5 1.43v-2.676H3v7h2v-2.246l6.275-1.792a1 1 0 0 0 .725-.962v-3h4a1 1 0 0 0 1-1h2a1 1 0 0 0 1-1v-3a.994.994 0 0 0-.655-.931l2.362-2.362a.996.996 0 0 0 .217-1.089zm-6.631 4.675a1.003 1.003 0 0 0-.293.707v2H8c-1.654 0-3-1.346-3-3 0-1.302.839-2.401 2-2.815v2.815h2v-3h1v2h2v-2h6.586l-3.293 3.293zM18 9.001v1h-1v-.585l.414-.415H18z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
