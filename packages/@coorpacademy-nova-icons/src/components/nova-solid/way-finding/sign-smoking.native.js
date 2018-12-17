import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M7 13h15v3H7zM2 13h3v3H2zM10.36 7.519A3.399 3.399 0 1 0 4.92 3.44a3.392 3.392 0 0 0-.288 3.601A1.987 1.987 0 0 0 3.4 7.8a2 2 0 1 0 3.2 2.4c.312-.416.432-.914.384-1.395a3.388 3.388 0 0 0 3.376-1.286z" />
    </G>
  </Svg>
);

export default SvgComponent;
