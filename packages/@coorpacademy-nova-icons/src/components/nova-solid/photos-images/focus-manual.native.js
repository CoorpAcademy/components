import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4c0-1.103-.896-2-2-2zM4 6.001c0-1.103.897-2 2-2h4v2H6v4H4v-4zM10 20H6c-1.103 0-2-.897-2-2v-4h2v4h4v2zm1.293-7.292L10 11.415V16H8V9a1.002 1.002 0 0 1 1.707-.708L12 10.586l2.293-2.293A1 1 0 0 1 16 9v7h-2v-4.585l-1.293 1.292a.998.998 0 0 1-1.414.001zM20 18c0 1.103-.897 2-2 2h-4v-2h4v-4h2v4zm0-8h-2V6h-4V4h4c1.103 0 2 .897 2 2v4z"
    />
  </Svg>
);

export default SvgComponent;
