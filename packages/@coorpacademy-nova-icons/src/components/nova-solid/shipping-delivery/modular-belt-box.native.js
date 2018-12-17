import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M2 18h2v2H2v2h20v-2h-2v-2h2v-2H2v2zm8 0h4v2h-4v-2zM10 7H7v3H5V7H2v8h8zM18 4v5h-3V4h-4v11h11V4z" />
    </G>
  </Svg>
);

export default SvgComponent;
