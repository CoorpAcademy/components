import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M7.35 11h9.301l-1.334-3H8.684zM14.873 7l-1.958-4.406a1.001 1.001 0 0 0-1.829 0L9.128 7h5.745zM20.915 20.594L17.094 12H6.907l-3.82 8.594A1 1 0 0 0 4.001 22h5l3-5 3 5h5a1.001 1.001 0 0 0 .914-1.406z" />
    </G>
  </Svg>
);

export default SvgComponent;
