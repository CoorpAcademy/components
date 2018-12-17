import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20 8.002a1 1 0 0 0-1 1v1h-1v-3a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1h-1v-2a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v2h-1v-1a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2H5c-.459 0-.859.312-.971.758l-1 4a.999.999 0 0 0 .139.797l4 6c.185.277.498.444.832.444h9a1 1 0 0 0 .8-.4l3-4a1 1 0 0 0 .2-.6v-7a1 1 0 0 0-1-.999z"
    />
  </Svg>
);

export default SvgComponent;
