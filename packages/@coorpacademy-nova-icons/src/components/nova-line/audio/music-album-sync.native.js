import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 0c-3.309 0-6 2.691-6 6h2c0-2.205 1.794-4 4-4s4 1.795 4 4c0 2.206-1.794 4-4 4-1.069 0-2.074-.415-2.785-1.125l-.042-.048L17 7h-5v5l1.757-1.757A5.958 5.958 0 0 0 18 12c3.309 0 6-2.691 6-6s-2.691-6-6-6zM5.5 14.825V18A1.5 1.5 0 1 0 7 19.5v-4.131l3.5-1.141V17a1.5 1.5 0 1 0 1.5 1.5v-5.306a.753.753 0 0 0-.983-.712l-5 1.63a.75.75 0 0 0-.517.713z" />
      <Path d="M14 22H2V11h8V9H2c-1.103 0-2 .898-2 2v11c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8h-2v8z" />
    </G>
  </Svg>
);

export default SvgComponent;
