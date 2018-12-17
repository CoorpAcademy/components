import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 5l-2-2-2 2-3-2v7c0 2.757 2.243 5 5 5s5-2.243 5-5V3l-3 2zm-2 8c-1.654 0-3-1.346-3-3h6c0 1.654-1.346 3-3 3zM12 19.94l3.433-3.433C14.412 16.182 13.259 16 12 16s-2.412.182-3.433.507L12 19.94zM7.08 17.141C5.16 18.194 4 19.907 4 22v2h7v-2.94l-3.92-3.919zM16.92 17.141L13 21.06V24h7v-2c0-2.093-1.16-3.806-3.08-4.859z" />
    </G>
  </Svg>
);

export default SvgComponent;
