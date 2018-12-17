import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M23.707 3.708l-1.414-1.414L19 5.586V3h-2v6h6V7h-2.586zM15 10H1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1zm-1 4.586L11.414 12H14v2.586zM2 17.414L4.586 20H2v-2.586zM7.414 20L2 14.586V12h6.586L14 17.414V20H7.414z" />
      <Circle cx={8} cy={16} r={2} />
    </G>
  </Svg>
);

export default SvgComponent;
