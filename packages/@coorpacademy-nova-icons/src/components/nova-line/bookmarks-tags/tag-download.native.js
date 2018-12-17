import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 8V1a1 1 0 0 0-1-1h-7a.996.996 0 0 0-.707.293l-11 11a.999.999 0 0 0 0 1.414l7 7a.997.997 0 0 0 1.414 0l11-11A.996.996 0 0 0 20 8zm-2-.414l-10 10L2.414 12l10-10H18v5.586z" />
      <Circle cx={15} cy={5} r={2} />
      <Path d="M22.293 17.286L20 19.579v-5.586h-2v5.586l-2.293-2.293-1.414 1.414L19 23.407l4.707-4.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
