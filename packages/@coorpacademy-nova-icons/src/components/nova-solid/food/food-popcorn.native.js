import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M17 4a2.95 2.95 0 0 0-.9.142C15.18 2.814 13.664 2 12 2s-3.18.814-4.1 2.142A2.95 2.95 0 0 0 7 4C5.346 4 4 5.346 4 7v1h2V7c0-.551.449-1 1-1 .296 0 .516.135.648.248a1 1 0 0 0 1.578-.379C9.689 4.734 10.777 4 12 4s2.311.734 2.774 1.869a1 1 0 0 0 1.578.379A.995.995 0 0 1 17 6c.551 0 1 .449 1 1v1h2V7c0-1.654-1.346-3-3-3zM19 9H5a1 1 0 0 0-.996 1.091l1 11A1 1 0 0 0 6 22h12a1 1 0 0 0 .996-.909l1-11A1 1 0 0 0 19 9zM7 19l-1-7h2l1 7H7zm6 0h-2v-7h2v7zm4 0h-2l1-7h2l-1 7z" />
    </G>
  </Svg>
);

export default SvgComponent;
