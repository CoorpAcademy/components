import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.414 1.004H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.59l-4.586-4.586zM5 21.004v-18h10v4h4l.001 14H5z" />
      <Path d="M12 16.007v-2c0-1.654-1.346-3-3-3s-3 1.346-3 3v2c0 1.654 1.346 3 3 3a2.95 2.95 0 0 0 1.285-.301l1.008 1.008 1.414-1.414-1.008-1.008A2.95 2.95 0 0 0 12 16.007zm-2 0c0 .551-.449 1-1 1s-1-.449-1-1v-2c0-.551.449-1 1-1s1 .449 1 1v2zM12 13.007h2v6h2v-6h2v-2h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
