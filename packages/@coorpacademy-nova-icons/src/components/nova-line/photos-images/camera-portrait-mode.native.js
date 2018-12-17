import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 .999h20v2H2zM2 20.999h20v2H2zM20 4.999H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-10c0-1.103-.897-2-2-2zm-16 12v-10h16l.001 10H4z" />
      <Path d="M12 12.999c-1.841 0-3 1.16-3 3h6c0-1.84-1.159-3-3-3z" />
      <Circle cx={12} cy={9.999} r={2} />
    </G>
  </Svg>
);

export default SvgComponent;
