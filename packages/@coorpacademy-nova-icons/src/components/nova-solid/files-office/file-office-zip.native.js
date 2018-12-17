import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.25 15.5h-.75V17h.75a.75.75 0 0 0 0-1.5z" />
      <Path d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM9.5 20H5.75a.75.75 0 0 1-.623-1.166L7.349 15.5H5V14h3.75a.75.75 0 0 1 .623 1.165L7.151 18.5H9.5V20zm4.5-4.5h-.75v3H14V20h-3v-1.5h.75v-3H11V14h3v1.5zm3.25 3h-.75V20H15v-6h2.25a2.252 2.252 0 0 1 2.25 2.25 2.252 2.252 0 0 1-2.25 2.25zM15 7V2l5 5h-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
