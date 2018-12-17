import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11.414 6L8.707 3.293 7.293 4.707 8.586 6H6v2h1.131l-.963 1.445A1.008 1.008 0 0 0 6 10v10c0 .266.105.52.293.707l1 1A.996.996 0 0 0 8 22h8c.266 0 .52-.105.707-.293l1-1A.996.996 0 0 0 18 20V10c0-.197-.059-.39-.168-.555L16.869 8H18V6h-6.586zM16 10.303v9.283l-.414.414H8.414L8 19.586v-9.283L9.535 8h4.93L16 10.303z" />
      <Circle cx={17} cy={4} r={1} />
      <Circle cx={14} cy={3} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
