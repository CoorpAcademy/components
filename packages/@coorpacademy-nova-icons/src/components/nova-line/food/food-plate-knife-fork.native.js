import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M20.707 2.293A1 1 0 0 0 19 3v19h2v-6h2a1 1 0 0 0 1-1c0-9.307-3.158-12.573-3.293-12.707zM21 14V7.243c.487 1.6.908 3.808.986 6.757H21zM8 6V2H6v4c0 .737-.405 1.375-1 1.723V2H3v5.723C2.405 7.375 2 6.737 2 6V2H0v4c0 1.858 1.279 3.411 3 3.858V22h2V9.858c1.721-.447 3-2 3-3.858z" />
      <Path d="M12 9c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.205 0-4-1.794-4-4s1.795-4 4-4 4 1.794 4 4-1.795 4-4 4z" />
      <Path d="M13.5 13a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0-3 0C9 16 12 18 12 18s3-2 3-3.5a1.5 1.5 0 0 0-1.5-1.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
