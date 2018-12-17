import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 7c1.545 0 2.909.715 3.826 1.816a4.762 4.762 0 0 0 1.032-2.959A4.865 4.865 0 0 0 12 1h-1v6.101A4.988 4.988 0 0 1 12 7zM7 12c0-1.545.716-2.909 1.816-3.826a4.761 4.761 0 0 0-2.959-1.031A4.863 4.863 0 0 0 1 12v1h6.101A4.988 4.988 0 0 1 7 12zM12 17c-1.545 0-2.909-.716-3.826-1.816a4.763 4.763 0 0 0-1.031 2.959A4.863 4.863 0 0 0 12 23h1v-6.101A4.988 4.988 0 0 1 12 17zM16.899 11c.066.323.101.657.101 1 0 1.545-.716 2.909-1.816 3.826a4.761 4.761 0 0 0 2.959 1.031A4.863 4.863 0 0 0 23 12v-1h-6.101z" />
      <Circle cx={12} cy={12} r={3} />
    </G>
  </Svg>
);

export default SvgComponent;
