import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M22 4V2H2v2h1v13a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1V4h1zm-2 16H4v-1h16v1zm-1-3H5V4h14v13z" />
      <Path d="M6 5h5v2H6z" />
      <Circle cx={14} cy={6} r={1} />
      <Circle cx={17} cy={6} r={1} />
      <Path d="M7 16h10a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h8v4H8v-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
