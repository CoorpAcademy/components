import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 10c-1.077 0-2.063-.44-2.811-1.19L17 7h-5v5l1.763-1.763A6.032 6.032 0 0 0 18 12c3.309 0 6-2.692 6-6h-2c0 2.206-1.794 4-4 4zM22.239 1.761A5.936 5.936 0 0 0 18 0c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4 1.078 0 2.065.44 2.811 1.189L19 5h5V0l-1.761 1.761zM5.5 14.825V18A1.5 1.5 0 1 0 7 19.5v-4.131l3.5-1.142V17a1.5 1.5 0 1 0 1.5 1.5v-5.306a.752.752 0 0 0-.983-.712l-5 1.631a.747.747 0 0 0-.517.712z" />
      <Path d="M14 22H2V11h8V9H2c-1.103 0-2 .897-2 2v11c0 1.102.897 2 2 2h12c1.103 0 2-.898 2-2v-8h-2v8z" />
    </G>
  </Svg>
);

export default SvgComponent;
