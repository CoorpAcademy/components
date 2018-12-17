import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 18.001H6v-16h10v8.003h2V1.001a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h9v-2zm-6 0H2v-16h2v16z" />
      <Path d="M18 12.001c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 2c.739 0 1.424.215 2.02.567l-5.453 5.452A3.95 3.95 0 0 1 14 18.001c0-2.206 1.795-4 4-4zm0 8a3.956 3.956 0 0 1-2.02-.567l5.453-5.452A3.95 3.95 0 0 1 22 18.001c0 2.206-1.795 4-4 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
