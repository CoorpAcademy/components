import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      d="M19 22.001h-7c-.379 0-.725-.214-.895-.553l-3-6A1 1 0 0 1 9 14.001h2v-6a1 1 0 0 1 1.316-.949l3 1c.409.137.684.519.684.949v4.219l3.242.811a1 1 0 0 1 .758.97v6a1 1 0 0 1-1 1zm-6.382-2H18v-4.219l-3.242-.81a1.002 1.002 0 0 1-.758-.971V9.722l-1-.333v5.612a1 1 0 0 1-1 1h-1.382l2 4z"
      fill="currentColor"
    />
    <Path
      d="M18 2.001H6c-1.104 0-2 .898-2 2v7c0 1.103.896 2 2 2h3v-2H6v-7h12v7h2v-7c0-1.102-.896-2-2-2z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
