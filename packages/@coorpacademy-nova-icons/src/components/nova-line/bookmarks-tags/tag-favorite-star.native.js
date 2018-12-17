import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={15} cy={5} r={2} />
      <Path d="M9.293 16.293L8 17.586 2.414 12l10-10H18v5.586l-1.707 1.707 1.414 1.414 2-2A.996.996 0 0 0 20 8V1a1 1 0 0 0-1-1h-7a.996.996 0 0 0-.707.293l-11 11a.999.999 0 0 0 0 1.414l7 7a.997.997 0 0 0 1.414 0l2-2-1.414-1.414z" />
      <Path d="M18 12l1.714 4.286H24l-3.708 3.13L22.285 24 18 21.166 13.714 24l1.994-4.584L12 16.286h4.285z" />
    </G>
  </Svg>
);

export default SvgComponent;
