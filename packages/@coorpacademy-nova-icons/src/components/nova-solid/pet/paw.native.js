import React from "react";
import Svg, { Path, G, Ellipse } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Ellipse cx={12} cy={17} rx={6} ry={5} />
      <Path d="M6 10a2 2 0 0 0-4 0v2a2 2 0 0 0 4 0v-2zM20 8a2 2 0 0 0-2 2v2a2 2 0 0 0 4 0v-2a2 2 0 0 0-2-2zM9 10a2 2 0 0 0 2-2V6a2 2 0 0 0-4 0v2a2 2 0 0 0 2 2zM15 10a2 2 0 0 0 2-2V6a2 2 0 0 0-4 0v2a2 2 0 0 0 2 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
