import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6.75 15.5H6V17h.75a.75.75 0 0 0 0-1.5z" />
      <Path d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM6.75 18.5H6V20H4.5v-6h2.25C7.99 14 9 15.009 9 16.25S7.99 18.5 6.75 18.5zm5.5 0h-.75V20H10v-6h2.25c1.24 0 2.25 1.009 2.25 2.25s-1.01 2.25-2.25 2.25zm7.25-3H18V20h-1.5v-4.5H15V14h4.5v1.5zM15 7V2l5 5h-5z" />
      <Path d="M12.25 15.5h-.75V17h.75a.75.75 0 0 0 0-1.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
