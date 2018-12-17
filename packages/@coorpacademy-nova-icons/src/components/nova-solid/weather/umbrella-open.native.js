import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14.004 19.502a.5.5 0 0 1-1 0v-4.5h-2v4.5c0 1.379 1.122 2.5 2.5 2.5s2.5-1.121 2.5-2.5v-.5h-2v.5zM13.003 4.053l.001-1.051a1 1 0 1 0-2 0l-.001 1.051a9.998 9.998 0 0 0-8.995 9.866 7.464 7.464 0 0 1 9.999.007A7.459 7.459 0 0 1 22 13.919a9.998 9.998 0 0 0-8.997-9.866z" />
    </G>
  </Svg>
);

export default SvgComponent;
