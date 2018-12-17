import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M21 7.586L16.415 3c-.754-.754-2.074-.754-2.828 0L8.793 7.793l7.414 7.413L21 10.414c.78-.779.78-2.049 0-2.828zM13 9.5a1.5 1.5 0 1 1-.001-2.999A1.5 1.5 0 0 1 13 9.5zm5 1a1.5 1.5 0 1 1-.001-2.999A1.5 1.5 0 0 1 18 10.5zM7.793 8.793L3 13.586a2.003 2.003 0 0 0 0 2.828L7.586 21c.377.377.879.584 1.414.584.535 0 1.037-.207 1.414-.584l4.793-4.794-7.414-7.413zM8.5 17a1.5 1.5 0 1 1-.001-2.999A1.5 1.5 0 0 1 8.5 17z" />
    </G>
  </Svg>
);

export default SvgComponent;
