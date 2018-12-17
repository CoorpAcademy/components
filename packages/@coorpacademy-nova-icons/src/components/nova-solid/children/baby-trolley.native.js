import React from "react";
import Svg, { Path, Circle, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Circle fill="currentColor" cx={6.998} cy={19.998} r={2} />
    <Circle fill="currentColor" cx={12.998} cy={19.998} r={2} />
    <G fill="currentColor">
      <Path d="M10.705 7.998h.293v-5a1 1 0 0 0-1-1h-1a5.956 5.956 0 0 0-3.299.995l5.006 5.005zM4.911 3.619a5.972 5.972 0 0 0-1.913 4.378h6.293l-4.38-4.378z" />
      <Path d="M16.998 4.998a1 1 0 0 0-.958.713l-.985 3.287H2.998c0 .317-.002.713.006 1.029a.989.989 0 0 0 .045.288l2 6a1 1 0 0 0 .949.683h8a1 1 0 0 0 .958-.712l2.786-9.288h3.256v-2h-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
