import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M18 2v3h-2V2h-3v3h-2V2H8v3H6V2H3v20h18V2h-3zm-6 17a4.966 4.966 0 0 1-3.355-1.316L7 19v-4h5l-1.767 1.414A2.951 2.951 0 0 0 12 17a2.996 2.996 0 0 0 2.816-2h2.083A5.009 5.009 0 0 1 12 19zm5-6h-5l1.767-1.414A2.958 2.958 0 0 0 12 11a2.996 2.996 0 0 0-2.816 2H7.101A5.009 5.009 0 0 1 12 9c1.295 0 2.466.506 3.355 1.316L17 9v4z"
    />
  </Svg>
);

export default SvgComponent;
