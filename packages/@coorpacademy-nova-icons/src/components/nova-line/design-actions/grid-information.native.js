import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 20.277V16h-1.999v4.277a1.984 1.984 0 0 0-.724.723H11v-5.277A1.994 1.994 0 1 0 8.277 13H3V7.723c.3-.175.548-.423.723-.723H8V5H3.723A1.994 1.994 0 1 0 1 7.723v12.554c-.595.347-1 .986-1 1.723a1.994 1.994 0 1 0 3.723 1h12.555c.347.595.984 1 1.723 1a2 2 0 0 0 2-2A1.998 1.998 0 0 0 19 20.277zM9 21H3.723A2.012 2.012 0 0 0 3 20.277V15h5.277c.175.3.423.548.723.723V21z" />
      <Path d="M17 0c-3.86 0-7 3.141-7 7 0 3.86 3.14 7 7 7s7-3.14 7-7c0-3.859-3.14-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
      <Path d="M16 7h2v4h-2z" />
      <Circle cx={17} cy={5} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
