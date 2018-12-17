import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M4.445 16.831l3 2a.994.994 0 0 0 1.11 0l3-2A.998.998 0 0 0 12 16v-3a1 1 0 0 0-.684-.949L9 11.279V10H7v1.279l-2.316.772A1 1 0 0 0 4 13v3c0 .334.167.646.445.831zM10 13.721v1.744l-1 .667v-2.745l1 .334zm-4 0l1-.333v2.745l-1-.667v-1.745z" />
      <Path d="M21 2H8C5.795 2 4 3.794 4 6v2a1 1 0 0 0 1 1h8v11H2v2h19a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-4 2h2v3h-2V4zm-2 3h-2V4h2v3zm3 11a2 2 0 1 1 .001-4.001A2 2 0 0 1 18 18z" />
    </G>
  </Svg>
);

export default SvgComponent;
