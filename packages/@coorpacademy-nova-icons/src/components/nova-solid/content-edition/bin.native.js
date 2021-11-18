import * as React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill={props.color}>
      <Path d="M15 4.999V3H9v1.999H3v2h18v-2zM5 7.999v12c0 1.102.897 2 2 2h10c1.103 0 2-.898 2-2v-12H5zM11 18H9v-6h2v6zm4 0h-2v-6h2v6z" />
    </G>
  </Svg>
);

export default SvgComponent;
