import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M15.832.446A1 1 0 0 0 15 .001h-4v6h8.535L15.832.446zM9 .001H5a1 1 0 0 0-.832.446L.465 6.001H9v-6zM19 13.998c.342 0 .674.036 1 .09V8H0v11a1 1 0 0 0 1 1h12v-.003a6 6 0 0 1 6-5.999zM22.293 16.291L18 20.584l-2.293-2.293-1.414 1.414L18 23.412l5.707-5.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
