import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M5 11c0 1.657 3.357 3 7.5 3s7.5-1.343 7.5-3-3.357-3-7.5-3S5 9.343 5 11zm4.5 1C8.119 12 7 11.553 7 11s1.119-1 2.5-1 2.5.447 2.5 1-1.119 1-2.5 1zM12 14c-4.418 0-8 1.343-8 3s3.582 3 8 3 8-1.343 8-3-3.582-3-8-3zm3.5 4c-1.381 0-2.5-.447-2.5-1s1.119-1 2.5-1 2.5.447 2.5 1-1.119 1-2.5 1zM10 8c3.314 0 6-1.343 6-3s-2.686-3-6-3-6 1.343-6 3 2.687 3 6 3zm2.5-4c.828 0 1.5.447 1.5 1s-.672 1-1.5 1S11 5.553 11 5s.672-1 1.5-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
