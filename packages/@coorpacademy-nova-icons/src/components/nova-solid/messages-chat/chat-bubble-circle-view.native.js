import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15.998 12C12.53 12 9.66 9.477 9.103 6.167 4.493 6.967.998 10.621.998 15c0 1.735.541 3.392 1.573 4.836L-.002 24h11c5.514 0 10-4.037 10-9a8.23 8.23 0 0 0-1.142-4.162A6.959 6.959 0 0 1 15.998 12z" />
      <Path d="M23.412 11l-3.247-3.247c.525-.79.833-1.735.833-2.753 0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5a4.964 4.964 0 0 0 2.753-.833l3.247 3.247L23.412 11zM12.998 5c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
