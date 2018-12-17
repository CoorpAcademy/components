import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 12.007H8v6h5v-2.25l3 2.25v-6l-3 2.25z" />
      <Path d="M16.414 1.004H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.59l-4.586-4.586zM5 21.004v-18h10v4h4l.001 14H5z" />
    </G>
  </Svg>
);

export default SvgComponent;
