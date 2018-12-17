import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <Path
      fill="currentColor"
      d="M18.001 7.999c0-3.309-2.691-6-6-6s-6 2.691-6 6c0 2.967 2.167 5.432 5 5.91V17h-3v2h3v3h2v-3h3v-2h-3v-3.09c2.833-.479 5-2.944 5-5.911zm-10 0c0-2.205 1.794-4 4-4 2.205 0 4 1.795 4 4 0 2.206-1.794 4-4 4a4.003 4.003 0 0 1-4-4z"
    />
  </Svg>
);

export default SvgComponent;
