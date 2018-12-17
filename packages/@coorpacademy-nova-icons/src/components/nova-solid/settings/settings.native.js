import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14.5 5.999c0-.345.047-.677.121-1H2v2h12.621a4.458 4.458 0 0 1-.121-1zM14.5 17.999c0-.345.047-.677.121-1H2v2h12.621a4.458 4.458 0 0 1-.121-1zM4.5 11.999c0-.345.047-.677.121-1H2v2h2.621a4.458 4.458 0 0 1-.121-1zM13.379 10.999c.074.323.121.655.121 1s-.047.677-.121 1H22v-2h-8.621z" />
      <Circle cx={19} cy={5.999} r={3} />
      <Circle cx={9} cy={11.999} r={3} />
      <Circle cx={19} cy={17.999} r={3} />
    </G>
  </Svg>
);

export default SvgComponent;
