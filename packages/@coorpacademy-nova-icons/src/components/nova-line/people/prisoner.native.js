import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 15c2.757 0 5-2.243 5-5V7a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v3c0 2.757 2.243 5 5 5zm0-2a3.004 3.004 0 0 1-2.828-2h5.656A3.004 3.004 0 0 1 12 13zM9 7h6v2H9V7zM12 16c-4.711 0-8 2.467-8 6v2h16v-2c0-3.533-3.289-6-8-6zm4.131 3H7.869c1.045-.632 2.467-1 4.131-1s3.086.368 4.131 1zM6 22c0-.351.061-.684.166-1h11.668c.105.316.166.649.166 1H6z" />
    </G>
  </Svg>
);

export default SvgComponent;
