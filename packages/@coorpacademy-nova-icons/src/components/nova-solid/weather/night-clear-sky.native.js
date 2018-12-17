import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.109 2.894A9.92 9.92 0 0 1 17 7.002c0 5.524-4.477 10-10 10a9.93 9.93 0 0 1-4.109-.891c1.568 3.47 5.053 5.891 9.109 5.891 5.522 0 10-4.476 10-10 0-4.057-2.42-7.541-5.891-9.108zM4.909 7.093L6 10.002l1.091-2.909L10 6.002 7.091 4.911 6 2.002 4.909 4.911 2 6.002z" />
      <Path d="M11.25 9.252l-2.25.75 2.25.75.75 2.25.75-2.25 2.25-.75-2.25-.75-.75-2.25z" />
    </G>
  </Svg>
);

export default SvgComponent;
