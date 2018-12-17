import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 3H3a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 1.999v3H4v-3h16zM10 14v-4h4v4h-4zm4 2v4h-4v-4h4zm-6-2H4v-4h4v4zm8-4h4v4h-4v-4zM4 16h4v4H4v-4zm12 4v-4h4v4h-4z" />
      <Circle cx={6} cy={11.999} r={1} />
      <Circle cx={12} cy={17.999} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
