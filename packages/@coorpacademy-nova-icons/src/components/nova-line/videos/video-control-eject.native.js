import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 15H5c-1.103 0-2 .896-2 2v2c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-2c0-1.104-.897-2-2-2zM5 19v-2h14l.001 2H5zM7.045 13h9.91c.758 0 1.463-.439 1.796-1.12s.249-1.508-.216-2.109L13.578 3.4c-.764-.979-2.392-.981-3.157.002l-4.956 6.37c-.465.6-.55 1.427-.217 2.107S6.287 13 7.045 13zM12 4.629L16.955 11H7.044L12 4.629z" />
    </G>
  </Svg>
);

export default SvgComponent;
