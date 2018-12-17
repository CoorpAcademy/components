import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M14 24a.997.997 0 0 1-.707-.293l-11-11A.996.996 0 0 1 2 12V5a1 1 0 0 1 1-1h7c.266 0 .52.105.707.293l11 11a.999.999 0 0 1 0 1.414l-7 7A.997.997 0 0 1 14 24zM4 11.586l10 10L19.586 16l-10-10H4v5.586z"
      fill="currentColor"
    />
    <Circle cx={7} cy={9} r={2} fill="currentColor" />
    <Path
      d="M22.293 12.707L11.586 2H5V0h7c.266 0 .52.105.707.293l11 11-1.414 1.414z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
