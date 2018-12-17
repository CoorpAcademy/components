import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 15.501h-.75v1.5H12a.75.75 0 0 0 0-1.5z" />
      <Path d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM9 15.5H6.001v.75H8.25v1.5H6.001v.75H9v1.499H5.251a.749.749 0 0 1-.75-.75V14.75a.75.75 0 0 1 .75-.75H9v1.5zm3 3h-.75V20h-1.5v-5.999H12c1.24 0 2.25 1.009 2.25 2.25 0 1.24-1.01 2.249-2.25 2.249zm7.499-2.999h-2.625a.376.376 0 0 0 0 .75h.75c1.034 0 1.875.842 1.875 1.874A1.877 1.877 0 0 1 17.624 20H15v-1.5h2.624a.376.376 0 0 0 0-.75h-.75a1.875 1.875 0 0 1 0-3.749h2.625v1.5zM15 7V2l5 5h-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
