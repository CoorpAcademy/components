import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 19c0 1.103.898 2 2 2h16c1.104 0 2-.897 2-2V8.002H2V19zm14.984-7.997L12 13.852l-4.984-2.849h9.968zM6 12.726l5.504 3.146a.999.999 0 0 0 .992 0L18 12.726v5.277a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-5.277zM20 3H4c-1.102 0-2 .897-2 2v2.002h20V5c0-1.103-.896-2-2-2zM5 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
