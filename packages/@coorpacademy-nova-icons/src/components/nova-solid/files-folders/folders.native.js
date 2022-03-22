import * as React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill={props.color}>
      <Path d="M20 6h-6l-1.447-1.894A2 2 0 0010.764 3H7a1 1 0 00-1 1v11a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2z" />
      <Path d="M4 6H2v13c0 1.103.897 2 2 2h15v-2H4V6z" />
    </G>
  </Svg>
);

export default SvgComponent;
