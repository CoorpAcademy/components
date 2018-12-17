import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M15.832.446A1.001 1.001 0 0 0 15 .001h-4v6h8.535L15.832.446zM9 .001H5a1 1 0 0 0-.832.446L.465 6.001H9v-6zM12 8.998h8V8H0v11a1 1 0 0 0 1 1h9.366A5.826 5.826 0 0 1 10 17.998v-7a2 2 0 0 1 2-2z" />
      <Path d="M12 10.998v7c0 3.812 3.797 5.58 5.804 5.98l.196.039.196-.04c2.007-.4 5.804-2.168 5.804-5.98v-7H12zm9 7h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
