import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001-.002h24v24h-24z" />
    <G fill="currentColor">
      <Circle cx={17} cy={20} r={2} />
      <Circle cx={8} cy={20} r={2} />
      <Path d="M18.883 8L2.81 1.082l-.79 1.836L13.825 8zM9 17.184V10a1 1 0 0 0-1-1H6c-2.206 0-4 1.795-4 4v6a1 1 0 0 0 1 1h2c0-1.656 1.344-3 3-3 .352 0 .686.073 1 .184zM7 14H4v-1a2 2 0 0 1 2-2h1v3zM10 9v8.779c.609.549 1 1.336 1 2.221h3a3.001 3.001 0 0 1 6 0h1a1 1 0 0 0 1-1V9H10z" />
    </G>
  </Svg>
);

export default SvgComponent;
