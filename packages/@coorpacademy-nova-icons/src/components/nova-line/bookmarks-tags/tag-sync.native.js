import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={15} cy={5} r={2} />
      <Path d="M8.793 16.793L8 17.586 2.414 12l10-10H18v5.586l-1.209 1.209 1.415 1.413 1.501-1.501A.996.996 0 0 0 20 8V1a1 1 0 0 0-1-1h-7a.996.996 0 0 0-.707.293l-11 11a.999.999 0 0 0 0 1.414l7 7a.997.997 0 0 0 1.414 0l1.5-1.5-1.414-1.414z" />
      <Path d="M18 12c-3.309 0-6 2.691-6 6h2c0-2.205 1.795-4 4-4s4 1.795 4 4c0 2.206-1.795 4-4 4-1.069 0-2.074-.416-2.779-1.119l-.047-.054L17 19h-5v5l1.758-1.757A5.954 5.954 0 0 0 18 24c3.309 0 6-2.691 6-6s-2.691-6-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
