import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 8h-2V7H9v3h2V9h2v1h2V7h-2zM13 15h-2v-1H9v3h2v-1h2v1h2v-3h-2z" />
      <Path d="M12 1C8.691 1 6 3.691 6 7v10c0 3.309 2.691 6 6 6s6-2.691 6-6V7c0-3.309-2.691-6-6-6zm4 16c0 2.206-1.794 4-4 4s-4-1.794-4-4V7c0-2.205 1.794-4 4-4s4 1.795 4 4v10z" />
    </G>
  </Svg>
);

export default SvgComponent;
