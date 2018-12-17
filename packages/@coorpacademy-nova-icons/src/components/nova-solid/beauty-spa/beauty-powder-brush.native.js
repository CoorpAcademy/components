import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001-.001h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M8.848 10.071l2.829-2.828 4.242 4.243-2.828 2.828zM22.283.879c-1.134-1.134-3.108-1.134-4.242 0l-4.95 4.95 4.242 4.244 4.951-4.952a3.003 3.003 0 0 0-.001-4.242zM7.632 11.683l-5.527 2.763a2.013 2.013 0 0 0-1.003 2.422l.982 2.945a2.013 2.013 0 0 0 1.266 1.266c.566.188 3.047 1.084 3.578 1.084a1.99 1.99 0 0 0 1.789-1.105l2.763-5.526-3.848-3.849z" />
    </G>
  </Svg>
);

export default SvgComponent;
