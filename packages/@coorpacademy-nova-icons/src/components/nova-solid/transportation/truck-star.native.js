import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={17} cy={19} r={2} />
      <Circle cx={8} cy={19} r={2} />
      <Path d="M9 16.184V9a1 1 0 0 0-1-1H6c-2.206 0-4 1.795-4 4v6a1 1 0 0 0 1 1h2a3 3 0 0 1 3-3c.352 0 .686.073 1 .184zM7 13H4v-1a2 2 0 0 1 2-2h1v3zM10 5v11.779c.367.331.648.747.816 1.221h3.367a2.993 2.993 0 0 1 2.816-2 3 3 0 0 1 3 3h1a1 1 0 0 0 1-1V5H10zm8 7l1 3-3-2-3 2 1-3-2-2h2.625L16 6.929 17.251 10H20l-2 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
