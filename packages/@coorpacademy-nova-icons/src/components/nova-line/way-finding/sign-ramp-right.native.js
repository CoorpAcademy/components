import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M4.651 13.759L10 9.175V12h2V6H6v2h2.297l-4.948 4.241zM19.458 10.111a1.003 1.003 0 0 0-1.039.075l-14 10A1 1 0 0 0 5 22h14a1 1 0 0 0 1-1V11a1 1 0 0 0-.542-.889zM18 20H8.121L18 12.943V20z" />
    </G>
  </Svg>
);

export default SvgComponent;
