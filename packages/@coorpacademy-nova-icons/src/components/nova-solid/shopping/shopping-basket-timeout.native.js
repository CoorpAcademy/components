import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18.58 10.001h-.56c.187.001.37.015.554.028l.006-.028zM20 9.001v-2h-3.42L12.868.504l-1.736.994 3.145 5.503H5.724l3.144-5.503L7.132.504 3.42 7.001H0v2zM17.98 10.001H1.421l1.604 7.217a.996.996 0 0 0 .975.783h6V18a8 8 0 0 1 7.98-7.999z" />
      <Path d="M18 11.984c-3.309 0-6 2.692-6 6s2.691 6 6 6 6-2.692 6-6-2.691-6-6-6zm3 7h-4v-5h2v3h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
