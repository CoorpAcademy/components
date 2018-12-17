import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.002H0z" />
    <G fill="currentColor">
      <Path d="M22 12c0-5.521-4.48-10-10-10C6.617 2 2 6.383 2 12c0 5.515 4.486 10 10 10 5.673 0 10-4.67 10-10zm-7.5 2.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM4 12c0-3.626 2.428-6.693 5.742-7.67C11.64 5.04 13 6.856 13 9a5 5 0 0 1-1.01 3.01C11.233 13.01 10 13.5 10 16c0 1.642.804 3.087 2.027 3.999L12 20c-4.411 0-8-3.589-8-8z" />
      <Circle cx={9.5} cy={8.5} r={2} />
    </G>
  </Svg>
);

export default SvgComponent;
