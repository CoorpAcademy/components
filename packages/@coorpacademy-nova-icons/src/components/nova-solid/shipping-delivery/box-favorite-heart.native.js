import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M15.832.446A1 1 0 0 0 15 .001h-4v6h8.535L15.832.446zM20 12.998V8H0v11a1 1 0 0 0 1 1h13.091A5.898 5.898 0 0 1 14 18.998a6 6 0 0 1 6-6zM9 .001H5a1 1 0 0 0-.832.446L.465 6.001H9v-6z" />
      <Path d="M22 15.998c-1.104 0-2 1-2 2 0-1-.896-2-2-2s-2 .894-2 2c0 3 4 6 4 6s4-3 4-6a2 2 0 0 0-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
