import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 20h20v2H2zM6.293 18.706A.994.994 0 0 0 7 19h6a.998.998 0 0 0 .708-.294L21 11.414c.78-.779.78-2.048 0-2.828L15.414 3a2.001 2.001 0 0 0-2.828 0L3 12.586c-.78.78-.78 2.049 0 2.828l3.293 3.292zM10 8.414L15.586 14l-3 3H7.414l-3-3L10 8.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
