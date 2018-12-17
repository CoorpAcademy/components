import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M2 22h18V9zM4.651 13.759L10 9.175V12h2V6H6v2h2.297l-4.948 4.241z" />
    </G>
  </Svg>
);

export default SvgComponent;
