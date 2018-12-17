import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Circle cx={17} cy={9} r={1} />
      <Circle cx={21} cy={9} r={1} />
      <Circle cx={19} cy={7} r={1} />
      <Circle cx={21} cy={5} r={1} />
      <Circle cx={19} cy={11} r={1} />
      <Circle cx={21} cy={13} r={1} />
      <Path d="M14 5a4.514 4.514 0 0 0-3.728 2H7a1.998 1.998 0 0 0-1.97 1.704l-3.925 7.849 1.789.895L5 13.236V18a1 1 0 0 0 1 1v3h2v-3h1a1 1 0 0 0 1-1v-6h.272A4.514 4.514 0 0 0 14 14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm-1 6.791a2.503 2.503 0 0 1-1.248-1.221 1 1 0 0 0-.902-.57H9a1 1 0 0 0-1 1v6H7V9h3.85a1 1 0 0 0 .903-.57c.267-.56.711-.985 1.247-1.221v4.582z" />
    </G>
  </Svg>
);

export default SvgComponent;
