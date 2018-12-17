import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14.998 15v3H7.664l-2.666 2v-2h-3V9h8V7h-8a2 2 0 0 0-2 2v9c0 1.103.896 2 2 2h1v4l5.334-4h6.666c1.104 0 2-.897 2-2v-3h-2z" />
      <Path d="M11.998 0v7c0 3.813 3.797 5.579 5.804 5.98l.196.039.196-.039c2.007-.401 5.804-2.168 5.804-5.98V0h-12zm10 7c0 2.763-3.154 3.756-3.998 3.973-.826-.216-4.002-1.225-4.002-3.973V2h8v5z" />
      <Path d="M16.998 9h2V7h2V5h-2V3h-2v2h-2v2h2z" />
    </G>
  </Svg>
);

export default SvgComponent;
