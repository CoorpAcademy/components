import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M18.555 13.168l-6-4a1 1 0 0 0-1.109 0l-6 4a1 1 0 0 0-.435.974l1 7c.07.493.491.858.989.858h4v2h2v-2h4a1 1 0 0 0 .99-.858l1-7a1.002 1.002 0 0 0-.435-.974zM16.133 20H7.867l-.788-5.518L12 11.201l4.921 3.281L16.133 20z" />
      <Path d="M12 3.779L1.427 11.181l1.146 1.638L12 6.221l9.427 6.598 1.146-1.638zM8.75 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm4 0c0 .551-.449 1-1 1s-1-.449-1-1 .449-1 1-1 1 .449 1 1z" />
    </G>
  </Svg>
);

export default SvgComponent;
