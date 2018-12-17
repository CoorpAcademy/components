import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13.5 10c-1.421 0-2.675.675-3.5 1.707C9.175 10.675 7.921 10 6.5 10A4.505 4.505 0 0 0 2 14.5V21h16v-6.5c0-2.481-2.019-4.5-4.5-4.5zM9 19H4v-4.5C4 13.122 5.122 12 6.5 12S9 13.122 9 14.5V19zm7 0h-5v-4.5c0-1.378 1.122-2.5 2.5-2.5s2.5 1.122 2.5 2.5V19z" />
      <Path d="M6.5 13c-.827 0-1.5.673-1.5 1.5V16h3v-1.5c0-.827-.673-1.5-1.5-1.5zM13.5 13c-.827 0-1.5.673-1.5 1.5V16h3v-1.5c0-.827-.673-1.5-1.5-1.5zM21 7v3h-3v2h5V7z" />
      <Path d="M10.515 5c2.189 0 4.277.716 5.989 2h-1.489v2h5V4h-2v1.644A11.949 11.949 0 0 0 10.515 3a11.972 11.972 0 0 0-9.257 4.363L2.8 8.637A9.98 9.98 0 0 1 10.515 5z" />
    </G>
  </Svg>
);

export default SvgComponent;
