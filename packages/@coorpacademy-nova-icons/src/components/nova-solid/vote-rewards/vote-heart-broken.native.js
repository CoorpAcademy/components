import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 14.587l1.312-1.311-4-2L11 8.587V5.071c-.85-.661-1.894-1.07-3-1.07-2.757 0-5 2.243-5 5 0 4.8 6.205 9.33 8 10.541v-4.955z" />
      <Path d="M16 4.001c-1.106 0-2.15.409-3 1.07v4.344l-1.312 1.312 4 2L13 15.415v4.127c1.795-1.211 8-5.741 8-10.541 0-2.757-2.243-5-5-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
