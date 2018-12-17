import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 4h-2a2 2 0 0 0-4 0H8v3h8V4z" />
      <Path d="M19 5h-1v3H6V5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-7 15a4.961 4.961 0 0 1-3.355-1.316L7 20v-4h5l-1.767 1.414A2.951 2.951 0 0 0 12 18a2.996 2.996 0 0 0 2.816-2h2.083A5.009 5.009 0 0 1 12 20zm5-6h-5l1.767-1.414A2.958 2.958 0 0 0 12 12a2.996 2.996 0 0 0-2.816 2H7.101A5.009 5.009 0 0 1 12 10c1.295 0 2.466.506 3.355 1.316L17 10v4z" />
    </G>
  </Svg>
);

export default SvgComponent;
