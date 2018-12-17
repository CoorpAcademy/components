import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M16.742 2L14 4.899v11.644l8.555-9.045zM10 2.028H4c-1.103 0-2 .898-2 2v16c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2v-16c0-1.102-.897-2-2-2zm-6 18v-16h6l.002 16H4z" />
      <Path d="M5 6.028h4v4H5zM5 12.028h4v4H5z" />
      <Circle cx={7} cy={18.028} r={1} />
      <Path d="M22.518 12.966l-4.206.474L14 17.999v2.972l9.283-1.046z" />
    </G>
  </Svg>
);

export default SvgComponent;
