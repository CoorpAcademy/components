import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M10 9V7H5V2H3v20h2V9zM22.143 17.859L20 15.602V8c0-.155-.036-.309-.105-.447l-2.106-4.212C17.447 2.66 16.762 2.236 16 2.236s-1.447.424-1.789 1.105l-2.105 4.211A.997.997 0 0 0 12 8v7.602L9.857 17.86A2.345 2.345 0 0 0 9 19.667 2.336 2.336 0 0 0 11.333 22h9.334a2.336 2.336 0 0 0 1.476-4.141zM20.667 20h-9.334a.333.333 0 0 1-.2-.601c.111-.081 2.498-2.61 2.592-2.711A.997.997 0 0 0 14 16V8.236l2-4 2 4V16a1 1 0 0 0 .274.688c.095.101 2.481 2.63 2.592 2.711a.333.333 0 0 1-.199.601z" />
      <Circle cx={16} cy={10} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
