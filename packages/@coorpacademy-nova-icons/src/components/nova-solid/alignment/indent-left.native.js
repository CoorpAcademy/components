import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5.293 9.71l1.293 1.293H2v2h4.586l-1.293 1.293 1.414 1.414 3.707-3.707-3.707-3.707zM11 2.003h2v20h-2zM14 3.003h8v2h-8zM14 7.003h6v2h-6zM14 11.003h8v2h-8zM14 15.003h6v2h-6zM14 19.003h8v2h-8z" />
    </G>
  </Svg>
);

export default SvgComponent;
