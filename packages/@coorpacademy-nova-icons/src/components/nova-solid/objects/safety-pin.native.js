import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <Path
      fill="currentColor"
      d="M15 2c-2.757 0-5 2.243-5 5v2a1 1 0 0 0 1 1h1a.998.998 0 0 0 .894-.553L13.618 8h2.764L17 9.236v5.321A3.95 3.95 0 0 0 15 14a4.007 4.007 0 0 0-3.678 2.431L6.2 9.6l-1.6 1.2 7.2 9.6.013-.009A3.98 3.98 0 0 0 15 22c2.205 0 4-1.794 4-4v-8a1 1 0 0 0 1-1V7c0-2.757-2.243-5-5-5zm0 18c-1.104 0-2-.897-2-2 0-1.102.896-2 2-2s2 .898 2 2c0 1.103-.896 2-2 2z"
    />
  </Svg>
);

export default SvgComponent;
