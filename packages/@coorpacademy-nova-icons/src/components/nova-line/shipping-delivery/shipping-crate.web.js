import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M22 1H2a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-5 12H7v-2h10v2zm0-4H7V7h10v2zM7 15h10v2H7v-2zM17.586 5H6.414l-2-2h15.172l-2 2zM5 6.415v11.172l-2 2V4.415l2 2zM6.414 19h11.172l2 2H4.414l2-2zM19 17.586V6.415l2-2v15.172l-2-2.001z"
      fill="#767676"
    />
  </svg>
);

export default SvgComponent;
