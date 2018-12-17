import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2.086 2.002h2v20h-2zM11.086 13.943l3-1.235V5.296l-3-1.235zM6.086 4.002v10c0 1.1.832 1.657 1.85 1.238l1.15-.474V3.237l-1.15-.474c-1.018-.418-1.85.139-1.85 1.239zM21.237 8.24l-5.151-2.121v5.766l5.151-2.121c1.017-.419 1.017-1.105 0-1.524z" />
    </G>
  </Svg>
);

export default SvgComponent;
