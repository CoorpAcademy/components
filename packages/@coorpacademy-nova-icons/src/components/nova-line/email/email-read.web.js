import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M13.874 3.218c-1.06-.847-2.642-.886-3.794.039L2 10.556V20c0 1.103.896 2 2 2h16c1.104 0 2-.897 2-2v-9.444l-8.126-7.338zM11.375 4.78c.357-.286.937-.249 1.203-.04l6.798 6.141L14.697 14H9.303l-4.68-3.119 6.752-6.101zM4 20v-7.132L8.697 16h6.605L20 12.868 20.002 20H4z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
