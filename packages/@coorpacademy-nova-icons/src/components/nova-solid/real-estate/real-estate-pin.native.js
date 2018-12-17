import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Circle cx={12} cy={14.5} r={1.5} />
      <Path d="M21.707 12.293l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 14h1v9h16v-9h1a.999.999 0 0 0 .707-1.707zM12 21s-3.667-3.583-3.667-6.333a3.667 3.667 0 0 1 7.334 0C15.667 17.417 12 21 12 21z" />
    </G>
  </Svg>
);

export default SvgComponent;
