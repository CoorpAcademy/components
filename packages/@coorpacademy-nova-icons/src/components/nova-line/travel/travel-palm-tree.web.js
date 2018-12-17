import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <path
      d="M22.5 6.94l1-1.733c-3.856-2.224-8.683-1.258-11.429 2.064C9.325 3.948 4.498 2.982.643 5.207l1 1.733C4.5 5.29 8.046 5.896 10.222 8.194 6.144 9.049 3.071 12.672 3.071 17h2c0-3.42 2.467-6.271 5.714-6.877L8.097 21.775A.999.999 0 0 0 9.071 23h6a1 1 0 0 0 .975-1.225l-2.689-11.652c3.248.606 5.714 3.457 5.714 6.877h2c0-4.328-3.072-7.952-7.15-8.807 2.176-2.297 5.72-2.903 8.579-1.253zM10.328 21l1.743-7.552L13.814 21h-3.486z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
