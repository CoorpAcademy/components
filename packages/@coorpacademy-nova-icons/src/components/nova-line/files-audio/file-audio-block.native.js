import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13.265 8.367L8 6.612v5.438a2.5 2.5 0 1 0 2 2.45V9.388l2.632.877.633-1.898z" />
      <Path d="M2 2h10v4h4v4.005h2V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h8v-2H2V2z" />
      <Path d="M18 12c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm-4 6c0-2.206 1.795-4 4-4 .739 0 1.424.215 2.02.567l-5.453 5.452A3.95 3.95 0 0 1 14 18zm4 4a3.956 3.956 0 0 1-2.02-.567l5.453-5.452A3.95 3.95 0 0 1 22 18c0 2.206-1.795 4-4 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
