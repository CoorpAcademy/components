import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <path
      d="M19.42 9.043a7.978 7.978 0 0 0-4.463-4.465A2.995 2.995 0 0 0 12 2a2.995 2.995 0 0 0-2.957 2.58 7.96 7.96 0 0 0-4.465 4.463A2.995 2.995 0 0 0 2 12v2a1 1 0 0 0 1 1h1.582a8.003 8.003 0 0 0 3.281 3.847l-.777 1.747A1 1 0 0 0 8 22h8a1.001 1.001 0 0 0 .914-1.406l-.777-1.746A8.017 8.017 0 0 0 19.411 15H21a1 1 0 0 0 1-1v-2a2.995 2.995 0 0 0-2.58-2.957zM11 5c0-.551.449-1 1-1s1 .449 1 1v1h-2V5zm-7 7c0-.551.449-1 1-1s1 .449 1 1v1H4v-1zm5.54 8L12 14.463 14.461 20H9.54zm5.774-3.006L13 11.788V10h-2v1.788l-2.314 5.206A6.012 6.012 0 0 1 6.81 15C7.633 15 8 14.553 8 14v-2a2.991 2.991 0 0 0-1.429-2.544A5.972 5.972 0 0 1 9 6.81C9 7.635 9.449 8 10 8h4c.553 0 1-.365 1-1.192a5.99 5.99 0 0 1 2.432 2.646A2.994 2.994 0 0 0 16 12v2c0 .553.365 1 1.193 1a6.022 6.022 0 0 1-1.879 1.994zM20 13h-2v-1c0-.551.449-1 1-1s1 .449 1 1v1z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
