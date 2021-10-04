import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <Path fill={props.color} d="M19 11h-6V3L5 13h6v8z" />
  </Svg>
);

export default SvgComponent;
