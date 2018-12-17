import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.707 8.707l-1.414-1.414L13 9.586V1h-2v8.586L8.707 7.293 7.293 8.707 12 13.414zM15.586 14l-2 2h-3.172l-2-2H2v8h20v-8h-6.414zM20 20H4v-4h3.586l2 2h4.828l2-2H20v4z" />
    </G>
  </Svg>
);

export default SvgComponent;
