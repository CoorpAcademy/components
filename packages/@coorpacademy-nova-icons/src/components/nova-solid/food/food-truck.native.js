import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Circle cx={17} cy={19} r={2} />
      <Path d="M9 16.184V9a1 1 0 0 0-1-1H6c-.266 0-.519.106-.707.293l-3 3A1 1 0 0 0 2 12v6a1 1 0 0 0 1 1h2c0-1.656 1.344-3 3-3 .352 0 .686.073 1 .184zM7 13H5v-2h2v2z" />
      <Circle cx={8} cy={19} r={2} />
      <Path d="M20 5h-8c-1.104 0-2 .897-2 2v9.779c.609.549 1 1.336 1 2.221h3a3.001 3.001 0 0 1 6 0h1a1 1 0 0 0 1-1V7c0-1.103-.896-2-2-2zm-4 8c-1.451 0-2.661-.858-2.939-2h5.879c-.278 1.142-1.489 2-2.94 2zm-2.939-3c.278-1.141 1.488-2 2.939-2s2.662.859 2.94 2h-5.879z" />
    </G>
  </Svg>
);

export default SvgComponent;
