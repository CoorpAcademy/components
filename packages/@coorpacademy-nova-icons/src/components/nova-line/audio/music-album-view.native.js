import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M23.414 11l-3.247-3.247C20.691 6.963 21 6.018 21 5c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5a4.966 4.966 0 0 0 2.753-.833L22 12.414 23.414 11zM13 5c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zM9 18.5a1.5 1.5 0 0 0 3 0v-5.306a.753.753 0 0 0-.983-.712l-5 1.63a.75.75 0 0 0-.517.713V18A1.5 1.5 0 1 0 7 19.5v-4.131l3.5-1.141V17A1.5 1.5 0 0 0 9 18.5z" />
      <Path d="M14 22H2V11h8V9H2c-1.103 0-2 .898-2 2v11c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V12h-2v10z" />
    </G>
  </Svg>
);

export default SvgComponent;
